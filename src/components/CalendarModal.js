import React, { useState } from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";

const CalendarModal = ({ visible, onClose }) => {
    const [selected, setSelected] = useState(""); 
    const [showNext, setShowNext] = useState(false); 
    const navigation = useNavigation(); 

    
    const handleDayPress = (day) => {
        setSelected(day.dateString);
        setShowNext(true); 
    };

    
    const handleNext = () => {
        navigation.navigate("SportSelection", { selectedDate: selected }); 
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Calendar
                        onDayPress={handleDayPress}
                        markedDates={{
                            [selected]: { selected: true, disableTouchEvent: true },
                        }}
                    />
                    {showNext && (
                        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                            <Text style={styles.buttonText}>Next</Text>
                        </TouchableOpacity>
                    )}
                    <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "90%",
    },
    nextButton: {
        marginTop: 20,
        marginLeft: 200,
        borderRadius: 20,
        padding: 10,
        backgroundColor: "#21B4DE",
        elevation: 2,
    },
    closeButton: {
        marginTop: 20,
        marginRight:200,
        borderRadius: 20,
        padding: 10,
        backgroundColor: "#FF6347",
        elevation: 2,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default CalendarModal;