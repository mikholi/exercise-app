import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from '../styles/ExercisesScreenStyles';
import { useFonts } from "expo-font";

export default function ExercisesScreen () {
    return(
            <View style={styles.container}>
                <Text style={styles.text}>This is the exercises screen</Text>
            </View>
            )
}