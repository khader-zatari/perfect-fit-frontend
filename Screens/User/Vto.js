import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert, Image, ScrollView, Dimensions } from "react-native";
import { Button } from "native-base";
import { Camera } from "expo-camera";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import baseURL from "../../assets/baseUrl";
import * as ImagePicker from "expo-image-picker";
import { RNS3 } from "react-native-aws3";
import { ACCESSKEY, SECRETKEY } from "../../Shared/Secret";

const { height, width } = Dimensions.get("window");
const Vto = (props) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [showCamera, setShowCamera] = useState(false);
    const cameraRef = useRef(null);

    const [personImage, setPersonImage] = useState(null);
    const [vtoImage, setVtoImage] = useState(null);

    const user = props.route.params.user; // redux
    // const clothImage = props.route.params.clothImage; //redux

    useEffect(() => {
        axios
            .get(`${baseURL}users/${user._id}`)
            .then((res) => {
                setPersonImage(res.data.personImage);
                setVtoImage(res.data.vtoImage);
            })
            .catch((error) => {
                console.log(error);
            });

        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const takePhoto = async () => {
        if (cameraRef) {
            console.log("in take picture");
        }
        try {
            let photo = await cameraRef.current.takePictureAsync({
                allosEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            //upload the image
            if (!photo.cancelled) {
                const ext = photo.uri.substring(photo.uri.lastIndexOf(".") + 1);
                const fileName = photo.uri.replace(/^.*[\\\/]/, "");
                var formData = new FormData();
                formData.append("files", {
                    uri: photo.uri,
                    fileName,
                    type: `image/${ext}`,
                });
                uploadImageToS3(formData)
                    .then((res) => {
                        //add the personImage uri to the database for the user.

                        axios
                            .put(`${baseURL}users/${user._id}`, { personImage: res.src })
                            .then((res) => {
                                if (res.status == 200) {
                                    console.log("success");
                                }
                            })
                            .catch((error) => {
                                console.log("error");
                            });
                        console.log("sucsess");
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            }
            //upload photo.uri to AWS S3

            return photo.uri;
        } catch (e) {
            console.log(e);
        }
    };
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
                .then((res) => {
                    console.log(res.src);
                    //add the personImage uri to the database for the user.
                    axios
                        .put(`${baseURL}users/${user._id}`, { personImage: res.src })
                        .then((res) => {
                            if (res.status == 200) {
                                console.log("success");
                            }
                        })
                        .catch((error) => {
                            console.log("error");
                        });
                    console.log("sucsess");
                })
                .catch((e) => {
                    console.log(e);
                });
            // setPersonImage(result.uri);
        }
    };
    const uploadImageToS3 = async (image) => {
        const options = {
            keyPrefix: "uploads/",
            bucket: "pfakhader",
            region: "eu-west-1",
            accessKey: ACCESSKEY,
            secretKey: SECRETKEY,
            successActionStatus: 201,
        };
        const fileName = image.uri.replace(/^.*[\\\/]/, "");
        const file = {
            uri: image.uri,
            name: fileName,
            type: image.uri.substring(image.uri.lastIndexOf(".") + 1), //extracting filename from image path,
        };

        setPersonImage(image.uri);
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

    return (
        <View style={styles.container}>
            {showCamera ? (
                <Camera style={styles.camera} type={type} ref={cameraRef}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={async () => {
                                const r = await takePhoto();
                                if (!r.uri) {
                                    setPersonImage(r.uri);
                                }
                                setShowCamera(false);
                            }}
                        >
                            <Text style={styles.text}>Take Photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => setShowCamera(false)}>
                            <Text style={styles.text}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </Camera>
            ) : (
                <SafeAreaView>
                    <View style={styles.containerSecond}>
                        <ScrollView>
                            {personImage != "" ? (
                                <View style={{ width: "90%", height: height / 2, alignSelf: "center", borderColor: "#000" }}>
                                    {Image && (
                                        <Image
                                            source={{
                                                uri: personImage,
                                                headers: {
                                                    Accept: "*/*",
                                                },
                                            }}
                                            style={{ resizeMode: "contain", width: "100%", height: "100%" }}
                                        />
                                    )}
                                </View>
                            ) : null}
                            <View style={styles.buttonsContainerSecond}>
                                <View style={styles.buttonContainerSecond}>
                                    <Button style={styles.buttonSecond} size="10" onPress={() => setShowCamera(true)}>
                                        Take Photo
                                    </Button>
                                </View>
                                <View style={styles.buttonContainerSecond}>
                                    <Button style={styles.buttonSecond} size="10" onPress={pickImage}>
                                        from Galary
                                    </Button>
                                </View>
                            </View>
                            {vtoImage != "" ? <View style={{ width: "90%", height: height / 2, alignSelf: "center", borderColor: "#000" }}>{Image && <Image source={{ uri: vtoImage }} style={{ resizeMode: "contain", width: "100%", height: "100%" }} />}</View> : null}

                            <View style={styles.buttonsContainerSecond}>
                                <View style={{ flex: 1, alignItems: "center", width: "100%", justifyContent: "center" }}>
                                    <Button style={styles.buttonSecond} size="10">
                                        Generate Photo
                                    </Button>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </SafeAreaView>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    containerSecond: { width: width, height: "100%" },
    buttonsContainerSecond: { flex: 1, flexDirection: "row" },
    buttonContainerSecond: {
        flex: 1,
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        marginVertical: "20%",
    },
    buttonSecond: { width: "90%" },
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: "transparent",
        flexDirection: "row",
        margin: 20,
    },
    button: {
        flex: 1,
        alignSelf: "flex-end",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        color: "white",
    },
});

export default Vto;
