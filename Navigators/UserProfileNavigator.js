import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserProfile from "../Screens/User/UserProfile";
import SignUp from "../Screens/User/SignUp";
import LogIn from "../Screens/User/LogIn";
import ShippingAddress from "../Screens/User/ShippingAddress";
import Vto from "../Screens/User/Vto";
import Vto1 from "../Screens/User/Vto1";
import Admin from "../Screens/Admin/Admin";
import AdminOrders from "../Screens/User/AdminOrders";
import AdminProducts from "../Screens/Admin/AdminProducts";
import AdminAddProduct from "../Screens/Admin/AdminAddProduct";
import AdminAddProductSecond from "../Screens/Admin/AdminAddProductSecond";
import SingleOrder from "../Screens/User/SingleOrder";
import AccountInformation from "../Screens/User/AccountInformation";
const Stack = createNativeStackNavigator();

const UserProfileNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="LogIn"
            screenOptions={{
                contentStyle: {
                    backgroundColor: "#FFFFFF",
                },
                headerShown: false,
            }}
        >
            <Stack.Screen name="Userpage" component={UserProfile} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="ShippingAddress" component={ShippingAddress} />
            <Stack.Screen name="Vto" component={Vto} />
            <Stack.Screen name="Vto1" component={Vto1} />
            <Stack.Screen name="Admin" component={Admin} />
            <Stack.Screen name="AdminOrders" component={AdminOrders} />
            <Stack.Screen name="AdminProducts" component={AdminProducts} />
            <Stack.Screen name="AdminAddProduct" component={AdminAddProduct} />
            <Stack.Screen name="AdminAddProductSecond" component={AdminAddProductSecond} />
            <Stack.Screen name="SingleOrder" component={SingleOrder} />
            <Stack.Screen name="AccountInformation" component={AccountInformation} />
        </Stack.Navigator>
    );
};
export default UserProfileNavigator;
