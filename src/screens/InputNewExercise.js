import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from '../styles/InputNewExerciseStyles';
import { useFonts } from "expo-font";

export default function InputNewExercise () {
    return(
            <View style={styles.container}>
                <Text style={styles.header}>This is the new exercise screen</Text>
            </View>
        )
}