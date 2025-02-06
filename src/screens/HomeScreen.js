import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import styles from '../styles/HomeScreenStyles';
import logo from '../../assets/logo2.png';
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { Title } from "react-native-paper";



export default function HomeScreen () {

    const navigation = useNavigation();

    

    
    return (
        <View style={styles.container}>
            
            <Image source={logo} style={styles.logo} resizeMode="contain" />
            <Text style={styles.heading}>EXERCISE TRACKER</Text>
            <View style={styles.inputButtonContainer}>
            <TouchableOpacity 
                    style={styles.inputButton}
                    onPress={() => navigation.navigate("InputNewExercise")}
                >
                    <Text style={styles.inputButtonText}>SAVE NEW EXERCISE</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}