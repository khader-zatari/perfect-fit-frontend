import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MenWomenKids = (props) => {
    return (
        <SafeAreaView edges={["top", "left", "right"]} style={styles.container}>
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
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    men: {
        backgroundColor: "#FFE900",
        flex: 1,
        justifyContent: "center",
    },
    women: {
        backgroundColor: "#FCFFF7",
        flex: 1,
        justifyContent: "center",
    },
    kids: {
        backgroundColor: "#21A0A0",
        flex: 1,
        justifyContent: "center",
    },
    text: {
        alignItems: "center",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 25,
    },
});
export default MenWomenKids;
