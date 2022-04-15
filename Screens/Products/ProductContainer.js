import react, { useState, useEffect } from "react";
import { Text, View, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import Banner from "../../Shared/Banner.js";
import ProductCard from "./ProductCard.js";
import ProductList from "./ProductList.js";
import SearchedProducts from "./SearchedProducts.js";
import SearchBar from "../../Shared/SearchBar";
import Header from "../../Shared/Header.js";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import baseURL from "../../assets/baseUrl";
import { connect } from "react-redux";

const { height } = Dimensions.get("window");

const ProductContainer = (props) => {

    // const productsJson = require("../../assets/products.json");
    const store = props.route.params.store;

    const personType = props.route.params.personType;

    // const [storeProducts, setStoreProducts] = useState(
    //     productsJson.filter((item) => {
    //         return item.storeName == store.name;
    //     })
    // );
    // const [products, setProducts] = useState(
    //     storeProducts.filter((item) => {
    //         return item.personType == personType;
    //     })
    // );

    //this in the database rest api
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log(props.theUser);
        axios
            .get(`${baseURL}products/store/${personType}/${store._id}`)
            .then((res) => setProducts(res.data))
            .catch((error) => console.log(error.response.data));

        return () => {
            setProducts();
        };
    }, []);

    return (
        <SafeAreaView>
            <ScrollView bounces={true}>
                <View style={styles.container}>
                    <Header logo={store.image}/>
                    <SearchBar />
                    <View>
                        <Banner />
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <ProductList navigation={props.navigation} products={products} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
const mapStateToProps = (state) => {
    const { theUser } = state;
    return {
        theUser: theUser,
    };
};
const styles = StyleSheet.create({
    container: {
        marginTop: height / 20,
    },
});

// export default ProductContainer;
export default connect(mapStateToProps, null)(ProductContainer);
