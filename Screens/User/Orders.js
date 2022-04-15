import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from "react-native";

import baseURL from "../../assets/baseUrl";
import { connect } from "react-redux";
import OrderCard from "./OrderCard";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";

const { height, width } = Dimensions.get("window");
const Orders = (props) => {
    const [orders, setOrders] = useState(null);
    useEffect(() => {
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
    }, []);

    return (
        <SafeAreaView edges={["top", "left", "right"]}>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Orders</Text>
                </View>
                <View style={{ width: "100%", height: "100%" }}>
                    {orders != null
                        ? orders.map((order) => {
                              return (
                                  <TouchableOpacity
                                      key={order._id}
                                      onPress={() => {
                                          // props.navigation.navigate("SingleOrder");
                                      }}
                                  >
                                      <OrderCard {...order} />
                                  </TouchableOpacity>
                              );
                          })
                        : null}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
const mapStateToProps = (state) => {
    const { theUser } = state;
    return {
        theUser: theUser,
    };
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
// export default Orders;
export default connect(mapStateToProps, null)(Orders);
