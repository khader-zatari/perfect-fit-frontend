import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert, Image } from "react-native";
import { Button } from "native-base";
import * as ImagePicker from "expo-image-picker";

const Vto1 = (props) => {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
    );
};
const styles = StyleSheet.create({});

export default Vto1;
