import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const CustomKeyboard = (props) => {
    const deleteNumber = () => {
        const text = props.price.toString()
        const editedText = text.slice(0, -1)
        props.setPrice(editedText)
    };
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.setPrice(props.price + "1")}
                >
                    <Text style={styles.buttonText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.setPrice(props.price + "2")}
                >
                    <Text style={styles.buttonText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.setPrice(props.price + "3")}
                >
                    <Text style={styles.buttonText}>3</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.setPrice(props.price + "4")}
                >
                    <Text style={styles.buttonText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.setPrice(props.price + "5")}
                >
                    <Text style={styles.buttonText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.setPrice(props.price + "6")}
                >
                    <Text style={styles.buttonText}>6</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.setPrice(props.price + "7")}
                >
                    <Text style={styles.buttonText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.setPrice(props.price + "8")}
                >
                    <Text style={styles.buttonText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.setPrice(props.price + "9")}
                >
                    <Text style={styles.buttonText}>9</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.setPrice(props.price + ",")}
                >
                    <Text style={styles.buttonText}>,</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.setPrice(props.price + "0")}
                >
                    <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => deleteNumber()}
                >
                    <MaterialCommunityIcons
                        name="backspace-outline"
                        size={28}
                        color="black"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomKeyboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    row: {
        display: "flex",
        flexDirection: "row",
        flex: 1,
        width: "100%",
    },
    button: {
        flex: 1,
        backgroundColor: "white",
        padding: 15,
        width: "33%",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 28,
    },
});
