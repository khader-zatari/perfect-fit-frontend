import React from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import { Center, Heading } from "native-base";

const { height, width } = Dimensions.get("window");

const Header = () => {
    return (
        <View style={styles.container}>
            <Center>
                <View style={{  height: 70, width: "100%" }}>
                    <Image source={require("../assets/Logo.png")} style={styles.image} />
                </View>
            </Center>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 5,
    },
    image: {
        flex: 1,
        width: "100%",
        height: undefined,
        aspectRatio: 1,
        alignSelf: "center",
        resizeMode: "contain",
    },
});
export default Header;
