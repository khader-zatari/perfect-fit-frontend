import React from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import { Center, Heading } from "native-base";

const { height, width } = Dimensions.get("window");

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Center>
                <View style={{  height: 70, width: "100%" }}>
                    <Image source={{ uri: props.logo ? props.logo : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png" }} style={styles.image} />
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
