import React, { useState, useLayoutEffect, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    SafeAreaView,
} from "react-native";
import CustomKeyboard from "../../components/CustomKeyboard";
import { SimpleLineIcons, MaterialIcons, EvilIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { setCampaign } from "../../store/actions/campaign";
const Home = ({ navigation, route }) => {
    const [price, setPrice] = useState("");
    const [oldPrice, setOldPrice] = useState("");
    const campaign = useSelector((state) => state.campaign.campaign);
    const dispatch = useDispatch();
    const deleteCampaign = () => {
        setPrice(oldPrice);
        setOldPrice("");
        dispatch(setCampaign(null));
    };
    useEffect(() => {
        if (campaign) {
            if (campaign.descriptionPrice <= parseFloat(price)) {
                const newPrice = parseFloat(price) - campaign.discountPrice;
                setOldPrice(price);
                setPrice(newPrice);
            } else {
                dispatch(setCampaign(null));
                alert("Girdiğiniz Fiyat indirime Uygun Değildir.");
            }
        }
        if (campaign == null) {
            setOldPrice("");
        }
    }, [campaign]);
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <View style={styles.logoView}>
                    <Image
                        style={styles.logo}
                        source={require("../../Assets/streetFoodLogo.jpg")}
                    />
                </View>
                <View style={styles.campaignInfo}>
                    <View style={styles.wallet}>
                        <SimpleLineIcons
                            name="wallet"
                            size={24}
                            color="black"
                        />
                        <MaterialIcons
                            name="keyboard-arrow-down"
                            size={24}
                            color="black"
                        />
                    </View>
                    {campaign ? (
                        <View style={styles.campaignAddedView}>
                            <TouchableOpacity onPress={() => deleteCampaign()}>
                                <EvilIcons
                                    name="trash"
                                    size={24}
                                    color="#8A54FF"
                                />
                            </TouchableOpacity>
                            <View style={styles.campaignAdded}>
                                <Text style={{ color: "white" }}>Eklendi</Text>
                            </View>
                        </View>
                    ) : (
                        <View></View>
                    )}
                </View>
                <View style={styles.companyText}>
                    <Text>Ödeme yapınız</Text>
                    <Text style={{ color: "#FF786B" }}>{" >>> "}</Text>
                    <Text style={{ fontWeight: "bold" }}> Street Food</Text>
                </View>
                <Text style={styles.price}>₺{price}</Text>
                <Text style={styles.oldPrice}>{oldPrice ? oldPrice : " "}</Text>
                <CustomKeyboard setPrice={setPrice} price={price} />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                        navigation.navigate("ConfirmModal", {
                            price: price,
                            oldPrice: oldPrice !== "" ? oldPrice : price,
                        })
                    }
                >
                    <Text style={styles.buttonText}>Ödeme Yap</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 12,
        backgroundColor: "white",
    },
    button: {
        backgroundColor: "#FF786B",
        padding: 15,
        width: 300,
        height: 60,
        alignItems: "center",
        borderRadius: 35,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 22,
    },
    price: {
        fontSize: 60,
    },
    oldPrice: {
        fontSize: 25,
        textDecorationLine: "line-through",
        color: "#545252",
    },
    logoView: {
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 75,
        height: 75,
        borderRadius: 50,
    },
    companyText: {
        display: "flex",
        flexDirection: "row",
        marginTop: 5,
    },
    campaignInfo: {
        display: "flex",
        flexDirection: "row",
        height: 30,
        alignItems: "center",
        justifyContent: "space-between",
    },
    wallet: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
    },
    campaignAddedView: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    campaignAdded: {
        width: 80,
        height: 20,
        backgroundColor: "#8A54FF",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
    },
});
