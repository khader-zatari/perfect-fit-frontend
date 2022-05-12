import react, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Dimensions, StyleSheet, Button, Pressable, Modal, ScrollView } from "react-native";
import ProductCardAdmin from "./ProductCardAdmin";

const { width } = Dimensions.get("window");
const AdminProductList = (props) => {
    const products = props.products;
    useEffect(() => {});
    return (
        <View style={styles.container}>
            {products.map((item) => {
                return (
                    <TouchableOpacity>
                        <ProductCardAdmin {...item} key={item._id} delete={props.delete} />
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
export default AdminProductList;
