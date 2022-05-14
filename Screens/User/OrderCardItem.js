// import React from "react";
// import { Text, View, StyleSheet, Dimensions, Image } from "react-native";

// const { width, height } = Dimensions.get("window");

// const OrderCard = (props) => {

//     return (
//         <View style={styles.container}>
//             <View>
//                 <Text style={styles.text}>order number {props._id}</Text>
//             </View>
//             <View>
//                 <Text>{props.dateOrdered}</Text>
//             </View>
//             <View>
//                 <Text>process:{props.status}</Text>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: "#EBECF0",
//         opacity: 0.9,
//         width: "90%",
//         alignSelf: "center",
//         marginTop: 10,
//         marginBottom: 10,
//         padding: 10,
//     },
//     text: { paddingTop: 10, fontWeight: "bold" },
// });
// export default OrderCard;
import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import baseURL from "../../assets/baseUrl";
import { useFocusEffect } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const OrderCardItem = (props) => {
    const itemId = props.item;

    const [item, setItem] = useState(null);
    // axios in useEffect  set the item to the item state

    useFocusEffect(
        useCallback(() => {
            axios
                .get(`${baseURL}Orders/orderItem/${itemId}`)
                .then((res) => setItem(res.data))
                .catch((error) => console.log(error.response.data));
            return () => {
                setItem();
            };
        }, [])
    );

    // useEffect(() => {
    //      axios
    //         .get(`${baseURL}Orders/orderItem/${itemId}`)
    //         .then((res) => setItem(res.data))
    //         .catch((error) => console.log(error.response.data));
    //     return () => {
    //         setItem();
    //     };
    // }, []);

    return (
        <>
            {item ? (
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: item.product.image ? item.product.image : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png" }} style={styles.image} />
                    </View>
                    <View style={styles.right}>
                        <View style={styles.rightLeft}>
                            <View style={styles.rightLeftUpTextContainer}>
                                <Text>Brand: {item.product.brand}</Text>
                                <Text>{item.product.name}</Text>
                            </View>
                            <View style={styles.rightLeftDownTextContainer}>
                                <Text>Color: {item.color}</Text>
                                <Text>Quantity: {item.quantity}</Text>
                            </View>
                        </View>
                        <View style={styles.rightRight}>
                            <Text>{item.product.price} NIS</Text>
                            <Text>size: {item.size}</Text>
                        </View>
                        {/* size->item.size, color->item.color, image, quantity->item.quantity*/}
                    </View>
                </View>
            ) : null}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#FFF000",
        // opacity: 0.7,
        width: "80%",
        height: height / 10,
        alignSelf: "center",
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10,
    },
    imageContainer: {
        flex: 2,
    },
    image: {
        flex: 1,
        height: height / 3,
        width: width / 2.5,
        alignSelf: "center",
        resizeMode: "contain",
    },
    right: {
        flex: 4,
        flexDirection: "row",
    },
    rightLeft: { flex: 4 },
    rightLeftUpTextContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
    rightLeftDownTextContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
    rightRight: { flex: 3, justifyContent: "center", alignItems: "center" },
});
export default OrderCardItem;
