import react, { useState, useEffect , useCallback } from "react";
import { Text, View, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import Banner from "../../Shared/Banner.js";
import ProductCard from "./ProductCard.js";
import ProductList from "./ProductList.js";
import SearchBar from "../../Shared/SearchBar";
import Header from "../../Shared/Header.js";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import baseURL from "../../assets/baseUrl";
import { connect } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";

const { height } = Dimensions.get("window");

const ProductContainer = (props) => {
    const store = props.route.params.store;
    const personType = props.route.params.personType;

    //this in the database rest api
    const [products, setProducts] = useState([]);
    const [bannerImages, setBannerImages] = useState([]);
    const bannerData = ["https://i.pinimg.com/originals/79/7d/fc/797dfc84d7a2149d4b77769c213030f4.jpg", "https://creativemachine.co/wp-content/uploads/2020/03/ecommerce_men_s_clothing_banner_template_8_1200x628.jpg", "https://i.pinimg.com/originals/af/16/1a/af161a824e6c3ed7e1ec18f2d94b650c.jpg"];

    useFocusEffect(
        useCallback(() => {
            axios
                .get(`${baseURL}products/store/${personType}/${store._id}`)
                .then((res) => setProducts(res.data))
                .catch((error) => console.log(error.response.data));
            return () => {
                setProducts([]);
            };
        }, [])
    );

    // useEffect(() => {
    //     axios
    //         .get(`${baseURL}products/store/${personType}/${store._id}`)
    //         .then((res) => setProducts(res.data))
    //         .catch((error) => console.log(error.response.data));
    //     setBannerImages(store.bannerImages ? store.bannerImages : ["https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png"]);

    //     return () => {
    //         setProducts();
    //     };
    // }, []);

    return (
        <SafeAreaView>
            <ScrollView bounces={true}>
                <View style={styles.container}>
                    <Header logo={store.image} />
                    <SearchBar />
                    <View>
                        <Banner bannerImages={bannerImages} height={2} />
                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <ProductList navigation={props.navigation} products={products} personType={personType} store={store} />
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
