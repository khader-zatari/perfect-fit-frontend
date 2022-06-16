import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SingleProduct from "../Screens/Products/SingleProduct";

import MenWomenKids from "../Screens/Openning/MenWomenKids";
import ProductContainer from "../Screens/Products/ProductContainer";
import StoreList from "../Screens/Openning/StoreList";
import { Button, Text } from "react-native";
import Vto from "../Screens/User/Vto";
import TriedPhoto from "../Screens/Products/TriedPhoto";

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
                    headerTitle: "Stores",
                }}
            />
            <Stack.Screen
                name="ProductContainer"
                component={ProductContainer}
                options={{
                    headerShown: true,
                    headerTitle: "Home",
                }}
            />

            <Stack.Screen name="SingleProduct" component={SingleProduct} />
            <Stack.Screen name="Vto" component={Vto} />
            <Stack.Screen name="TriedPhoto" component={TriedPhoto} />
        </Stack.Navigator>
    );
};
export default HomeNavigator;
