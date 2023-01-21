import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";

const TransactionsScreen = () => {
    const tw = useTailwind();
    return (
        <SafeAreaView>
            <Text style={tw("text-red-600 text-center")}>
                TransactionsScreen
            </Text>
        </SafeAreaView>
    );
};

export default TransactionsScreen;

const styles = StyleSheet.create({});
