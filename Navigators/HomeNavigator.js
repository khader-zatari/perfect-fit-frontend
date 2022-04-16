import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SingleProduct from "../Screens/Products/SingleProduct";

import MenWomenKids from "../Screens/Openning/MenWomenKids";
import ProductContainer from "../Screens/Products/ProductContainer";
import StoreList from "../Screens/Openning/StoreList";
import { Button, Text } from "react-native";

const Stack = createNativeStackNavigator();
const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="MenWomenKids"
            screenOptions={{
                contentStyle: {
                    backgroundColor: "#FFFFFF",
                },
            }}
        >
            <Stack.Screen
                name="MenWomenKids"
                component={MenWomenKids}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="stores"
                component={StoreList}
                options={{
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="ProductContainer"
                component={ProductContainer}
                options={{
                    headerShown: true,
                }}
            />
            <Stack.Screen name="SingleProduct" component={SingleProduct} />
        </Stack.Navigator>
    );
};
export default HomeNavigator;
