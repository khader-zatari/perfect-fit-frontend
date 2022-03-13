import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import CartNavigator from "./CartNavigator";
import UserProfileNavigator from "./UserProfileNavigator";

const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                keyboardHidesTabBar: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#e91e63",
            }}
        >
            <Tab.Screen name="Home" component={HomeNavigator} />
            <Tab.Screen name="Cart" component={CartNavigator} />
            <Tab.Screen name="UserProfile" component={UserProfileNavigator} />
        </Tab.Navigator>
    );
};
export default Main;
