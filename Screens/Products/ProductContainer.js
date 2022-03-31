import react, { useState, useEffect } from "react";
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

const ProductContainer = (props) => {
    const productsJson = require("../../assets/products.json");
    const store = props.route.params.store;
    const personType = props.route.params.personType;

    const [storeProducts, setStoreProducts] = useState(
        productsJson.filter((item) => {
            return item.storeName == store.name;
        })
    );
    const [products, setProducts] = useState(
        storeProducts.filter((item) => {
            return item.personType == personType;
        })
    );

    //this in the database rest api

    return (
        <ScrollView style={styles.container} bounces={true}>
            <Header />
            <SearchBar />
            <View>
                <Banner />
            </View>

            <View style={{ flexDirection: "row" }}>
                <ProductList navigation={props.navigation} products={products} />
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
