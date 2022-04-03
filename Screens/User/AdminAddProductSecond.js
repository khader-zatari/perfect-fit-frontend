import React, { useState } from "react";
import { Button, FlatList } from "native-base";
import { Text, View, StyleSheet, ScrollView, Dimensions, TextInput } from "react-native";
import SelectMultiple from "react-native-select-multiple";

const { height, width } = Dimensions.get("window");
const AdminAddProductSecond = () => {
    const personTypes = ["Men", "Women", "Kids"];
    const [personType, setPersonType] = useState([]);
    const personTypeFun = (selected) => {
        setPersonType(selected);
        console.log(personType);
    };

    const tShirtSizes = ["S", "L", "XL", "XXL"];
    const [tShirtSize, setTShirtSize] = useState([]);
    const tShirtSizeFun = (selected) => {
        setTShirtSize(selected);
        console.log(tShirtSize);
    };

    const pantsSizes = ["30", "32", "34", "36", "38", "40"];
    const [pantsSize, setpantsSize] = useState([]);
    const pantsSizeFun = (selected) => {
        setpantsSize(selected);
        console.log(tShirtSize);
    };

    return (
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
                <View style={{ marginVertical: 20 }}>
                    <SelectMultiple items={pantsSizes} selectedItems={pantsSize} onSelectionsChange={pantsSizeFun} />
                </View>

                <View style={styles.secondPart}>
                    <View style={styles.buttonContainer}>
                        <Button style={styles.button} size="12" onPress={() => {}}>
                            <Text style={{ color: "#FFF", fontSize: 16, fontWeight: "bold" }}>SAVE PRODUCT</Text>
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "90%",
        height: height / 2,
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
