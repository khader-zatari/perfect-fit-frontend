import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import baseURL from "../../assets/baseUrl";
import OrderCard from "./OrderCard";
import { useFocusEffect } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");
const AdminOrders = (props) => {
    const [orders, setOrders] = useState(null);

    useFocusEffect(
        useCallback(() => {
            axios
                .get(`${baseURL}orders`)
                .then((x) => {
                    const data = x.data;
                    const userOrders = data.filter((order) => order.user._id === props.theUser[0]._id);
                    setOrders(userOrders);
                })
                .catch((error) => console.log(error));

            return () => {
                setOrders();
            };
        }, [])
    );

    // useEffect(() => {
    //     axios
    //         .get(`${baseURL}orders`)
    //         .then((x) => {
    //             const data = x.data;
    //             const userOrders = data.filter((order) => order.user._id === props.theUser[0]._id);
    //             setOrders(userOrders);
    //         })
    //         .catch((error) => console.log(error));

    //     return () => {
    //         setOrders();
    //     };
    // }, []);
    return (
        <ScrollView>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Orders</Text>
            </View>
            <View style={{ width: "100%", height: "100%" }}>
                {orders != null ? (
                    orders.map((order) => {
                        return <OrderCard order={order} />;
                    })
                ) : (
                    <View>
                        <Text>you have no orderes</Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {},
    headerText: {
        fontSize: 30,
        fontWeight: "bold",
    },
    headerContainer: {
        width: "90%",
        alignSelf: "center",
        height: height / 9,
        justifyContent: "center",
    },
});
export default AdminOrders;
