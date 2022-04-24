import react from "react";
import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const ProductCard = (props) => {
    var price = 10;
    var name = "grey Tshirt ";
    console.log(props.image);
    return (
        <View style={styles.container}>
            <Image source={{ uri: props.image ? props.image : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png" }} style={styles.image} />
            <View style={styles.price}>
                <Text style={styles.priceText}>{props.price} Nis</Text>
            </View>
            <View style={styles.description}>
                <Text style={styles.descriptionText}>{props.name}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: height / 3,
        width: width / 2.25,
        backgroundColor: "#e1dad1",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
        opacity: 0.7,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
    },
    image: {
        flex: 5,
        height: height / 3,
        width: width / 2.5,
        resizeMode: "contain",
    },
    price: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    priceText: {
        fontSize: 17,
        fontWeight: "bold",
    },
    description: {
        flex: 1.5,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    descriptionText: {
        fontSize: 14,
        textAlign: "center",
    },
});
export default ProductCard;
