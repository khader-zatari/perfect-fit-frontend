import react, { useState } from "react";
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import StoreCard from "./StoreCard";

const { width } = Dimensions.get("window");
const ProductList = (props) => {
    const userJson = require("../../assets/users.json");
    const personType = props.route.params.personType;
    const [stores, setstores] = useState(
        userJson.filter((user) => {
            return user.isAdmin == true;
        })
    );
    return (
        <View style={styles.container}>
            {stores.map((store) => {
                return (
                    <TouchableOpacity
                        style={{ position: 'relative' }}
                        onPress={() => {
                            props.navigation.navigate("ProductContainer", { personType: personType, store: store });
                        }}
                    >
                        <StoreCard {...store} />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 3,
        width: "100%",
        height: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
    },
});
export default ProductList;
