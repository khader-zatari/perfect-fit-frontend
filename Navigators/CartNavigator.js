import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SingleProduct from "../Screens/Products/SingleProduct";
import ProductList from "../Screens/Products/ProductList";
import Cart from "../Screens/Cart/Cart";

const Stack = createNativeStackNavigator();
const CartNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="CartHomePage"
            screenOptions={{
                contentStyle: {
                    backgroundColor: "#FFFFFF",
                },
            }}
        >
            <Stack.Screen name="CartHomePage" component={Cart} />
        </Stack.Navigator>
    );
};
export default CartNavigator;
