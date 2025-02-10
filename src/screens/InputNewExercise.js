import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import styles from '../styles/InputNewExerciseStyles';
import { useNavigation } from "@react-navigation/native";
import CalendarModal from "../components/CalendarModal";

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
            <Text style={styles.header}>Choose one sport to store new exercise.</Text>
            <Button title="Open Calendar" onPress={() => setModalVisible(true)} />
            <CalendarModal 
                visible={modalVisible} 
                onClose={() => setModalVisible(false)} 
            />
        </View>
    );
}