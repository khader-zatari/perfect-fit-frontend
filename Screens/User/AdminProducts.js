import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Button } from "native-base";
import AdminProductList from "./AdminProductList";
const AdminProducts = (props) => {
    const productsJson = require("../../assets//products.json");
    return (
        <View style={styles.container}>
            <View >
                <View style={styles.buttonContainer}>
                    <Button
                        style={styles.button}
                        size="16"
                        onPress={() => {
                            props.navigation.navigate("AdminAddProduct");
                        }}
                    >
                        Add Product
                    </Button>
                </View>
            </View>
            <ScrollView style={styles.container} bounces={true}>
                <AdminProductList products={productsJson} />
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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
