import react, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableHighLight, TouchableOpacity, Dimensions, Button, Modal } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const { height, width } = Dimensions.get("window");

const ProductCardAdmin = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    var price = 10;
    var name = "grey Tshirt ";
    console.log(props.image);
    return (
        <View style={styles.container}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            underlayColor="#E8E8E8"
                            onPress={() => {
                                setModalVisible(false);
                            }}
                            style={{
                                alignSelf: "flex-end",
                                position: "absolute",
                                top: 5,
                                right: 10,
                            }}
                        >
                            <Icon name="close" size={20} />
                        </TouchableOpacity>
                        <Button title="Delete" onPress={() => [props.delete(props._id), setModalVisible(false)]} />
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                onPress={() => {
                    // props.navigation.navigate("SingleProduct", { item: props });
                }}
                onLongPress={() => setModalVisible(true)}
                style={[
                    styles.container,
                    {
                        backgroundColor: props.index % 2 == 0 ? "white" : "gainsboro",
                    },
                ]}
            >
                <Image source={{ uri: props.image ? props.image : "https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png" }} style={styles.image} />

                <View style={styles.description}>
                    <Text style={styles.descriptionText}>{props.name}</Text>
                </View>
                <View style={styles.price}>
                    <Text>order Times {props.sellCount} </Text>
                </View>
                <View style={styles.price}>
                    <Text style={styles.priceText}>{props.price} Nis</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: height / 3,
        width: width / 2.25,
        // backgroundColor: "#e1dad1",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
        // opacity: 0.7,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
    },
    image: {
        flex: 5,
        height: height / 3,
        width: width / 2.5,
        resizeMode: "contain",
    },
    price: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    priceText: {
        fontSize: 17,
        fontWeight: "bold",
    },
    description: {
        flex: 1.5,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    descriptionText: {
        fontSize: 14,
        textAlign: "center",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});
export default ProductCardAdmin;
