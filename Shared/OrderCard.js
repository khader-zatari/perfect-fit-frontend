import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Picker } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import TrafficLight from "./TrafficLight";


import axios from "axios";
import baseURL from "../assets/baseUrl";

const codes = [
    { name: "pending", code: "3" },
    { name: "shipped", code: "2" },
    { name: "delivered", code: "1" },
];
//order Card it contains all the order information and 
//it change color according to the status of the order
// the admin can change the status of the order. 
const OrderCard = (props) => {
    const [orderStatus, setOrderStatus] = useState();
    const [statusText, setStatusText] = useState();
    const [statusChange, setStatusChange] = useState();
    const [token, setToken] = useState();
    const [cardColor, setCardColor] = useState();

    useEffect(() => {
        if (props.editMode) {
            AsyncStorage.getItem("jwt")
                .then((res) => {
                    setToken(res);
                })
                .catch((error) => console.log(error));
        }
        //color of the card according to the stats
        if (props.status == "3") {
            setOrderStatus(<TrafficLight unavailable></TrafficLight>);
            setStatusText("pending");
            setCardColor("#FF8811");
        } else if (props.status == "2") {
            setOrderStatus(<TrafficLight limited></TrafficLight>);
            setStatusText("shipped");
            setCardColor("#F1C40F");
        } else {
            setOrderStatus(<TrafficLight available></TrafficLight>);
            setStatusText("delivered");
            setCardColor("#9DD9D2");
        }

        return () => {
            setOrderStatus();
            setStatusText();
            setCardColor();
        };
    }, []);
    //update the order status in the database
    const updateOrder = () => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const order = {
            city: props.city,
            country: props.country,
            dateOrdered: props.dateOrdered,
            id: props.id,
            orderItems: props.orderItems,
            phone: props.phone,
            shippingAddress1: props.shippingAddress1,
            shippingAddress2: props.shippingAddress2,
            status: statusChange,
            totalPrice: props.totalPrice,
            user: props.user,
            zip: props.zip,
        };
        
        axios
            .put(`${baseURL}orders/${props._id}`, order, config)
            .then((res) => {
                if (res.status == 200 || res.status == 201) {
                    console.log("Order Edited");
                    setTimeout(() => {
                        props.navigation.navigate("Products");
                    }, 500);
                }
            })
            .catch((error) => {
                console.log("Something went wrong");
            });
    };

    return (
        <View style={[{ backgroundColor: cardColor }, styles.container]}>
            <View style={styles.container}>
                <Text>Order Number: #{props._id}</Text>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text>
                    Status: {statusText} {orderStatus}
                </Text>
                <Text>Address: {props.shippingAddress1}</Text>
                <Text>City: {props.city}</Text>
                <Text>Notes: {props.shippingAddress2}</Text>
                <Text>Date Ordered: {props.dateOrdered.split("T")[0]}</Text>
                <View style={styles.priceContainer}>
                    <Text>Price: </Text>
                    <Text style={styles.price}>$ {props.totalPrice}</Text>
                </View>
                {props.editMode ? (
                    <View>
                        <Picker mode="dropdown" iosIcon={<Icon color={"#007aff"} name="arrow-down" />} style={{ width: undefined }} selectedValue={statusChange} placeholder="Change Status" placeholderIconColor={{ color: "#007aff" }} onValueChange={(e) => setStatusChange(e)}>
                            {codes.map((c) => {
                                return <Picker.Item key={c.code} label={c.name} value={c.code} />;
                            })}
                        </Picker>
                        <Button onPress={() => updateOrder()}>
                            <Text style={{ color: "white" }}>Update</Text>
                        </Button>
                    </View>
                ) : null}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        margin: 10,
        borderRadius: 10,
    },
    title: {
        backgroundColor: "#62B1F6",
        padding: 5,
    },
    priceContainer: {
        marginTop: 10,
        alignSelf: "flex-end",
        flexDirection: "row",
    },
    price: {
        color: "white",
        fontWeight: "bold",
    },
});

export default OrderCard;
