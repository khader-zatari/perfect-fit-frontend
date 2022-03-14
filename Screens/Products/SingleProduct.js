import React from "react";
import { Text, View, ScrollView, StyleSheet, Image, Dimensions } from "react-native";
import { Select, Box, CheckIcon, Center, NativeBaseProvider, Button, Row } from "native-base";
const { width, height } = Dimensions.get("window");
const SingleProduct = (props) => {
    let [service, setService] = React.useState("");
    let [service1, setService1] = React.useState("");
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} resizeMode="contain" source={require("../../assets/1638427112t-shirt-png.png")} />
                </View>
                <View style={styles.secondPart}>
                    <Text style={{ marginTop: 20, fontSize: 25, fontWeight: "bold", textAlign: "center" }}>black T-shirt</Text>
                    <View style={styles.selectContainer}>
                        <View style={styles.selectLeft}>
                            <Select
                                selectedValue={service}
                                accessibilityLabel="Size"
                                placeholder="Size"
                                color="black"
                                _selectedItem={{
                                    bg: "teal.600",
                                    endIcon: <CheckIcon size="5" />,
                                }}
                                mt={1}
                                onValueChange={(itemValue) => setService(itemValue)}
                            >
                                <Select.Item label="S" value="S" />
                                <Select.Item label="M" value="M" />
                                <Select.Item label="L" value="L" />
                                <Select.Item label="XL" value="XL" />
                                <Select.Item label="XXL" value="XXL" />
                            </Select>
                        </View>
                        <View style={styles.selectRight}>
                            <Select
                                selectedValue={service1}
                                accessibilityLabel="Color"
                                placeholder="Color"
                                color="black"
                                _selectedItem={{
                                    bg: "teal.600",
                                    endIcon: <CheckIcon size="5" />,
                                }}
                                mt={1}
                                onValueChange={(itemValue) => setService1(itemValue)}
                            >
                                <Select.Item label="Black" value="Black" />
                                <Select.Item label="White" value="White" />
                                <Select.Item label="Red" value="Red" />
                            </Select>
                        </View>
                    </View>
                    <View style={{ width: "90%", marginBottom: 10, alignSelf: "center" }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "right" }}>$220</Text>
                    </View>

                    <View style={styles.buttonContainer}>
                        <Button
                            style={styles.button}
                            size="16"
                            onPress={() => {
                                props.navigation.navigate("Just");
                            }}
                        >
                            Add to Cart
                        </Button>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text>flasjdflkasjd;flkjas;ldkfjas;ldkfj;lsakdjf;laskdjf;laskdjf;salkdjf;salkdjfaslkdjflkasdjf;lkasjdf;lkjsad;lkfj;</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
    },
    imageContainer: {
        flex: 1,
        height: height / 2,
        width: width,
    },
    image: {
        flex: 1,
        width: "100%",
        resizeMode: "contain",
    },
    secondPart: {
        flex: 1,
    },
    buttonContainer: {
        alignItems: "center",

        justifyContent: "center",
    },
    button: { width: "90%" },
    descriptionContainer: {
        padding: 20,
    },
    selectContainer: {
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
    },
    selectLeft: {
        flex: 1,
        width: "80%",
        alignSelf: "center",
        margin: 20,
    },
    selectRight: {
        flex: 1,
        width: "80%",
        alignSelf: "center",
        margin: 20,
    },
});
export default SingleProduct;
