import axios from "axios";
import { Button } from "native-base";
import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import baseURL from "../../assets/baseUrl";

const { height, width } = Dimensions.get("window");
const AccountInformation = (props) => {
    const user = props.route.params.user;
    const [text, setText] = useState("");
    const submitMessage = () => {
        axios
            .put(`${baseURL}users/${user._id}`, { storeMessage: text })
            .then((res) => {
                if (res.status == 200) {
                    console.log("success");
                    setTimeout(() => {
                        props.navigation.navigate("Userpage");
                    }, 500);
                }
            })
            .catch((error) => {
                console.log("error");
            });
        console.log("sucsess");
        return;
    };
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>Profile Information</Text>
                    </View>
                    <Text style={{ flex: 1 }}>name: {user.name}</Text>
                    <Text style={{ flex: 1 }}>email: {user.email}</Text>
                    <Text style={{ flex: 1 }}>phone: {user.phone}</Text>
                    <Text style={{ flex: 1 }}>addres: {user.address}</Text>
                    <Text style={{ flex: 1 }}>city: {user.city}</Text>
                    <Text style={{ flex: 1 }}>zip: {user.zip}</Text>
                </View>
                {user.isAdmin ? (
                    <>
                        <View>
                            <Text style={{ marginLeft: "5%", fontSize: 16 }}>Update information for the Store</Text>
                            <TextInput
                                multiline={true}
                                numberOfLines={4}
                                style={{ minHeight: 150, height: "auto", borderWidth: 1, width: "90%", alignSelf: "center" }}
                                onChangeText={(text) => {
                                    setText(text);
                                }}
                                editable
                                value={text}
                                placeholder="information for the Users"
                            />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button style={styles.button} size="12" onPress={submitMessage}>
                                <Text style={{ color: "#FFF", fontSize: 16, fontWeight: "bold" }}>Submit The Message</Text>
                            </Button>
                        </View>
                    </>
                ) : null}
            </ScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: "4%",
        marginLeft: "4%",
        justifyContent: "center",
        marginBottom: "15%",
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
    },
    headerContainer: {
        height: height / 9,
        justifyContent: "center",
    },
});
export default AccountInformation;
