import React from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Content, Left, Body, ListItem, Thumbnail, Text } from "native-base";
import SearchCard from "./SearchCard";

var { width } = Dimensions.get("window");

const SearchedProduct = (props) => {
    const { productsFiltered } = props;

    return (
        <View style={{ width: width }}>
            {/* <Content style={{ width: width }}> */}
            {productsFiltered.length > 0 ? (
                productsFiltered.map((item) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                props.navigation.navigate("SingleProduct", { product: item, personType: props.personType, store: props.store });
                            }}
                        >
                            <SearchCard item={item} key={Math.random()} />
                        </TouchableOpacity>
                    );
                })
            ) : (
                <View style={styles.center}>
                    <Text style={{ alignSelf: "center" }}>No products match the selected criteria</Text>
                </View>
            )}
            {/* </Content> */}
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        justifyContent: "center",
        alignItems: "center",
        height: 100,
    },
});

export default SearchedProduct;
