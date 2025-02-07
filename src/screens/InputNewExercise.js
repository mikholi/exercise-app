
import React, {useEffect} from "react";
import { View, Text,Image, StyleSheet } from "react-native";
import styles from '../styles/InputNewExerciseStyles';
import running from '../../assets/running.png';
import swimming from '../../assets/swimming.png';
import bicycle from '../../assets/bicycle.png';
import { useNavigation } from "@react-navigation/native";

export default function InputNewExercise () {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
             title: 'New Exercise',
             headerBackTitle: 'Go Back'
         });
    }, [navigation]);
    return(
        <View style={styles.container}>
        <Text style={styles.header}>Choose one sport to store new exercise.</Text>
    </View>
    
    )
}