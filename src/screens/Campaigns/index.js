import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { Body, ListItem, CheckBox } from "native-base";
import { Entypo } from "@expo/vector-icons";
import CampaignsCard from "../../components/CampaignsCard";
import cardsData from "./cardsData.json";
import { setCampaign } from "../../store/actions/campaign";
import { useSelector, useDispatch } from "react-redux";

const Campaigns = ({ navigation }) => {
    const DATA = cardsData.Campaigns;
    const [selectedCampaign, setSelectedCampaign] = useState(null);
    const dispatch = useDispatch();
    const campaign = useSelector((state) => state.campaign.campaign);
    const campaignAdd = () => {
        dispatch(setCampaign(selectedCampaign));
        navigation.navigate("Home", selectedCampaign);
    };
    useEffect(() => {
        if (campaign) {
            setSelectedCampaign(campaign);
        }
    }, [campaign]);
    return (
        <View style={styles.modal}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Entypo name="cross" size={50} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.text}>Kampanya Ekle</Text>
                </View>
                <ScrollView>
                    <View style={styles.content}>
                        {DATA.map((item, index) => {
                            return (
                                <CampaignsCard
                                    key={index}
                                    data={item}
                                    onCheck={() => setSelectedCampaign(item)}
                                    isChecked={selectedCampaign?.id === item.id}
                                />
                            );
                        })}
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <TouchableOpacity
                        style={
                            selectedCampaign
                                ? styles.buttonSelected
                                : styles.button
                        }
                        onPress={() => campaignAdd()}
                    >
                        <Text style={styles.buttonText}>EKLE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Campaigns;

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        width: 330,
        height: 500,
        backgroundColor: "#F5F7FA",
        borderRadius: 8,
        alignItems: "center",
    },
    content: {
        borderRadius: 8,
        alignItems: "center",
        padding: 10,
        width: "100%",
    },
    header: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 8,
        width: "100%",
        alignItems: "center",
        height: 60,
    },
    footer: {
        width: "100%",
        height: 70,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#8A898A",
        padding: 15,
        width: 300,
        height: 60,
        alignItems: "center",
        borderRadius: 7,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 22,
    },
    buttonSelected: {
        backgroundColor: "#8A54FF",
        padding: 15,
        width: 300,
        height: 60,
        alignItems: "center",
        borderRadius: 7,
    },
    image: {
        width: 100,
        height: 100,
    },
    text: {
        fontSize: 20,
        textAlign: "center",
        marginLeft: 60,
    },
});
