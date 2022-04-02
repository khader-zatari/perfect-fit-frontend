import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserProfile from "../Screens/User/UserProfile";
import SignUp from "../Screens/User/SignUp";
import LogIn from "../Screens/User/LogIn";
import ShippingAddress from "../Screens/User/ShippingAddress";
import Vto from "../Screens/User/Vto";
import Vto1 from "../Screens/User/Vto1";
const Stack = createNativeStackNavigator();

const UserProfileNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="LogIn"
            screenOptions={{
                contentStyle: {
                    backgroundColor: "#FFFFFF",
                },
            }}
        >
            <Stack.Screen name="Userpage" component={UserProfile} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="LogIn" component={LogIn} />
            <Stack.Screen name="ShippingAddress" component={ShippingAddress} />
            <Stack.Screen name="Vto" component={Vto} />
            <Stack.Screen name="Vto1" component={Vto1} />
        </Stack.Navigator>
    );
};
export default UserProfileNavigator;
