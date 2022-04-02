import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "native-base";
const UserProfile = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button style={styles.button} size="16" onPress={() => {props.navigation.navigate("ShippingAddress")}}>
                    Shipping Address
                </Button>
            </View>
            <View style={styles.buttonContainer}>
                <Button style={styles.button} size="16" onPress={() => {props.navigation.navigate("")}}>
                    Profile information
                </Button>
            </View>
            <View style={styles.buttonContainer}>
                <Button style={styles.button} size="16" onPress={() => {}}>
                    Buy
                </Button>
            </View>
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
        margin:10
    },
    button: { width: "90%" },
    descriptionContainer: {
        flex: 1,
        padding: 20,
    },
});

export default UserProfile;
