import react from "react";
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const ProductCard = (props) => {
    console.log(props);
    var price = 10;
    var name = "grey Tshirt ";
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/google-logo-9808.png")} style={styles.image} />

            <View style={styles.description}>
                <Text style={styles.descriptionText}>{props.name}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: height / 8,
        width: width / 3.3,
        backgroundColor: "#e1dad1",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
        opacity: 0.7,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    },
    image: {
        flex: 3,
        resizeMode: "contain",
        margin: 3,
        width: "100%",
    },
    description: {
        flex: 1.5,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    descriptionText: {
        fontSize: 11,
        textAlign: "center",
    },
});
export default ProductCard;
