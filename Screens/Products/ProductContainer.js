import react from "react";
import { Text, View, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import Banner from "../../Shared/Banner.js";
import ProductCard from "./ProductCard.js";
import ProductList from "./ProductList.js";
import SearchedProducts from "./SearchedProducts.js";
import SearchBar from "../../Shared/SearchBar";
import SingleProduct from "./SingleProduct.js";
import Header from "../../Shared/Header.js";
import StoreList from "./StoreList";

const { height } = Dimensions.get("window");

const ProductContainer = () => {
    return (
        <ScrollView style={styles.container} bounces={true}>
            <View>
                <Header />
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        marginTop: height / 20,
    },
});

export default ProductContainer;

{
    /* <View style={{ flex: 1 }}>
                    <SearchedProducts />
                </View> */
}

{
    /* /*/
    //////////////*/ */
    // <SearchBar />
    // </View>
    // <View>
    //     <Banner />
    // </View>
    // <View style={{ flexDirection: "row" }}>
    //     <ProductList />
    // </View>
    // <View>
    //     <SingleProduct />
    // </View>
}
