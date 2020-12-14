import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons'; 

const ConfirmModal = ({navigation,route}) => {
    const price = route.params.price
        return (
        <View style={styles.container}>
            <View style={styles.content}>
            <View style={styles.header}>
                <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                <Entypo name="cross" size={40} color="black" />
                </TouchableOpacity>
                </View>
                <Text style={styles.price}>{price}TL</Text>
                <Text style={styles.text} >Ödeme Yapmek İstiyorum</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("PaymentStatement" , {price:price,oldPrice: route.params.oldPrice})}
                >
                    <Text style={styles.buttonText}>UYGULA</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ConfirmModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        width: 300,
        height: 250,
        backgroundColor: "white",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "space-between",
    },
    header: {
        backgroundColor: "white",
        borderRadius: 8,
        width: "100%",
        height: 40,
    },
    text:{
        fontSize:17,
        fontWeight: "bold",
    },
    button: {
        backgroundColor: "#FF786B",
        marginTop: 20,
        marginBottom:20,
        padding: 20,
        width: 280,
        alignItems: "center",
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
    },
    price: {
        fontSize:53,
        color:"#FF786B"
    }
});
