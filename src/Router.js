import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

//screens
import HomeScreen from "./screens/Home";
import Campaigns from "./screens/Campaigns";
import ConfirmModal from "./screens/ConfirmModal";
import PaymentStatement from "./screens/PaymentStatement";

const Home = createStackNavigator();

const HomeStack = () => {
    return (
        <Home.Navigator
            initialRouteName="Home"
            mode="modal"
            screenOptions={({ route, navigation }) => ({
                headerMode: "header",
                headerLeft: () => (
                    <TouchableOpacity>
                        <Entypo
                            name="cross"
                            style={{ marginLeft: 10 }}
                            size={35}
                            color="white"
                        />
                    </TouchableOpacity>
                ),

                headerRight: () => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Campaigns")}
                    >
                        <View style={{ alignItems: "center" }}>
                            <Text
                                style={{
                                    color: "#fff",
                                    fontWeight: "bold",
                                    fontSize: 20,
                                    marginRight: 12,
                                }}
                            >
                                +
                            </Text>
                            <Text
                                style={{
                                    color: "#fff",
                                    fontWeight: "bold",
                                    marginRight: 12,
                                }}
                            >
                                KAMPANYALAR
                            </Text>
                        </View>
                    </TouchableOpacity>
                ),
                headerTitleStyle: {
                    textAlign: "center",
                },
                headerStyle: { backgroundColor: "#FF5546", height: 100 },
                headerTintColor: "#fff",
                title: "",
            })}
        >
            <Home.Screen name="Home" component={HomeScreen} />

            <Home.Screen
                name="Campaigns"
                component={Campaigns}
                options={{
                    animationEnabled: true,
                    cardStyle: { backgroundColor: "rgba(0, 0, 0, 0.15)" },
                    cardOverlayEnabled: true,
                    headerShown: false,
                    cardStyleInterpolator: ({ current: { progress } }) => {
                        return {
                            cardStyle: {
                                opacity: progress.interpolate({
                                    inputRange: [0, 0.5, 0.9, 1],
                                    outputRange: [0, 0.25, 0.7, 1],
                                }),
                            },
                            overlayStyle: {
                                opacity: progress.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 0.5],
                                    extrapolate: "clamp",
                                }),
                            },
                        };
                    },
                }}
            />

            <Home.Screen
                name="ConfirmModal"
                component={ConfirmModal}
                options={{
                    animationEnabled: true,
                    cardStyle: { backgroundColor: "rgba(0, 0, 0, 0.15)" },
                    cardOverlayEnabled: true,
                    headerShown: false,
                    cardStyleInterpolator: ({ current: { progress } }) => {
                        return {
                            cardStyle: {
                                opacity: progress.interpolate({
                                    inputRange: [0, 0.5, 0.9, 1],
                                    outputRange: [0, 0.25, 0.7, 1],
                                }),
                            },
                            overlayStyle: {
                                opacity: progress.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 0.5],
                                    extrapolate: "clamp",
                                }),
                            },
                        };
                    },
                }}
            />
            
            <Home.Screen
                name="PaymentStatement"
                component={PaymentStatement}
                options={{
                    headerShown: false,
                }}
            />
        </Home.Navigator>
    );
};

export default () => {
    return (
        <NavigationContainer>
            <HomeStack />
        </NavigationContainer>
    );
};
