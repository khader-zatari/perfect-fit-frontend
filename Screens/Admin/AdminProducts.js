import React, { useEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Button } from "native-base";
import AdminProductList from "../Admin/AdminProductList";
import { SafeAreaView } from "react-native-safe-area-context";
const AdminProducts = (props) => {
    const user = props.route.params.user;
    const productsJson = require("../../assets//products.json");

    
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
                    <View>
                        <AdminProductList products={productsJson} />
                    </View>
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
