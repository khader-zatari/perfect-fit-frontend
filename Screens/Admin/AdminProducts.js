import React, { useEffect, useState, useCallback } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Button } from "native-base";
import AdminProductList from "../Admin/AdminProductList";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import baseURL from "../../assets/baseUrl";

const AdminProducts = (props) => {
    const user = props.route.params.user;
    const productsJson = require("../../assets//products.json");

    const [products, setProducts] = useState(null);

    useFocusEffect(
        useCallback(() => {
            axios.get(`${baseURL}products/store/${user._id}`).then((res) => {
                setProducts(res.data);
                console.log(res.data);
            });
            return () => {
                setProducts();
            };
        }, [])
    );
    const deleteProduct = (id) => {
        axios
            .delete(`${baseURL}products/${id}`)
            .then((res) => {
                const products = products.filter((item) => item._id !== id);
                setProducts(products);
            })
            .catch((error) => console.log(error));
    };

    return (
        <SafeAreaView>
            <ScrollView bounces={true}>
                <View>
                    <View style={styles.buttonContainer}>
                        <Button
                            style={styles.button}
                            size="16"
                            onPress={() => {
                                props.navigation.navigate("AdminAddProduct", { user: user });
                            }}
                        >
                            Add Product
                        </Button>
                    </View>
                    <View>{products != null ? <AdminProductList products={products} delete={deleteProduct} /> : null}</View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {},
    buttonContainer: {
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
    },
    button: { width: "90%" },
    descriptionContainer: {
        flex: 1,
        padding: 20,
    },
});

export default AdminProducts;
