import React from "react";
import { Text, View, StyleSheet, ScrollView, Dimensions } from "react-native";
import ProductCartCard from "./ProductCartCard";
import ProductCartList from "./ProductCartList";
import { Button } from "native-base";
import { connect } from "react-redux";
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../../Redux/constants";
import { SafeAreaView } from "react-native-safe-area-context";
const { height } = Dimensions.get("window");

const Cart = (props) => {
    return (
        <SafeAreaView edges={["top", "left", "right"]}>
            <ScrollView>
                <View style={styles.Container}>
                    {props.cartItems.map((item) => {
                        //return <ProductCartList item={item} />;
                        return <ProductCartCard item={item} />;
                    })}
                </View>
                <View style={styles.priceAndButton}>
                    <View style={styles.price}>
                        <Text>Total 200$</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            style={styles.button}
                            size="16"
                            onPress={() => {
                                props.clearCart();
                            }}
                        >
                            Buy with one click
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const mapStateToProps = (state) => {
    const { cartItems } = state;
    return {
        cartItems: cartItems,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
