import React from "react";
import { Button } from "native-base";
import { Text, View, StyleSheet, ScrollView, Dimensions, TextInput } from "react-native";

const { height, width } = Dimensions.get("window");
const ShippingAddress = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Shipping Address</Text>
                </View>
                <View>
                    <View style={styles.input}>
                        <Text style={{ paddingVertical: 10, fontSize: 11 }}>Full name</Text>
                        <TextInput style={styles.TextInput} placeholder="Full name" id="fullName" name="fullName" />
                    </View>
                    <View style={styles.input}>
                        <Text style={{ paddingVertical: 10, fontSize: 11 }}>Address</Text>
                        <TextInput style={styles.TextInput} placeholder="Address" id="address" name="address" />
                    </View>
                    <View style={styles.input}>
                        <Text style={{ paddingVertical: 10, fontSize: 11 }}>City</Text>
                        <TextInput style={styles.TextInput} placeholder="City" id="city" name="city" />
                    </View>
                    <View style={styles.input}>
                        <Text style={{ paddingVertical: 10, fontSize: 11 }}>Zip Code</Text>
                        <TextInput style={styles.TextInput} placeholder="Zip Code" id="zipCode" name="zipCode" />
                    </View>
                    <View style={styles.input}>
                        <Text style={{ paddingVertical: 10, fontSize: 11 }}>Phone Number</Text>
                        <TextInput style={styles.TextInput} placeholder="Phone Number" id="phoneNumber" name="phoneNumber" />
                    </View>
                </View>
                <View style={styles.secondPart}>
                    <View style={styles.buttonContainer}>
                        <Button style={styles.button} size="12" onPress={() => {}}>
                            <Text style={{ color: "#FFF", fontSize: 16, fontWeight: "bold" }}>SAVE ADDRESS</Text>
                        </Button>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "90%",
        height: height / 2,
        alignSelf: "center",
    },
    headerText: {
        fontSize: 30,
        fontWeight: "bold",
    },
    headerContainer: {
        height: height / 9,
        justifyContent: "center",
    },
    input: {
        paddingLeft: 20,
        backgroundColor: "#EBECF0",
        width: "100%",
        height: height / 12,
        padding: "1%",
        marginBottom: 20,
    },
    TextInput: {
        fontSize: 16,
    },
    buttonContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: "10%",
    },
    button: { width: "100%" },
    secondPart: {},
});

export default ShippingAddress;
