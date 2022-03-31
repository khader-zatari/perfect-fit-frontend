import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SingleProduct from "../Screens/Products/SingleProduct";

import MenWomenKids from "../Screens/Products/MenWomenKids";
import ProductContainer from "../Screens/Products/ProductContainer";
import StoreList from "../Screens/Products/StoreList";
const Stack = createNativeStackNavigator();
const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="MenWomenKids"
            screenOptions={{
                contentStyle: {
                    backgroundColor: "#FFFFFF",
                },
                headerShown: false,
            }}
        >
            <Stack.Screen name="MenWomenKids" component={MenWomenKids} />
            <Stack.Screen name="stores" component={StoreList} />
            <Stack.Screen name="ProductContainer" component={ProductContainer} />
            <Stack.Screen name="SingleProduct" component={SingleProduct} />
        </Stack.Navigator>
    );
};
export default HomeNavigator;
