import React, { useState } from "react";
import { Button } from "native-base";
import { Text, View, StyleSheet, ScrollView, Dimensions, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import baseURL from "../../assets/baseUrl";

const { height, width } = Dimensions.get("window");
const ForgetPassword = (props) => {
    const [email, setEmail] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [password, setPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");

    const changePassword = () => {
        if (password == secondPassword) {
            let user = {
                email: email,
                oldPassword: oldPassword,
                passwrod: password,
            };

            axios
                .put(`${baseURL}users/changePassword`, user)
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
        } else {
            return;
        }
    };
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Change Password</Text>
                    </View>
                    <View>
                        <View style={styles.input}>
                            <Text style={{ paddingVertical: 10, fontSize: 11 }}>Email</Text>
                            <TextInput style={styles.TextInput} placeholder="Email" id="Email" name="Email" onChangeText={(text) => setEmail(text.toLowerCase())} />
                        </View>
                        <View style={styles.input}>
                            <Text style={{ paddingVertical: 10, fontSize: 11 }}>Old Password</Text>
                            <TextInput style={styles.TextInput} placeholder="Old Password" id="oldPassword" name="oldPassword" secureTextEntry={true} onChangeText={(text) => setOldPassword(text)} />
                        </View>
                        <View style={styles.input}>
                            <Text style={{ paddingVertical: 10, fontSize: 11 }}>New Password</Text>
                            <TextInput style={styles.TextInput} placeholder="New Password" id="password" name="password" secureTextEntry={true} onChangeText={(text) => setPassword(text)} />
                        </View>
                        <View style={styles.input}>
                            <Text style={{ paddingVertical: 10, fontSize: 11 }}>New Password</Text>
                            <TextInput style={styles.TextInput} placeholder="New Password" id="Newpassword" name="Newpassword" secureTextEntry={true} onChangeText={(text) => setSecondPassword(text)} />
                        </View>
                    </View>
                    <View style={styles.secondPart}>
                        <View style={styles.buttonContainer}>
                            <Button
                                style={styles.button}
                                size="12"
                                onPress={() => {
                                    changePassword();
                                }}
                            >
                                <Text style={{ color: "#FFF", fontSize: 16, fontWeight: "bold" }}>Change Password</Text>
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

export default ForgetPassword;
