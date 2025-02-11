import React, { useState } from "react";
import { Modal, View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";
import bicycle from "../../assets/bicycle.png";
import running from "../../assets/running.png";
import swimming from "../../assets/swimming.png";

const CalendarModal = ({ visible, onClose }) => {
    const [selected, setSelected] = useState(""); 
    const [showNext, setShowNext] = useState(false); 
    const [showSportSelection, setShowSportSelection] = useState(false); 
    const navigation = useNavigation(); 

    const handleDayPress = (day) => {
        setSelected(day.dateString);
        setShowNext(true); 
    };

    const handleNext = () => {
        setShowSportSelection(true); 
    };

    const handleSportSelect = (sport) => {
        navigation.navigate("SportDetails", { selectedDate: selected, sport }); 
        onClose(); 
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
                    {!showSportSelection ? (
                        <>
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
                        </>
                    ) : (
                        <>
                            <Text style={styles.header}>Select a Sport</Text>
                            <TouchableOpacity style={styles.sportButton} onPress={() => handleSportSelect('Swimming')}>
                                <Image source={swimming} style={{ width: 50, height: 50 }} />
                                <Text style={styles.buttonText}>Swimming</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.sportButton} onPress={() => handleSportSelect('Running')}>
                                <Image source={running} style={{ width: 50, height: 50 }} />
                                <Text style={styles.buttonText}>Running</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.sportButton} onPress={() => handleSportSelect('Cycling')}>
                                <Image source={bicycle} style={{ width: 50, height: 50 }} />
                                <Text style={styles.buttonText}>Cycling</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                                <Text style={styles.buttonText}>Close</Text>
                            </TouchableOpacity>
                        </>
                    )}
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
    header: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    nextButton: {
        marginTop: 20,
        borderRadius: 30,
        width: 100,
        padding: 10,
        backgroundColor: "#21B4DE",
        elevation: 2,
    },
    closeButton: {
        marginTop: 20,
        width: 100,
        borderRadius: 20,
        padding: 10,
        backgroundColor: "#FF6347",
        elevation: 2,
    },
    sportButton: {
        marginTop: 10,
        borderRadius: 20,
        padding: 10,
        backgroundColor: "#21B4DE",
        elevation: 2,
        width: "100%",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default CalendarModal;