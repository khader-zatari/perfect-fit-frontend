import React, { useEffect, useState } from "react";
import { Button } from "native-base";
import { Text, View, StyleSheet, ScrollView, Dimensions, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import baseURL from "../../assets/baseUrl";

const { height, width } = Dimensions.get("window");
const LogIn = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [user, setUser] = useState(null);

    const check = () => {
        const theEmail = {
            email: email,
            password: password,
        };

        axios
            .post(`${baseURL}users/login`, theEmail)
            .then((res) => {
                if (res.status == 200 || res.status == 201) {
                    setTimeout(() => {
                        setUser(res.data);
                        props.navigation.navigate("Userpage", { user: user });
                    }, 500);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Login</Text>
                    </View>
                    <View>
                        <View style={styles.input}>
                            <Text style={{ paddingVertical: 10, fontSize: 11 }}>Email</Text>
                            <TextInput style={styles.TextInput} placeholder="Email" id="email" name="email" onChangeText={(text) => setEmail(text.toLowerCase())} />
                        </View>
                        <View style={styles.input}>
                            <Text style={{ paddingVertical: 10, fontSize: 11 }}>Password</Text>
                            <TextInput style={styles.TextInput} placeholder="Password" id="password" name="password" onChangeText={(text) => setPassword(text)} />
                        </View>
                    </View>
                    <View style={styles.secondPart}>
                        <View style={styles.buttonContainer}>
                            <Button style={styles.button} size="12" onPress={check}>
                                <Text style={{ color: "#FFF", fontSize: 16, fontWeight: "bold" }}>LOGIN</Text>
                            </Button>

                            <Button
                                style={styles.button}
                                size="12"
                                onPress={() => {
                                    props.navigation.navigate("SignUp");
                                }}
                            >
                                <Text style={{ color: "#FFF", fontSize: 16, fontWeight: "bold" }}>REGISTER</Text>
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
        height: height / 1.5,
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
    button: { width: "100%", marginVertical: "2%" },
    secondPart: {},
});

export default LogIn;
