import React from "react";
import { View, Text, Image,  } from "react-native";
import styles from '../styles/HomeScreenStyles'; 
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/Button";

export default function HomeScreen () {
    

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo2.png')} style={styles.logo} resizeMode="contain" />
            <Text style={styles.heading}>WORKOUT DIARY</Text>
            <View style={styles.inputButtonContainer}>
            <CustomButton
                title="NEW EXERCISE"   
                onPress={() => navigation.navigate("InputNewExercise")}
                
            />

            </View>
        </View>
    );
}
