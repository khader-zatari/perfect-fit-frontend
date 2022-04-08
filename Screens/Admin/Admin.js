import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

const Admin = (props) => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.buttonContainer}>
                    <Button
                        style={styles.button}
                        size="16"
                        onPress={() => {
                            props.navigation.navigate("AdminOrders");
                        }}
                    >
                        Orders
                    </Button>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        style={styles.button}
                        size="16"
                        onPress={() => {
                            props.navigation.navigate("AdminProducts");
                        }}
                    >
                        Products
                    </Button>
                </View>
            </SafeAreaView>
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

export default Admin;
