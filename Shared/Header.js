import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Center, Heading, Image } from "native-base";

const Header = () => {
    return (
        <View style={styles.container}>
            <Center>
                <Heading>
                    <Center>
                        <Image source={require("../assets/Logo.png")} alt="Logo" size="xs" />
                    </Center>
                </Heading>
            </Center>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 5,
    },
});
export default Header;
