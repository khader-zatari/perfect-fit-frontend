import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SingleProduct from "../Screens/Products/SingleProduct";
import ProductList from "../Screens/Products/ProductList";
import MenWomenKids from "../Screens/Products/MenWomenKids";

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
            <Stack.Screen name="MenWomenKids" component={MenWomenKids} />
            <Stack.Screen name="ProductList" component={ProductList} />
            <Stack.Screen name="SingleProduct" component={SingleProduct} />
        </Stack.Navigator>
    );
};
export default HomeNavigator;
