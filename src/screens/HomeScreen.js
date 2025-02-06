import React from "react";
import { View, Text, Image } from "react-native";
import styles from '../styles/HomeScreenStyles'; // Ensure this file contains the necessary styles
import { useNavigation } from "@react-navigation/native";
import ExerciseButton from "../components/ExerciseButton"; // Renamed for clarity

export default function HomeScreen () {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo2.png')} style={styles.logo} resizeMode="contain" />
            <Text style={styles.heading}>EXERCISE TRACKER</Text>
            <View style={styles.inputButtonContainer}>
            <ExerciseButton 
                title="SAVE NEW EXERCISE"
                onPress={() => {
                    console.log("Navigating to InputNewExercise...");
                    navigation.push("InputNewExercise");
        }}
            />

            </View>
        </View>
    );
}
