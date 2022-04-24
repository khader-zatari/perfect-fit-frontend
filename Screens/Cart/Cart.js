import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView, Dimensions } from "react-native";
import ProductCartCard from "./ProductCartCard";
import ProductCartList from "./ProductCartList";
import { Button } from "native-base";
import { connect } from "react-redux";
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../../Redux/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import baseURL from "../../assets/baseUrl";
const { height } = Dimensions.get("window");

const Cart = (props) => {
    const [orderItems, setOrderItems] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [zip, setZip] = useState();
    const [phone, setPhone] = useState();
    const [user, setUser] = useState();
    const [shop, setShop] = useState();

    useEffect(() => {
        setOrderItems(props.cartItems);

        return () => {
            setOrderItems();
        };
    }, []);

    var total = 0;

    props.cartItems.forEach((cart) => {
        return (total += cart.product.price);
    });
    const constructOrder = () => {
        let order = {
            orderItems,
            shippingAddress: props.theUser[0].address,
            zip: props.theUser[0].zip,
            city: props.theUser[0].city,
            phone: props.theUser[0].phone,
            status: "3",
            dateOrdered: Date.now(),
            user: props.theUser[0]._id,
            shop: orderItems[0].product.Admin,
        };
        console.log(order);
        axios
            .post(`${baseURL}orders`, order)
            .then((res) => {
                if (res.status == 200 || res.status == 201) {
                    console.log("success");
                    setTimeout(() => {
                        props.clearCart();
                        props.navigation.navigate("Cart");
                    }, 500);
                }
            })
            .catch((error) => {
                console.log("Something went wrong");
            });
    };

    return (
        <SafeAreaView edges={["top", "left", "right"]}>
            <ScrollView>
                {props.cartItems.length ? (
                    <View>
                        <View style={styles.Container}>
                            {props.cartItems.map((item) => {
                                //return <ProductCartList item={item} />;
                                return <ProductCartCard item={item} key={Math.random()} />;
                            })}
                        </View>
                        <View style={styles.priceAndButton}>
                            <View style={styles.price}>
                                <Text>{total}$</Text>
                            </View>

                            <View style={styles.buttonContainer}>
                                {props.theUser.length ? (
                                    <Button style={styles.button} size="16" onPress={constructOrder}>
                                        Buy with one click
                                    </Button>
                                ) : (
                                    <Button
                                        style={styles.button}
                                        size="16"
                                        onPress={() => {
                                            props.navigation.navigate("UserProfile");
                                        }}
                                    >
                                        LogIn
                                    </Button>
                                )}
                            </View>
                        </View>
                    </View>
                ) : (
                    <View style={styles.emptyCart}>
                        <Text>Looks like your cart is empty</Text>
                        <Text>Add products to your cart to get started</Text>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

const mapStateToProps = (state) => {
    const { cartItems, theUser } = state;
    return {
        cartItems: cartItems,
        theUser: theUser,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => {
            dispatch({ type: CLEAR_CART });
        },
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    buttonContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    button: { width: "90%" },
    descriptionContainer: {
        padding: 20,
    },
    priceAndButton: {
        flex: 1,
        marginTop: height / 10,
        justifyContent: "space-around",
        height: height / 7,
    },
    price: {
        alignSelf: "center",
    },
    emptyCart: {
        flex: 1,
        width: "100%",
        height: height,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
