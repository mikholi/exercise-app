import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import styles from '../styles/InputNewExerciseStyles';
import { useNavigation } from "@react-navigation/native";
import CalendarModal from "../components/CalendarModal";
import CustomButton from "../components/Button";
export default function InputNewExercise() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        navigation.setOptions({ 
            title: 'New Exercise',
            headerBackTitle: 'Go Back'
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Press button to store new exercise</Text>
            <CustomButton 
                title="Select Date" 
                onPress={() => setModalVisible(true)} 
            />
            <CalendarModal 
                visible={modalVisible} 
                onClose={() => setModalVisible(false)} 
            />
            <Text>Here comes the most recent exercises</Text>
        </View>
    );
}