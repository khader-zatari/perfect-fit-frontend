import React, { useState } from "react";
import { Button, FlatList } from "native-base";
import { Text, View, StyleSheet, ScrollView, Dimensions, TextInput } from "react-native";
import SelectMultiple from "react-native-select-multiple";
import baseURL from "../../assets/baseUrl";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";

const { height, width } = Dimensions.get("window");
const AdminAddProductSecond = (props) => {
    const information = props.route.params;

    const personTypeFun = (selected) => {
        setPersonType(selected);
    };
    const pantsSizeFun = (selected) => {
        setpantsSize(selected);
    };
    const tShirtSizeFun = (selected) => {
        setTShirtSize(selected);
    };

    const [tShirtSize, setTShirtSize] = useState([]);
    const [personType, setPersonType] = useState([]);
    const [pantsSize, setpantsSize] = useState([]);

    const pantsSizes = ["30", "32", "34", "36", "38", "40"];
    const tShirtSizes = ["S", "L", "XL", "XXL"];
    const personTypes = ["Men", "Women", "Kids"];

    const addProduct = () => {
        let data = {
            images: information.images,
            image: information.images[0],
            name: information.name,
            brand: information.brand,
            price: information.price,
            description: information.description,
            category: information.category,
            color: information.color,
            admin: information.user._id,
            size: tShirtSize.map((item) => item.value).length > 0 ? tShirtSize.map((item) => item.value) : pantsSize.map((item) => item.value),
            personType: personType.map((item) => item.value),
        };
        console.log("the data is", data);
        //if the item is not new so we want to update it.

        //else it's new so add a new product

        axios
            .post(`${baseURL}products`, data)
            .then((res) => {
                if (res.status == 200 || res.status == 201) {
                    console.log("New Product added");
                    setTimeout(() => {
                        props.navigation.navigate("AdminProducts", { user: information.user });
                    }, 500);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ marginVertical: 20 }}>
                        <SelectMultiple items={personTypes} selectedItems={personType} onSelectionsChange={personTypeFun} />
                    </View>

                    <View style={{ marginVertical: 20 }}>
                        <SelectMultiple items={tShirtSizes} selectedItems={tShirtSize} onSelectionsChange={tShirtSizeFun} />
                    </View>

                    <View style={{ marginVertical: 20 }}>
                        <SelectMultiple items={pantsSizes} selectedItems={pantsSize} onSelectionsChange={pantsSizeFun} />
                    </View>

                    <View style={styles.secondPart}>
                        <View style={styles.buttonContainer}>
                            <Button style={styles.button} size="12" onPress={addProduct}>
                                <Text style={{ color: "#FFF", fontSize: 16, fontWeight: "bold" }}>SAVE PRODUCT</Text>
                            </Button>
                        </View>
                    </View>
                    <View style={styles.photoButton}></View>
                </ScrollView>
            </View>
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
});

export default AdminAddProductSecond;
