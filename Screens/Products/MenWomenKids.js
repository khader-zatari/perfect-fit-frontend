import React from "react";
import { Text, View, StyleSheet } from "react-native";

const MenWomenKids = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.men}>
                <Text style={styles.text}>MEN</Text>
            </View>
            <View style={styles.women}>
                <Text style={styles.text}>WOMEN</Text>
            </View>
            <View style={styles.kids}>
                <Text style={styles.text}>KIDS</Text>
            </View>
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
