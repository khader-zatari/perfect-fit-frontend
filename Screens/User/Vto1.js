import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert, Image } from "react-native";
import { Button } from "native-base";
import * as ImagePicker from "expo-image-picker";
import { RNS3 } from "react-native-aws3";
import { SafeAreaView } from "react-native-safe-area-context";
var secret = require("../../Shared/Secret");

const Vto1 = (props) => {
    const [images, setImages] = useState([]);
    const [temp, setTemp] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            uploadImageToS3(result)
                .then(() => {
                    console.log("sucsess");
                })
                .catch((e) => {
                    console.log(e);
                });
            setTemp(result.uri);
            setImages((prevState) => [...prevState, result.uri]);
            console.log(images);
        }
    };
    const uploadImageToS3 = async (image) => {
        const options = {
            keyPrefix: "uploads/",
            bucket: "pfakhader",
            region: "eu-west-1",
            accessKey: secret.ACCESSKEY,
            secretKey: secret.SECRETKEY,
            successActionStatus: 201,
        };
        const fileName = image.uri.replace(/^.*[\\\/]/, "");
        const file = {
            uri: image.uri,
            name: fileName,
            type: image.uri.substring(image.uri.lastIndexOf(".") + 1), //extracting filename from image path,
        };

        return new Promise((resolve, reject) => {
            RNS3.put(file, options)
                .then((res) => {
                    if (res.status === 201) {
                        const { postResponse } = res.body;
                        resolve({
                            src: postResponse.location,
                        });
                    } else {
                        console.log("error uploading to s3", res);
                    }
                })
                .catch((err) => {
                    console.log("error uploading to s3", err);
                    reject(err);
                });
        });
    };
    const uploadAllImages = (image) => {
        let promises = [];
        image.map((image, i) => {
            promises.push(uploadImageToS3(image));
        });
    };

    return (
        <SafeAreaView>
            <View style={styles.photoUploadContainer}>
                <View style={styles.buttonphotoUploadContainer}>
                    <Button style={styles.button} size="10" onPress={pickImage}>
                        Pick image
                    </Button>
                </View>

                <View style={styles.buttonphotoUploadContainer}>
                    <Button style={styles.button} size="10" onPress={pickImage}>
                        Pick image
                    </Button>
                </View>
                <View style={styles.buttonphotoUploadContainer}>
                    <Button style={styles.button} size="10" onPress={pickImage}>
                        Pick image
                    </Button>

                    {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
                </View>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    photoUploadContainer: { flex: 1, flexDirection: "row" },
    buttonphotoUploadContainer: {
        flex: 1,
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        marginVertical: "5%",
    },
    button: { width: "90%" },
});

export default Vto1;
