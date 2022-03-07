import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Dimensions, View, ScrollView, Text } from "react-native";
import Swiper from "react-native-swiper";

var { width } = Dimensions.get("window");
const Banner = () => {
    const bannerData = ["https://i.pinimg.com/originals/79/7d/fc/797dfc84d7a2149d4b77769c213030f4.jpg", "https://creativemachine.co/wp-content/uploads/2020/03/ecommerce_men_s_clothing_banner_template_8_1200x628.jpg", "https://i.pinimg.com/originals/af/16/1a/af161a824e6c3ed7e1ec18f2d94b650c.jpg"];
    return (
        <View style={styles.container}>
            <View style={styles.swiper}>
                <Swiper style={{ height: width / 2 }} showButtons={false} autoplay={true} autoplayTimeout={2}>
                    {bannerData.map((item) => {
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
        // backgroundColor: "gainsboro",
    },
    swiper: {
        width: width,
        alignItems: "center",
        marginTop: 10,
    },
    imageBanner: {
        height: width,
    },
});

export default Banner;
