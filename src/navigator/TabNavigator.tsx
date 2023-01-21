import { View, Text, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TransactionsScreen from "../screens/main/TransactionsScreen";
import HomeScreen from "../screens/main/HomeScreen";
import CalendarScreen from "../screens/main/CalendarScreen";
import ChatScreen from "../screens/main/ChatScreen";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import NetworkScreen from "../screens/main/NetworkScreen";

export type TabStackParamList = {
    Home: undefined;
    Calendar: undefined;
    Chat: undefined;
    Transactions: undefined;
    Network: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    });

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: "#57eab2",
                tabBarInactiveTintColor: "#333333",
                tabBarShowLabel: false,
                tabBarStyle: { height: 100 },
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === "Home") {
                        return (
                            <Icon
                                name="home"
                                type="entypo"
                                color={focused ? "#57eab2" : "#333333"}
                                size={37}
                            />
                        );
                    }
                    if (route.name === "Calendar") {
                        return (
                            <Icon
                                name="calendar"
                                type="entypo"
                                color={focused ? "#57eab2" : "#333333"}
                                size={34}
                            />
                        );
                    }
                    if (route.name === "Chat") {
                        return (
                            <Icon
                                name="chat"
                                type="entypo"
                                color={focused ? "#57eab2" : "#333333"}
                                size={35}
                            />
                        );
                    }
                    if (route.name === "Network") {
                        return (
                            <Icon
                                name="users"
                                type="entypo"
                                color={focused ? "#57eab2" : "#333333"}
                                size={32}
                            />
                        );
                    }
                    if (route.name === "Transactions") {
                        return (
                            <Icon
                                name="credit"
                                type="entypo"
                                color={focused ? "#57eab2" : "#333333"}
                                size={36}
                            />
                        );
                    }
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Calendar" component={CalendarScreen} />
            <Tab.Screen name="Network" component={NetworkScreen} />
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Transactions" component={TransactionsScreen} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
