import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import OrderCard from "./OrderCard";
const { height, width } = Dimensions.get("window");
const AdminOrders = (props) => {
    return (
        <ScrollView>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Orders</Text>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate("SingleOrder");
                    }}
                >
                    <OrderCard />
                </TouchableOpacity>
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
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
