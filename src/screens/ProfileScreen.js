import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from '../styles/ProfileScreenStyles';
import { useFonts } from "expo-font";

export default function ProfileScreen () {
    return(
            <View style={styles.container}>
                <Text style={styles.header}>This is the Profile screen</Text>
            </View>
        )
}