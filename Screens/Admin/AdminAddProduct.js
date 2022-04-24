import React, { useState } from "react";
import { Button, FlatList, CheckIcon, Select } from "native-base";
import { Text, View, StyleSheet, ScrollView, Dimensions, TextInput } from "react-native";
import SelectMultiple from "react-native-select-multiple";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { RNS3 } from "react-native-aws3";
var secret = require("../../Shared/Secret");
const { height, width } = Dimensions.get("window");
const AdminAddProduct = (props) => {
    const user = props.route.params.user;
    const categories = ["t-shirts", "pants"];
    const colors = ["white", "black", "blue", "grey", "As Photos"];

    const [category, setCategory] = useState(null);
    const [color, setColor] = useState(null);
    const [brand, setBrand] = useState(null);
    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [price, setPrice] = useState(null);
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
                .then((res) => {
                    setTemp(res.src);
                    setImages((prevState) => [...prevState, res.src]);
                    console.log("sucsess");
                })
                .catch((e) => {
                    console.log(e);
                });

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

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Add Product</Text>
                    </View>
                    <View>
                        <View style={styles.input}>
                            <Text style={{ paddingVertical: 10, fontSize: 11 }}>Brand</Text>
                            <TextInput style={styles.TextInput} placeholder="Brand" id="Brand" name="Brand" onChangeText={(text) => setBrand(text)} />
                        </View>
                        <View style={styles.input}>
                            <Text style={{ paddingVertical: 10, fontSize: 11 }}>name</Text>
                            <TextInput style={styles.TextInput} placeholder="name" id="name" name="name" onChangeText={(text) => setName(text)} />
                        </View>
                        <View style={styles.input}>
                            <Text style={{ paddingVertical: 10, fontSize: 11 }}>description</Text>
                            <TextInput style={styles.TextInput} placeholder="description" id="description" name="description" onChangeText={(text) => setDescription(text)} />
                        </View>
                        <View style={styles.input}>
                            <Text style={{ paddingVertical: 10, fontSize: 11 }}>price</Text>
                            <TextInput style={styles.TextInput} placeholder="price" id="price" name="price" onChangeText={(text) => setPrice(text)} />
                        </View>
                        <View>
                            <Select
                                key="categoy"
                                selectedValue={category}
                                accessibilityLabel="category"
                                placeholder="category"
                                color="black"
                                _selectedItem={{
                                    bg: "teal.600",
                                    endIcon: <CheckIcon size="5" />,
                                }}
                                mt={1}
                                onValueChange={(category) => setCategory(category)}
                            >
                                {categories.map((item) => {
                                    return <Select.Item label={item} value={item} key={item} />;
                                })}
                            </Select>
                        </View>
                        <View>
                            <Select
                                key="color"
                                selectedValue={color}
                                accessibilityLabel="Color"
                                placeholder="Color"
                                color="black"
                                _selectedItem={{
                                    bg: "teal.600",
                                    endIcon: <CheckIcon size="5" />,
                                }}
                                mt={1}
                                onValueChange={(color) => setColor(color)}
                            >
                                {colors.map((item) => {
                                    return <Select.Item label={item} value={item} key={item} />;
                                })}
                            </Select>
                        </View>
                        <View style={styles.photoUploadContainer}>
                            <View style={styles.buttonphotoUploadContainer}>
                                <Button style={{ width: "90%" }} size="10" onPress={pickImage}>
                                    Pick image
                                </Button>
                            </View>

                            <View style={styles.buttonphotoUploadContainer}>
                                <Button style={{ width: "90%" }} size="10" onPress={pickImage}>
                                    Pick image
                                </Button>
                            </View>
                            <View style={styles.buttonphotoUploadContainer}>
                                <Button style={{ width: "90%" }} size="10" onPress={pickImage}>
                                    Pick image
                                </Button>

                                {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
                            </View>
                        </View>
                    </View>
                    <View style={styles.secondPart}>
                        <View style={styles.buttonContainer}>
                            <Button
                                style={styles.button}
                                size="12"
                                onPress={() => {
                                    props.navigation.navigate("AdminAddProductSecond", { description: description, price: price, color: color, category: category, brand: brand, name: name, images: images, user: user });
                                }}
                            >
                                <Text style={{ color: "#FFF", fontSize: 16, fontWeight: "bold" }}>NEXT STEP</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        width: "90%",
        alignSelf: "center",
    },
    headerText: {
        fontSize: 30,
        fontWeight: "bold",
    },
    headerContainer: {
        height: height / 9,
        justifyContent: "center",
    },
    input: {
        paddingLeft: 20,
        backgroundColor: "#EBECF0",
        width: "100%",
        height: height / 12,
        padding: "1%",
        marginBottom: 20,
    },
    TextInput: {
        fontSize: 16,
    },
    buttonContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: "10%",
    },
    button: { width: "100%" },
    secondPart: {},
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    photoUploadContainer: { flex: 1, flexDirection: "row" },
    buttonphotoUploadContainer: {
        flex: 1,
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        marginVertical: "5%",
    },
});

export default AdminAddProduct;
