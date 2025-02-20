import React from "react";
import { View, Text, ImageBackground, } from "react-native";
import styles from '../styles/ProfileScreenStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import background from '../../assets/background.jpg';

export default function ProfileScreen () {
    return(
            <View style={styles.container}>
                <ImageBackground source={background} style={styles.backgroundImage}></ImageBackground>
                <Text style={styles.header}>Urpo Urheilija</Text>
                <View style={styles.iconContainer}>
                    <AntDesign name="user" size={100} color="black" />
                </View>
            </View>
        )
}