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
import React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import OrderCardItem from "./OrderCardItem";

const { width, height } = Dimensions.get("window");

const OrderCard = (props) => {
    const orderItems = props.order.orderItems;
    const theOrder = props.order;
    //shipping address
    //order container
    return (
        <View
            style={{
                backgroundColor: "#40e0d0",
                marginVertical: "10%",
            }}
        >
            <View>
                {orderItems.map((item) => {
                    return <OrderCardItem item={item} key={item} />;
                })}
            </View>
            <View>
                <Text>paied: {theOrder.totalPrice}</Text>
            </View>
            <View>
                <Text>
                    shipping address: {theOrder.city}, {theOrder.shippingAddress}, {theOrder.zip}
                </Text>
            </View>
            <View>
                <Text>shop bought from: {theOrder.shop.name}</Text>
            </View>
            <View>
                <Text>status: {theOrder.status}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF000",
        opacity: 0.7,
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
export default OrderCard;
