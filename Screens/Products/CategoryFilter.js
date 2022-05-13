import React from "react";
import { StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { ListItem, Badge, Text } from "native-base";

const CategoryFilter = (props) => {
    return (
        <ScrollView bounces={true} horizontal={true} style={{ backgroundColor: "#f2f2f3" }}>
            <TouchableOpacity
                key={1}
                onPress={() => {
                    props.categoryFilter("all"), props.setActive(-1);
                }}
            >
                <Badge style={[styles.center, { margin: 5 }, props.active == -1 ? styles.active : styles.inactive]}>
                    <Text style={{ color: "white" }}>All</Text>
                </Badge>
            </TouchableOpacity>
            {props.categories.map((item) => (
                <TouchableOpacity
                    key={item}
                    onPress={() => {
                        props.categoryFilter(item), props.setActive(props.categories.indexOf(item));
                    }}
                >
                    <Badge style={[styles.center, { margin: 5 }, props.active == props.categories.indexOf(item) ? styles.active : styles.inactive]}>
                        <Text style={{ color: "white" }}>{item}</Text>
                    </Badge>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    center: {
        justifyContent: "center",
        alignItems: "center",
    },
    active: {
        backgroundColor: "#03bafc",
    },
    inactive: {
        backgroundColor: "#a0e1eb",
    },
});

export default CategoryFilter;
