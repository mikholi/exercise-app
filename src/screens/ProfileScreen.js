import React, { useContext } from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from '../styles/ProfileScreenStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import background from '../../assets/background.jpg';
import { ExerciseContext } from "../components/ExerciseContext";

export default function ProfileScreen () {
    const { exercises } = useContext(ExerciseContext);

    
    const totalDistance = exercises.reduce((sum, exercise) => sum + exercise.distance, 0);

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
                <Text style={styles.statsText}>TOTAL DISTANCE: {totalDistance} km</Text>
                {Object.keys(distanceBySport).map((sport) => (
                    <View key={sport} style={styles.sportsContainer}>
                        <Text style={styles.sportText}>{sport}</Text>
                        <Text style={styles.distanceText}>{distanceBySport[sport]} km</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}