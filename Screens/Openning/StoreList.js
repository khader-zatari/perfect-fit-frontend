import react, { useState, useEffect, useCallback } from "react";
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StoreCard from "./StoreCard";
import baseURL from "../../assets/baseUrl";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const ProductList = (props) => {
    const personType = props.route.params.personType;
    // const [stores, setstores] = useState(
    //     userJson.filter((user) => {
    //         return user.isAdmin == true;
    //     })
    // );

    const [stores, setStores] = useState(null);

    useFocusEffect(
        useCallback(() => {
            axios
                .get(`${baseURL}stores`)
                .then((res) => setStores(res.data))
                .catch((error) => console.log(error.response.data));
            return () => {
                setStores();
            };
        }, [])
    );

    // useEffect(() => {
    //     axios
    //         .get(`${baseURL}stores`)
    //         .then((res) => setStores(res.data))
    //         .catch((error) => console.log(error.response.data));
    //     return () => {
    //         setStores();
    //     };
    // }, []);

    return (
        <SafeAreaView edges={["top", "left", "right"]}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Stores</Text>
            </View>
            <View style={styles.container}>
                {stores != null
                    ? stores.map((store) => {
                          return (
                              <TouchableOpacity
                                  key={store.name}
                                  style={{ position: "relative" }}
                                  onPress={() => {
                                      props.navigation.navigate("ProductContainer", { personType: personType, store: store });
                                  }}
                              >
                                  <StoreCard {...store} />
                              </TouchableOpacity>
                          );
                      })
                    : null}
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        // flex:1,
        margin: 3,
        width: "100%",
        height: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    headerText: {
        fontSize: 30,
        fontWeight: "bold",
    },
    headerContainer: {
        height: height / 9,
        justifyContent: "center",
        alignSelf: "center",
    },
});
export default ProductList;
