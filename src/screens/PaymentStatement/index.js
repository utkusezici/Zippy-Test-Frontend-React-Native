import React from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Image,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import {setCampaign} from "../../store/actions/campaign"
const PaymentStatement = ({ navigation, route }) => {
    const campaign = useSelector((state) => state.campaign.campaign);
    const dispatch = useDispatch()
    const goHome = () => {
        dispatch(setCampaign(null))
        navigation.navigate("Home")
    }
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Image
                        style={styles.thickPicture}
                        source={require("../../Assets/odemealındı.jpg")}
                    />
                </View>
                <View style={styles.content}>
                    <View style={styles.company}>
                        <View style={styles.logoView}>
                            <Image
                                style={styles.logo}
                                source={require("../../Assets/streetFoodLogo.jpg")}
                            />
                        </View>
                        <View style={styles.companyInformation}>
                            <Text>Street Food</Text>
                            <Text>12.10.2020</Text>
                            <Text>19.05</Text>
                        </View>
                    </View>
                    <View style={styles.paymentInformation}>
                        <View style={styles.cardInformation}>
                            <View style={styles.cardIcon}>
                                <Text style={{ color: "gray" }}>Kartım</Text>
                                <Fontisto
                                    name="mastercard"
                                    size={24}
                                    color="black"
                                />
                            </View>
                            <View style={styles.cardUsers}>
                                <Text
                                    style={{ color: "gray", marginBottom: 4 }}
                                >
                                    Mert Bağdatlı
                                </Text>
                                <Text style={{ color: "gray" }}>
                                    1234**4453
                                </Text>
                            </View>
                        </View>
                        <View style={styles.priceInformation}>
                            <View style={styles.name}>
                                <Text style={styles.priceText}>
                                    Sepet Tutarı
                                </Text>
                                {campaign && (
                                    <Text style={styles.priceText}>
                                        Net {campaign.discountPrice}TL
                                        Kampanyası
                                    </Text>
                                )}

                                <Text style={styles.priceTextResul}>
                                    Ödenen Tutar
                                </Text>
                            </View>
                            <View style={styles.price}>
                                <Text style={styles.priceText}>
                                    {route.params.oldPrice}TL
                                </Text>
                                {campaign && (
                                    <Text style={styles.priceText}>
                                        {campaign.discountPrice
                                            ? campaign.discountPrice
                                            : ""}
                                        TL
                                    </Text>
                                )}
                                <Text style={styles.priceTextResul}>
                                    {route.params.price}TL
                                </Text>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => goHome()}
                    >
                        <Text style={styles.buttonText}>Anasayfaya Dön</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default PaymentStatement;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "white",
        width: "100%",
    },
    header: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 0.5,
        borderBottomColor: "gray",
        width: "100%",
    },
    thickPicture: {
        width: 260,
        height: 200,
    },
    content: {
        flex: 3,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#FF786B",
        padding: 10,
        width: 280,
        height: 50,
        alignItems: "center",
        borderRadius: 15,
        marginBottom: 15,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },
    company: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    logoView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    companyInformation: {
        flex: 3,
        justifyContent: "center",
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    paymentInformation: {
        flex: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    cardInformation: {
        display: "flex",
        flexDirection: "row",
        width: "90%",
        height: 60,
        borderWidth: 1,
        borderColor: "#edc2ea",
    },
    cardIcon: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    cardUsers: {
        flex: 3,
        justifyContent: "center",
    },
    priceInformation: {
        display: "flex",
        flexDirection: "row",
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
    },
    name: {
        flex: 2,
        justifyContent: "center",
    },
    priceText: {
        fontSize: 20,
        marginTop: 10,
    },
    priceTextResul: {
        fontSize: 20,
        marginTop: 10,
        color: "#FF786B",
        fontWeight: "bold",
    },
});
