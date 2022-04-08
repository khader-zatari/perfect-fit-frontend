import react, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Dimensions, StyleSheet, Button, Pressable, Modal, ScrollView } from "react-native";
import ProductCard from "../Products/ProductCard";
import Icon from "react-native-vector-icons/FontAwesome";

const { width } = Dimensions.get("window");
const AdminProductList = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const products = props.products;
    useEffect(() => {});
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
                        <Button title="Edite" onPress={() => [props.navigation.navigate("ProductForm", { item: props }), setModalVisible(false)]} />
                        <Button title="Delete" onPress={() => [props.delete(props._id), setModalVisible(false)]} />
                    </View>
                </View>
            </Modal>
            {products.map((item) => {
                console.log(item);
                return (
                    <TouchableOpacity onLongPress={() => setModalVisible(!modalVisible)}>
                        <ProductCard {...item} />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 3,
        width: "100%",
        height: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
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
export default AdminProductList;
