import React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";

const { width, height } = Dimensions.get("window");

const ProductCartCard = (props) => {
    console.log(props.item.product);
    return (
        
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require("../../assets/1638427112t-shirt-png.png")} style={styles.image} />
            </View>
            <View style={styles.right}>
                <View style={styles.rightLeft}>
                    <View style={styles.rightLeftUpTextContainer}>
                        <Text>{props.item.product.brand}</Text>
                    </View>
                    <View style={styles.rightLeftDownTextContainer}>
                        <Text>{props.item.product.name}</Text>
                    </View>
                </View>
                <View style={styles.rightRight}>
                    <Text>${props.item.product.price}</Text>
                </View>
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
export default ProductCartCard;
