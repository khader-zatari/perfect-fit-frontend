import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const { height, width } = Dimensions.get("window");
const AccountInformation = (props) => {
    const user = props.route.params.user;
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={{ flex: 1 }}>name {user.name}</Text>
                <Text style={{ flex: 1 }}>email {user.email}</Text>
                <Text style={{ flex: 1 }}>phone {user.phone}</Text>
                <Text style={{ flex: 1 }}>addres {user.address}</Text>
                <Text style={{ flex: 1 }}>city {user.city}</Text>
                <Text style={{ flex: 1 }}>zip {user.zip}</Text>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: "column-reverse",
        alignSelf: "center",
        justifyContent: "center",
        height: height/2,
        width: width,
    },
});
export default AccountInformation;
