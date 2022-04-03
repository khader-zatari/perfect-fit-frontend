import React, { useState } from "react";
import { Button, FlatList, CheckIcon, Select } from "native-base";
import { Text, View, StyleSheet, ScrollView, Dimensions, TextInput } from "react-native";
import SelectMultiple from "react-native-select-multiple";

const { height, width } = Dimensions.get("window");
const AdminAddProduct = (props) => {
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
    const categories = ["t-shirts", "pants"];
    const [category, setCategory] = useState(null);
    const colors = ["white", "black", "blue", "grey"];
    const [color, setColor] = useState(null);
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Add Product</Text>
                </View>
                <View>
                    <View style={styles.input}>
                        <Text style={{ paddingVertical: 10, fontSize: 11 }}>Brand</Text>
                        <TextInput style={styles.TextInput} placeholder="Brand" id="Brand" name="Brand" />
                    </View>
                    <View style={styles.input}>
                        <Text style={{ paddingVertical: 10, fontSize: 11 }}>name</Text>
                        <TextInput style={styles.TextInput} placeholder="name" id="name" name="name" />
                    </View>
                    <View style={styles.input}>
                        <Text style={{ paddingVertical: 10, fontSize: 11 }}>description</Text>
                        <TextInput style={styles.TextInput} placeholder="description" id="description" name="description" />
                    </View>
                    <View style={styles.input}>
                        <Text style={{ paddingVertical: 10, fontSize: 11 }}>price</Text>
                        <TextInput style={styles.TextInput} placeholder="price" id="price" name="price" />
                    </View>
                    <View>
                        <Select
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
                                return <Select.Item label={item} value={item} />;
                            })}
                        </Select>
                    </View>
                    <View>
                        <Select
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
                                return <Select.Item label={item} value={item} />;
                            })}
                        </Select>
                    </View>
                </View>

                <View style={styles.secondPart}>
                    <View style={styles.buttonContainer}>
                        <Button
                            style={styles.button}
                            size="12"
                            onPress={() => {
                                props.navigation.navigate("AdminAddProductSecond");
                            }}
                        >
                            <Text style={{ color: "#FFF", fontSize: 16, fontWeight: "bold" }}>NEXT STEP</Text>
                        </Button>
                    </View>
                </View>
            </View>
        </ScrollView>
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

export default AdminAddProduct;
