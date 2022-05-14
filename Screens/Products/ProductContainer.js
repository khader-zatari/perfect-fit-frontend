import react, { useState, useEffect, useCallback } from "react";
import { Text, View, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import { VStack, Input, Button, IconButton, Icon, NativeBaseProvider, Center, Box, Divider, Heading, HStack } from "native-base";
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
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import SearchedProduct from "./SearchedProducts.js";
import CategoryFilter from "./CategoryFilter.js";

const { height } = Dimensions.get("window");

const ProductContainer = (props) => {
    const store = props.route.params.store;

    const personType = props.route.params.personType;

    //this in the database rest api
    const [products, setProducts] = useState([]);
    const [bannerImages, setBannerImages] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [focus, setFocus] = useState();
    const bannerData = ["https://i.pinimg.com/originals/79/7d/fc/797dfc84d7a2149d4b77769c213030f4.jpg", "https://creativemachine.co/wp-content/uploads/2020/03/ecommerce_men_s_clothing_banner_template_8_1200x628.jpg", "https://i.pinimg.com/originals/af/16/1a/af161a824e6c3ed7e1ec18f2d94b650c.jpg"];
    const [productsCtg, setProductsCtg] = useState([]);
    const [categories, setCategories] = useState(["t-shirts", "pants", "Dress"]);
    const [active, setActive] = useState();
    useFocusEffect(
        useCallback(() => {
            setFocus(false);
            setActive(-1);
            axios
                .get(`${baseURL}products/store/${personType}/${store._id}`)
                .then((res) => {
                    setProducts(res.data);
                    setProductsFiltered(res.data);
                    setProductsCtg(res.data);
                })
                .catch((error) => console.log(error.response.data));
            return () => {
                setProducts([]);
                setProductsFiltered([]);
                setProductsCtg([]);
                setFocus();
                setActive();
            };
        }, [])
    );
    const searchProduct = (text) => {
        setProductsFiltered(products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase())));
    };

    const openList = () => {
        setFocus(true);
    };

    const onBlur = () => {
        setFocus(false);
    };
    const changeCtg = (ctg) => {
        {
            ctg === "all"
                ? [setProductsCtg(products), setActive(true)]
                : [
                      setProductsCtg(
                          products.filter((i) => i.category === ctg),
                          setActive(true)
                      ),
                  ];
        }
    };

    return (
        <SafeAreaView>
            <ScrollView bounces={true}>
                <View style={styles.container}>
                    <Header logo={store.image} />
                    <Center flex={1} px="2">
                        <VStack
                            my="4"
                            space={5}
                            w="100%"
                            maxW="300px"
                            divider={
                                <Box px="2">
                                    <Divider />
                                </Box>
                            }
                        >
                            <Input
                                onFocus={openList}
                                onChangeText={(text) => searchProduct(text)}
                                placeholder="Search Products"
                                width="100%"
                                borderRadius="4"
                                py="3"
                                px="1"
                                fontSize="14"
                                InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />}
                                InputRightElement={focus == true ? <Icon onPress={onBlur} size="5" as={<MaterialIcons name="close" />} /> : null}
                            />
                        </VStack>
                    </Center>
                    {focus == true ? (
                        <SearchedProduct navigation={props.navigation} productsFiltered={productsFiltered} personType={personType} store={store} />
                    ) : (
                        <>
                            <View>
                                <Banner bannerImages={store.BannerImages ? store.BannerImages : [""]} height={2} />
                            </View>
                            <View>
                                <CategoryFilter categories={categories} categoryFilter={changeCtg} productsCtg={productsCtg} active={active} setActive={setActive} />
                            </View>
                            {productsCtg.length > 0 ? (
                                <View style={{ flexDirection: "row" }}>
                                    <ProductList navigation={props.navigation} products={products} personType={personType} store={store} />
                                </View>
                            ) : (
                                <View style={[styles.center, { height: height / 2 }]}>
                                    <Text>No products found</Text>
                                </View>
                            )}
                        </>
                    )}
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
    center: {
        justifyContent: "center",
        alignItems: "center",
    },
});

// export default ProductContainer;
export default connect(mapStateToProps, null)(ProductContainer);
