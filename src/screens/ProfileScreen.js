import React, { useContext } from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from '../styles/ProfileScreenStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import background from '../../assets/background.jpg';
import { ExerciseContext } from "../components/ExerciseContext";

export default function ProfileScreen () {
    const { exercises } = useContext(ExerciseContext);

    // Calculate the total distance
    const totalDistance = exercises.reduce((sum, exercise) => sum + exercise.distance, 0);

    // Calculate the distance for each sport type
    const distanceBySport = exercises.reduce((acc, exercise) => {
        if (!acc[exercise.sport]) {
            acc[exercise.sport] = 0;
        }
        acc[exercise.sport] += exercise.distance;
        return acc;
    }, {});

    return(
        <View style={styles.container}>
            <ImageBackground source={background} style={styles.backgroundImage}></ImageBackground>
            <Text style={styles.header}>Urpo Urheilija</Text>
            <View style={styles.iconContainer}>
                <AntDesign name="user" size={100} color="black" />
            </View>
            <View style={styles.statsContainer}>
                <Text style={styles.statsText}>Total Distance: {totalDistance} km</Text>
                {Object.keys(distanceBySport).map((sport) => (
                    <Text key={sport} style={styles.statsText}>
                        {sport} Distance: {distanceBySport[sport]} km
                    </Text>
                ))}
            </View>
        </View>
    )
}