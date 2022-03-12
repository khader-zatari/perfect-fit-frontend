import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SingleProduct from "../Screens/Products/SingleProduct";
import ProductList from "../Screens/Products/ProductList";

const Stack = createNativeStackNavigator();
const Main = () => {
    return (
        <Stack.Navigator initialRouteName="ProductList">
            <Stack.Screen name="ProductList" component={ProductList} />
            <Stack.Screen name="SingleProduct" component={SingleProduct} />
        </Stack.Navigator>
    );
};
export default Main;
