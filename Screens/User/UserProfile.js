import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Button } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";
import { CLEAR_USER } from "../../Redux/constants";
const { height } = Dimensions.get("window");

const UserProfile = (props) => {
    const user = props.theUser[0];
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Hello,{user.name} </Text>
                </View>
                <View style={styles.buttonContainer}>
                    {!user.isAdmin ? (
                        <Button
                            style={styles.button}
                            size="16"
                            onPress={() => {
                                props.navigation.navigate("ShippingAddress", { user: user });
                            }}
                        >
                            Shipping Address
                        </Button>
                    ) : (
                        <Button
                            style={styles.button}
                            size="16"
                            onPress={() => {
                                props.navigation.navigate("ShippingAddress", { user: user });
                            }}
                        >
                            Store Location
                        </Button>
                    )}
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
                {!user.isAdmin ? (
                    <>
                        <View style={styles.buttonContainer}>
                            <Button
                                style={styles.button}
                                size="16"
                                onPress={() => {
                                    props.navigation.navigate("Vto", { user: user });
                                }}
                            >
                                VTO
                            </Button>
                        </View>

                        {/* <View style={styles.buttonContainer}>
                            <Button
                                style={styles.button}
                                size="16"
                                onPress={() => {
                                    props.navigation.navigate("Vto1");
                                }}
                            >
                                VTO1
                            </Button>
                        </View> */}
                    </>
                ) : null}
                {user.isAdmin == true ? (
                    <View style={styles.buttonContainer}>
                        <Button
                            style={styles.button}
                            size="16"
                            onPress={() => {
                                props.navigation.navigate("AdminProducts", { user: user });
                            }}
                        >
                            Products
                        </Button>
                    </View>
                ) : null}
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
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => {
                        props.navigation.navigate("LogIn");
                        props.signOut();
                    }}
                >
                    <Text style={{ fontSize: 14 }}>Sign Out</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
};

const mapStateToProps = (state) => {
    const { theUser } = state;
    return {
        theUser: theUser,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => {
            dispatch({ type: CLEAR_USER });
        },
    };
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

// export default UserProfile;
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
