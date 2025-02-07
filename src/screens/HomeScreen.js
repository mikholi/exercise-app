import React from "react";
import { View, Text, Image } from "react-native";
import styles from '../styles/HomeScreenStyles'; 
import { useNavigation } from "@react-navigation/native";
import ExerciseButton from "../components/ExerciseButton"; 

export default function HomeScreen () {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo2.png')} style={styles.logo} resizeMode="contain" />
            <Text style={styles.heading}>EXERCISE TRACKER</Text>
            <View style={styles.inputButtonContainer}>
            <ExerciseButton 
                title="NEW EXERCISE"
                onPress={() => {
                    navigation.push("InputNewExercise");
        }}
            />

            </View>
        </View>
    );
}
