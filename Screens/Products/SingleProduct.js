import React, { useState } from "react";
import { Text, View, ScrollView, StyleSheet, Image, Dimensions } from "react-native";
import { Select, Box, CheckIcon, Center, NativeBaseProvider, Button, Row } from "native-base";
import { connect } from "react-redux";
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../../Redux/constants";
const { width, height } = Dimensions.get("window");
const SingleProduct = (props) => {
    const product = props.route.params.product;
    let [color, setColor] = useState("");
    let [size, setSize] = useState("");
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} resizeMode="contain" source={require("../../assets/1638427112t-shirt-png.png")} />
                </View>
                <View style={styles.secondPart}>
                    <Text style={{ marginTop: 20, fontSize: 25, fontWeight: "bold", textAlign: "center" }}>{product.name}</Text>
                    <View style={styles.selectContainer}>
                        <View style={styles.selectLeft}>
                            <Select
                                selectedValue={size}
                                accessibilityLabel="Size"
                                placeholder="Size"
                                color="black"
                                _selectedItem={{
                                    bg: "teal.600",
                                    endIcon: <CheckIcon size="5" />,
                                }}
                                mt={1}
                                onValueChange={(size) => setSize(size)}
                            >
                                {product.size.map((item) => {
                                    return <Select.Item label={item} value={item} />;
                                })}
                            </Select>
                        </View>
                        <View style={styles.selectRight}>
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
                                {product.color.map((item) => {
                                    return <Select.Item label={item} value={item} />;
                                })}
                            </Select>
                        </View>
                    </View>
                    <View style={{ width: "90%", marginBottom: 10, alignSelf: "center" }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "right" }}>{product.price}</Text>
                    </View>

                    <View style={styles.buttonContainer}>
                        <Button
                            style={styles.button}
                            size="16"
                            onPress={() => {
                                // props.navigation.navigate("Just");
                                props.addItemToCart(product);
                            }}
                        >
                            Add to Cart
                        </Button>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text>{product.description}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const mapDispachToProps = (dispatch) => {
    return {
        addItemToCart: (product) => {
            dispatch({ type: ADD_TO_CART, payload: { quantity: 1, product } });
        },
    };
};

const mapStateToProps = (state) => {
    const { cartItems } = state;
    return {
        cartItems: cartItems,
    };
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
    },
    imageContainer: {
        flex: 1,
        height: height / 2,
        width: width,
    },
    image: {
        flex: 1,
        width: "100%",
        resizeMode: "contain",
    },
    secondPart: {
        flex: 1,
    },
    buttonContainer: {
        alignItems: "center",

        justifyContent: "center",
    },
    button: { width: "90%" },
    descriptionContainer: {
        padding: 20,
    },
    selectContainer: {
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
    },
    selectLeft: {
        flex: 1,
        width: "80%",
        alignSelf: "center",
        margin: 20,
    },
    selectRight: {
        flex: 1,
        width: "80%",
        alignSelf: "center",
        margin: 20,
    },
});

export default connect(mapStateToProps, mapDispachToProps)(SingleProduct);
