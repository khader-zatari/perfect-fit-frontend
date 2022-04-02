import react, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import ProductCard from "./ProductCard";

const { width } = Dimensions.get("window");
const ProductList = (props) => {
    const products = props.products;
    useEffect(() => {});
    return (
        <View style={styles.container}>
            {products.map((item) => {
                return (
                    <TouchableOpacity
                    key={item._id}
                        onPress={() => {
                            props.navigation.navigate("SingleProduct", { product: item });
                        }}
                    >
                        <ProductCard {...item} />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 3,
        width: "100%",
        height: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
    },
});
export default ProductList;
