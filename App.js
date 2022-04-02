import { NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import ProductContainer from "./Screens/Products/ProductContainer";

import Main from "./Navigators/Main";

import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import store from "./Redux/store";

export default function App() {
    return (
        <NativeBaseProvider>
            <Provider store={store}>
                <NavigationContainer>
                    <Main />
                </NavigationContainer>
            </Provider>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
