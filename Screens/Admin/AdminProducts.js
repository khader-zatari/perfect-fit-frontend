import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Button } from "native-base";
import AdminProductList from "../Admin/AdminProductList";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import baseURL from "../../assets/baseUrl";

const AdminProducts = (props) => {
    const user = props.route.params.user;
    const productsJson = require("../../assets//products.json");

    const [products, setProducts] = useState(null);

    useEffect(() => {
        axios.get(`${baseURL}products/store/${user._id}`).then((res) => {
            setProducts(res.data);
            console.log(res.data);
        });
        return () => {
            setProducts();
        };
    }, []);
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
                    <View>{products != null ? <AdminProductList products={products} /> : null}</View>
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
