import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import ProductCartCard from "./ProductCartCard";
import ProductCartList from "./ProductCartList";

const Cart = () => {
    return (
        <ScrollView>
            <View style={styles.Container}>
                <ProductCartList />
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
});

export default Cart;
