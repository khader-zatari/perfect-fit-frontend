import React from "react";
import { Text, View, StyleSheet, ScrollView, Dimensions } from "react-native";
import ProductCartCard from "./ProductCartCard";
import ProductCartList from "./ProductCartList";
import { Button } from "native-base";
const { height } = Dimensions.get("window");

const Cart = () => {
    return (
        <ScrollView>
            <View style={styles.Container}>
                <ProductCartList />
            </View>
            <View style={styles.priceAndButton}>
                <View style={styles.price}>
                    <Text>Total 200$</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} size="16" onPress={() => {}}>
                        Buy
                    </Button>
                </View>
            </View>
        </ScrollView>
    );
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

export default Cart;
