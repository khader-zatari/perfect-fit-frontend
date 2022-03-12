import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import CartNavigator from "./CartNavigator";

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
        </Tab.Navigator>
    );
};
export default Main;
