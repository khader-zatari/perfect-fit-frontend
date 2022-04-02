import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert, Image } from "react-native";
import { Button } from "native-base";
import { Camera } from "expo-camera";

const Vto = (props) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [showCamera, setShowCamera] = useState(false);
    const [image, setImage] = useState(null);
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const takePhoto = async () => {
        if (cameraRef) {
            console.log("in take picture");
        }
        try {
            let photo = await cameraRef.current.takePictureAsync({
                allosEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            //upload the image
            if (!photo.cancelled) {
                const ext = photo.uri.substring(photo.uri.lastIndexOf(".") + 1);
                const fileName = photo.uri.replace(/^.*[\\\/]/, "");
                var formData = new FormData();
                formData.append("files", {
                    uri: photo.uri,
                    fileName,
                    type: `image/${ext}`,
                });
            }
            ///
            return photo;
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <View style={styles.container}>
            {showCamera ? (
                <Camera style={styles.camera} type={type} ref={cameraRef}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={async () => {
                                const r = await takePhoto();
                                if (!r.uri) {
                                    setImage(r.uri);
                                    console.log(image);
                                }
                                setShowCamera(false);
                            }}
                        >
                            <Text style={styles.text}>Take Photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => setShowCamera(false)}>
                            <Text style={styles.text}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </Camera>
            ) : (
                <View style={{ flex: 1 }}>
                    <View style={{ width: 100, height: 30, justifyContent: "center", alignItems: "center" }}>
                        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, backgroundColor: "blue" }} />}
                        <TouchableOpacity style={{ backgroundColor: "#000", flex: 1, justifyContent: "center", alignItems: "center" }} onPress={() => setShowCamera(true)}>
                            <Text style={{}}>Take Picture</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: "transparent",
        flexDirection: "row",
        margin: 20,
    },
    button: {
        flex: 1,
        alignSelf: "flex-end",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        color: "white",
    },
});

export default Vto;
