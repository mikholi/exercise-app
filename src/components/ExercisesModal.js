import React from "react";
import {View, Text, StyleSheet, Modal, Button, ScrollView} from "react-native";

const ExercisesModal = ({visible, onClose, exercises}) => {
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
                            <Text>Date: {item.date}</Text>
                            <Text>Sport: {item.sport}</Text>
                            <Text>Distance: {item.distance}</Text>
                            <Text>Time: {item.minutes}</Text>
                        </View>
                    ))}
                    </ScrollView>
                    <Button title="Close" onPress={onClose} />
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
        backgroundColor: '#21B4DE',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    }
})

export default ExercisesModal;