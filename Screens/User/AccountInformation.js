import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AccountInformation = (props) => {
    const user = props.route.params.user;
    return (
        <SafeAreaView>
            <View>
                <Text>name {user.name}</Text>
                <Text>email {user.email}</Text>
                <Text>phone {user.phone}</Text>
                <Text>addres {user.address}</Text>
                <Text>city {user.city}</Text>
                <Text>zip {user.zip}</Text>
            </View>
        </SafeAreaView>
    );
};
export default AccountInformation;
