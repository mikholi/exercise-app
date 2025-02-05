import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import styles from '../styles/HomeScreenStyles';
import logo from '../../assets/logo2.png';
import { useFonts } from "expo-font";

export default function HomeScreen () {

    const [loaded] = useFonts({
        RobotoMedium: require('../fonts/Roboto-Medium.ttf'),

    });

    if (!loaded) {
        return null;
    }

    
    return(
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} resizeMode="contain" />
            <Text style={styles.heading}>EXERCISE TRACKER</Text>
            <View style={styles.inputButtonContainer}>
                <TouchableOpacity style={styles.inputButton}>
                    <Text style={styles.inputButtonText}>Save new exercise</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}