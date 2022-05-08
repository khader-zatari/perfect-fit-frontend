import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Dimensions, View, ScrollView, Text } from "react-native";
import Swiper from "react-native-swiper";

var { width } = Dimensions.get("window");
const Banner = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.swiper}>
                <Swiper style={{ height: width / props.height }} showButtons={false} autoplay={true} autoplayTimeout={2}>
                    {props.bannerImages.map((item) => {
                        return <Image key={item} style={styles.imageBanner} resizeMode="contain" source={{ uri: item }} />;
                    })}
                </Swiper>
                <View style={{ height: 20 }}></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    swiper: {
        width: width,
        alignItems: "center",
        marginTop: 0,
    },
    imageBanner: {
        height: width,
    },
});

export default Banner;
