import react from "react";
import { Text, View, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import Banner from "../../Shared/Banner.js";
const { height } = Dimensions.get("window");
const ProductContainer = () => {
    return (
        <ScrollView style={styles.container}>
            <View>
                <View>
                    <Banner />
                </View>
                <View>
                    <Text>iam here</Text>
                </View>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        marginTop: height / 20,
    },
});
export default ProductContainer;
