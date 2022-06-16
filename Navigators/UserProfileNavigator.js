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
import Orders from "../Screens/User/Orders";
import AdminProducts from "../Screens/Admin/AdminProducts";
import AdminAddProduct from "../Screens/Admin/AdminAddProduct";
import SingleOrder from "../Screens/User/SingleOrder";
import AccountInformation from "../Screens/User/AccountInformation";
import ForgetPassword from "../Screens/User/ForgetPassword";
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

            <Stack.Screen name="Vto1" component={Vto1} />
            <Stack.Screen name="Admin" component={Admin} />
            <Stack.Screen name="AdminOrders" component={AdminOrders} />
            <Stack.Screen name="AdminProducts" component={AdminProducts} />
            <Stack.Screen name="AdminAddProduct" component={AdminAddProduct} />

            <Stack.Screen name="SingleOrder" component={SingleOrder} />
            <Stack.Screen name="AccountInformation" component={AccountInformation} />
            <Stack.Screen name="Orders" component={Orders} />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        </Stack.Navigator>
    );
};
export default UserProfileNavigator;
