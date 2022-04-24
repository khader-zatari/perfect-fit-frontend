import React, { useState } from "react";
import { Button } from "native-base";
import { Text, View, StyleSheet, ScrollView, Dimensions, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import baseURL from "../../assets/baseUrl";
import { connect } from "react-redux";
import { UPDATEUSER } from "../../Redux/constants";
const { height, width } = Dimensions.get("window");

const ShippingAddress = (props) => {
    const user = props.route.params.user;
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const saveAddress = () => {
        let newAddress = {
            name: name,
            phone: phoneNumber,
            address: address,
            zip: zipCode,
            city: city,
        };
        //set a new user in the database that contain the user object then go the login page
        axios
            .put(`${baseURL}users/shippingAddress/${user._id}`, newAddress)
            .then((res) => {
                if (res.status == 200) {
                    console.log("success");
                    axios
                        .get(`${baseURL}users/${user._id}`)
                        .then((res) => {
                            setTimeout(() => {
                                props.updateTheUser(res.data);
                                props.navigation.navigate("Userpage");
                            }, 500);
                        })
                        .catch((error) => console.log(error.response.data));
                }
            })
            .catch((error) => {
                console.log("error");
            });
    };
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Shipping Address</Text>
                    </View>
                    <View>
                        <View style={styles.input}>
                            <Text style={{ paddingVertical: 10, fontSize: 11 }}>Full name</Text>
                            <TextInput style={styles.TextInput} placeholder="Full name" id="fullName" name="fullName" onChangeText={(text) => setName(text.toLowerCase())} />
                        </View>
                        <View style={styles.input}>
                            <Text style={{ paddingVertical: 10, fontSize: 11 }}>Address</Text>
                            <TextInput style={styles.TextInput} placeholder="Address" id="address" name="address" onChangeText={(text) => setAddress(text.toLowerCase())} />
                        </View>
                        <View style={styles.input}>
                            <Text style={{ paddingVertical: 10, fontSize: 11 }}>City</Text>
                            <TextInput style={styles.TextInput} placeholder="City" id="city" name="city" onChangeText={(text) => setCity(text.toLowerCase())} />
                        </View>
                        <View style={styles.input}>
                            <Text style={{ paddingVertical: 10, fontSize: 11 }}>Zip Code</Text>
                            <TextInput style={styles.TextInput} placeholder="Zip Code" id="zipCode" name="zipCode" keyboardType={"numeric"} onChangeText={(text) => setZipCode(text)} />
                        </View>
                        <View style={styles.input}>
                            <Text style={{ paddingVertical: 10, fontSize: 11 }}>Phone Number</Text>
                            <TextInput style={styles.TextInput} placeholder="Phone Number" id="phoneNumber" name="phoneNumber" keyboardType={"numeric"} onChangeText={(text) => setPhoneNumber(text)} />
                        </View>
                    </View>
                    <View style={styles.secondPart}>
                        <View style={styles.buttonContainer}>
                            <Button style={styles.button} size="12" onPress={saveAddress}>
                                <Text style={{ color: "#FFF", fontSize: 16, fontWeight: "bold" }}>SAVE ADDRESS</Text>
                            </Button>
                        </View>
                        <View>
                            <Text>name : {props.theUser[0].name}</Text>
                            <Text>address : {props.theUser[0].address}</Text>
                            <Text>city : {props.theUser[0].city}</Text>
                            <Text>zip : {props.theUser[0].zip}</Text>
                            <Text>phone : {props.theUser[0].phone}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
const mapDispatchToProps = (dispatch) => {
    return {
        updateTheUser: (user) => {
            dispatch({ type: UPDATEUSER, payload: user });
        },
    };
};
const mapStateToProps = (state) => {
    const { theUser } = state;
    return {
        theUser: theUser,
    };
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "90%",

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

export default connect(mapStateToProps, mapDispatchToProps)(ShippingAddress);
