import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styles from '../styles/HomeScreenStyles';
import logo from '../../assets/logo.png';

export default function HomeScreen () {
    return(
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} resizeMode="contain" />
            <Text style={styles.text}>EXERCISE TRACKER</Text>
            
        </View>
    )
}