import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from '../styles/HomeScreenStyles';

export default function HomeScreen () {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>This is the home screen</Text>
        </View>
    )
}