import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const MenWomenKids = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.men}>
                <Text style={styles.text}>MEN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.women}>
                <Text style={styles.text}>WOMEN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.kids}>
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
