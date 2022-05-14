import React, { useState } from "react";
import { Image, Text, View, StyleSheet, Dimensions, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const { width, height } = Dimensions.get("window");
const TriedPhoto = (props) => {
    const productId = props.route.params.productId;
    const userId = props.route.params.userId;
    const theImage = "https://pfakhader.s3.eu-west-1.amazonaws.com/uploads/" + String(userId) + "-" + String(productId) + "-" + "VTO.jpg";
    const [imageNotFound, setImageNotFound] = useState(false);
    const fuck = () => {
        setImageNotFound(true);
    };
    return (
        <SafeAreaView edges={["top", "left", "right"]}>
            <ScrollView>
                <Image style={styles.image} resizeMode="contain" source={{ uri: theImage }} onError={() => fuck()} />
                {imageNotFound ? (
                    <View style={{ alignContent: "center", alignSelf: "center", alignItems: "center" }}>
                        <Text>image not found</Text>
                        <Text>try the product first</Text>
                    </View>
                ) : null}
            </ScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        height: height,
        width: width,
    },
    image: {
        width: width,
        height: height / 2,
        resizeMode: "contain",
    },
});
export default TriedPhoto;
