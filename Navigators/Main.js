import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import CartNavigator from "./CartNavigator";
import UserProfileNavigator from "./UserProfileNavigator";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

const Main = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                keyboardHidesTabBar: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#e91e63",
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => <Icon name="home" color={color} size={30} />,
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartNavigator}
                options={{
                    tabBarIcon: ({ color }) => <Icon name="shopping-cart" color={color} size={30} />,
                }}
            />
            <Tab.Screen
                name="UserProfile"
                component={UserProfileNavigator}
                options={{
                    tabBarIcon: ({ color }) => <Icon name="user" color={color} size={30} />,
                }}
            />
        </Tab.Navigator>
    );
};
export default Main;
