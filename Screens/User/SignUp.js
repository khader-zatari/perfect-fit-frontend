import React, { useState } from "react";
import { Button } from "native-base";
import { Text, View, StyleSheet, ScrollView, Dimensions, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import baseURL from "../../assets/baseUrl";

const { height, width } = Dimensions.get("window");
const SignUp = (props) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const register = () => {
        if (email === "" || name === "" || password === "") {
        }
        let user = {
            name: name,
            email: email,
            password: password,
            isAdmin: false,
        };
        //set a new user in the database that contain the user object then go the login page
        axios
            .post(`${baseURL}users/register`, user)
            .then((res) => {
                if (res.status == 200) {
                    console.log("success");

                    setTimeout(() => {
                        props.navigation.navigate("LogIn");
                    }, 500);
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
                        <Text style={styles.headerText}>Sign Up</Text>
                    </View>
                    <View>
                        <View style={styles.input}>
                            <Text style={{ paddingVertical: 10, fontSize: 11 }}>Name</Text>
                            <TextInput style={styles.TextInput} placeholder="Name" id="name" name="name" onChangeText={(text) => setName(text)} />
                        </View>
                        <View style={styles.input}>
                            <Text style={{ paddingVertical: 10, fontSize: 11 }}>Email</Text>
                            <TextInput style={styles.TextInput} placeholder="Email" id="email" name="email" onChangeText={(text) => setEmail(text.toLowerCase())} />
                        </View>
                        <View style={styles.input}>
                            <Text style={{ paddingVertical: 10, fontSize: 11 }}>Password</Text>
                            <TextInput style={styles.TextInput} placeholder="Password" id="password" name="password" secureTextEntry={true} onChangeText={(text) => setPassword(text)} />
                        </View>
                        <Text style={{ textAlign: "right", marginBottom: 10 }}>Already have an account</Text>
                    </View>
                    <View style={styles.secondPart}>
                        <View style={styles.buttonContainer}>
                            <Button
                                style={styles.button}
                                size="12"
                                onPress={() => {
                                    register();
                                }}
                            >
                                <Text style={{ color: "#FFF", fontSize: 16, fontWeight: "bold" }}>SIGN UP</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
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

export default SignUp;
