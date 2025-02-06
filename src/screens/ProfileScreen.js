import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from '../styles/ProfileScreenStyles';


export default function ProfileScreen () {
    return(
            <View style={styles.container}>
                <Text style={styles.header}>This is the Profile screen</Text>
            </View>
        )
}