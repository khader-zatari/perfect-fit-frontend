import { Button, Center } from "native-base";
import React from "react";
import { Text, View, ScrollView, StyleSheet, Image, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const SingleProduct = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} resizeMode="contain" source={require("../../assets/1638427112t-shirt-png.png")} />
                </View>
                <View style={styles.secondPart}>
                    <Text>black T-shirt</Text>
                    <View style={styles.buttonContainer}>
                        <Button style={styles.button} size="16">
                            Add to Cart
                        </Button>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text>flasjdflkasjd;flkjas;ldkfjas;ldkfj;lsakdjf;laskdjf;laskdjf;salkdjf;salkdjfaslkdjflkasdjf;lkasjdf;lkjsad;lkfj;</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageContainer: {
        flex: 1,
        height: height / 2,
        width: width,
    },
    image: {
        flex: 1,
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    secondPart: {
        width: width,
        height: height,
    },
    buttonContainer: {
        alignItems: "center",

        justifyContent: "center",
    },
    button: { width: "90%" },
    descriptionContainer: {
        padding: 20,
    },
});
export default SingleProduct;
