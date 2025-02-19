import React from "react";
import { View, Text, StyleSheet, Modal,  ScrollView, Image } from "react-native";
import CustomButton from '../components/Button';
import styles from '../styles/ExerciseModalStyles';

const ExercisesModal = ({ visible, onClose, exercises }) => {
    const getIcon = (sport) => {
        console.log(`icon for sport: ${sport}`);
        switch (sport) {
            case 'Running':
                return require('../../assets/running.png');
            case 'Swimming':
                return require('../../assets/swimming.png');
            case 'Cycling':
                return require('../../assets/bicycle.png');
            default:
                null;
                
        }
    };

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <ScrollView contentContainerStyle={styles.scrollViewContent}>
                        {exercises.map((item, index) => (
                            <View key={index} style={styles.item}>
                                <View style={styles.iconContainer}>
                                <Image source={getIcon(item.sport)} style={styles.icon} />
                                </View>
                                <View style={styles.textContainer}>
                                    <Text>Date: {item.date}</Text>
                                    <Text>Sport: {item.sport}</Text>
                                    <Text>Distance: {item.distance}</Text>
                                    <Text>Time: {item.time}</Text>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                    <View style={styles.buttonContainer}>
                    <CustomButton 
                    title="Close" onPress={onClose} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};



export default ExercisesModal;


