import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { Button } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
const { height } = Dimensions.get("window");
const UserProfile = (props) => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>props.name</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        style={styles.button}
                        size="16"
                        onPress={() => {
                            props.navigation.navigate("ShippingAddress");
                        }}
                    >
                        Shipping Address
                    </Button>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        style={styles.button}
                        size="16"
                        onPress={() => {
                            props.navigation.navigate("AccountInformation", { user: user });
                        }}
                    >
                        Profile information
                    </Button>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        style={styles.button}
                        size="16"
                        onPress={() => {
                            props.navigation.navigate("Vto");
                        }}
                    >
                        VTO
                    </Button>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        style={styles.button}
                        size="16"
                        onPress={() => {
                            props.navigation.navigate("Vto1");
                        }}
                    >
                        VTO1
                    </Button>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        style={styles.button}
                        size="16"
                        onPress={() => {
                            props.navigation.navigate("Admin");
                        }}
                    >
                        Admin
                    </Button>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        style={styles.button}
                        size="16"
                        onPress={() => {
                            props.navigation.navigate("Orders");
                        }}
                    >
                        Orders
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
    headerText: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
    },
    headerContainer: {
        height: height / 9,
        justifyContent: "center",
    },
});

export default UserProfile;
