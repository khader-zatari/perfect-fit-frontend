import { Center } from "native-base";
import React from "react";
import { Text, View, ScrollView, StyleSheet, Image, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const SingleProduct = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.imageContainer} resizeMode="contain" source={require("../../assets/1638427112t-shirt-png.png")} />
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height / 2,
        width: width,
    },
    imageContainer: {
        flex: 1,
        width: "100%",
        resizeMode: "contain",
    },
});
export default SingleProduct;
