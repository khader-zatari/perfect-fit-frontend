import react from "react";
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import StoreCard from "./StoreCard";

const { width } = Dimensions.get("window");
const ProductList = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {}}>
                <StoreCard />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
                <StoreCard />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
                <StoreCard />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
                <StoreCard />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
                <StoreCard />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
                <StoreCard />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
                <StoreCard />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
                <StoreCard />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
                <StoreCard />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
                <StoreCard />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
                <StoreCard />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
                <StoreCard />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
                <StoreCard />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
                <StoreCard />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
                <StoreCard />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
                <StoreCard />
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 3,
        width: width,
        height: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
    },
});
export default ProductList;
