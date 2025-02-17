import React from "react";
import { View, Text, StyleSheet, Modal, Button, ScrollView, Image } from "react-native";
import CustomButton from '../components/Button';

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
                                <Image source={getIcon(item.sport)} style={styles.icon} />
                                <View style={styles.textContainer}>
                                    <Text>Date: {item.date}</Text>
                                    <Text>Sport: {item.sport}</Text>
                                    <Text>Distance: {item.distance}</Text>
                                    <Text>Time: {item.minutes}</Text>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                    <CustomButton 
                    title="Close" onPress={onClose} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '90%',
        maxHeight: '80%',
        justifyContent: 'space-between',
    },
    scrollViewContent: {
        paddingBottom: 20,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#21B4DE',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    },
    icon: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
});

export default ExercisesModal;


