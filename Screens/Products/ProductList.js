import react from "react";
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import ProductCard from "./ProductCard";

const { width } = Dimensions.get("window");
const ProductList = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {}}>
                <ProductCard />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
                <ProductCard />
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        marginLeft: 3,
        width: "100%",
        height: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
    },
});
export default ProductList;
