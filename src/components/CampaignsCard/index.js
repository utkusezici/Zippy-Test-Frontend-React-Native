import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { CheckBox } from 'native-base';
const CampaignsCard = (props) => {
    const data = props.data;
    return (
        <View style={styles.container}>
            
            <CheckBox color="#8A54FF" style={styles.checkbox}  onPress={() => props.onCheck()} size={40} checked={props.isChecked} />
            <TouchableOpacity style={styles.cardContainer} onPress={() => props.onCheck()}>
                <View style={styles.logoView}>
                    <Image
                        style={styles.logo}
                        source={{ uri: data.companyLogo }}
                    />
                </View>
                <View style={styles.content}>
                    <View style={styles.contentHeader}>
                        <Text style={styles.contentHeaderText}>
                            {data.companyName}
                        </Text>
                        <View style={styles.contentHeaderLastPerson}>
                            <Text style={styles.contentHeaderLastPersonText}>
                                son {data.lastPerson} kişi
                            </Text>
                        </View>
                    </View>
                    <View style={styles.contentCenter}>
                        <Text style={styles.contentPriceDiscount}>
                            {data.discountPrice}TL İndirimi
                        </Text>
                        <AntDesign
                            name="infocirlceo"
                            size={18}
                            color="#1D2EF7"
                        />
                    </View>
                    <View style={styles.contentFooter}>
                        <View style={styles.footerLeft}>
                            <Text style={styles.footerText}>
                                {data.descriptionPrice} ve üzeri alışverişlerde
                            </Text>
                        </View>
                        <View style={styles.footerRight}>
                            {data.day ? (
                                <View style={styles.footerDay}>
                                    <Text style={styles.footerRightText}>
                                        {data.day}
                                    </Text>
                                </View>
                            ) : null}
                            {data.hour ? (
                                <View style={styles.footerHour}>
                                    <Text style={styles.footerRightText}>
                                        {data.hour}
                                    </Text>
                                </View>
                            ) : null}
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default CampaignsCard;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    cardContainer: {
        width: 250,
        height: 120,
        backgroundColor: "white",
        borderRadius: 2,
        alignItems: "center",
        marginBottom: 8,
        display: "flex",
        flexDirection: "row",
        marginLeft:15
    },
    logoView: {
        flex: 1,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRightWidth: 4,
        borderRightColor: "#F5F7FA",
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    content: {
        flex: 3,
        height: "100%",
    },
    checkbox:{
        marginRight: 5,
        width:40,
        height:40,
        borderRadius:50,
        paddingTop:10,
        paddingLeft:7
    },
    contentHeader: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: 35,
    },
    contentHeaderText: {
        fontSize: 13,
        fontWeight: "bold",
        paddingLeft: 2,
    },
    contentHeaderLastPerson: {
        width: 80,
        height: 35,
        backgroundColor: "#FF786B",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    contentHeaderLastPersonText: {
        color: "white",
        fontSize: 10,
        fontWeight: "bold",
    },
    contentCenter: {
        width: "100%",
        height: 45,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 5,
    },
    contentPriceDiscount: {
        color: "#FF786B",
        fontSize: 24,
        marginLeft: 5,
        fontWeight: "bold",
    },
    contentFooter: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    footerLeft: {
        flex: 7,
        justifyContent: "center",
        padding: 3,
    },
    footerText: {
        fontSize: 8,
        color: "gray",
    },
    footerRight: {
        flex: 3.5,
        padding: 3,
    },
    footerDay: {
        width: "100%",
        backgroundColor: "#e5a930",
        borderRadius: 8,
        alignItems: "center",
    },
    footerHour: {
        width: "100%",
        backgroundColor: "#1338a5",
        borderRadius: 8,
        alignItems: "center",
        marginTop: 5,
    },
    footerRightText: {
        fontSize: 7,
        color: "white",
        fontWeight: "bold",
    },
});
