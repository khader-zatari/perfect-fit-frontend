import react from "react";
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import ProductCard from "./ProductCard";

const { width } = Dimensions.get("window");
const ProductList = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {props.navigation.navigate("SingleProduct")}}>
                <ProductCard />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {props.navigation.navigate('SingleProduct')}}>
                <ProductCard />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {props.navigation.navigate('SingleProduct')}}>
                <ProductCard />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {props.navigation.navigate('SingleProduct')}}>
                <ProductCard />
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 3,
        width: "100%",
        height: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
    },
});
export default ProductList;
