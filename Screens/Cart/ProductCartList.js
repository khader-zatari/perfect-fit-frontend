import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProductCartCard from "./ProductCartCard";

const ProductCartList = () => {
    return (
        <View>
            <ProductCartCard />
            <ProductCartCard />
            <ProductCartCard />
            <ProductCartCard />
            <ProductCartCard />
            <ProductCartCard />
            <ProductCartCard />
            <ProductCartCard />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default ProductCartList;
