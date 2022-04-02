import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const MenWomenKids = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
            key={"Men"}
                style={styles.men}
                onPress={() => {
                    props.navigation.navigate("stores", { personType: "Men" });
                }}
            >
                <Text style={styles.text}>MEN</Text>
            </TouchableOpacity>
            <TouchableOpacity
            key={"Women"}
                style={styles.women}
                onPress={() => {
                    props.navigation.navigate("stores", { personType: "Women" });
                }}
            >
                <Text style={styles.text}>WOMEN</Text>
            </TouchableOpacity>
            <TouchableOpacity
            key={"Kids"}
                style={styles.kids}
                onPress={() => {
                    props.navigation.navigate("stores", { personType: "Kids" });
                }}
            >
                <Text style={styles.text}>KIDS</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    men: {
        backgroundColor: "#FFE900",
        flex: 1,
    },
    women: {
        backgroundColor: "#FCFFF7",
        flex: 1,
    },
    kids: {
        backgroundColor: "#21A0A0",
        flex: 1,
    },
    text: {
        alignItems: "center",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 25,
    },
});
export default MenWomenKids;
