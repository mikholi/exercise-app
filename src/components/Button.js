import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress, buttonStyle, labelStyle, contentStyle, }) => {
    return (
        <Button
            mode='contained'
            onPress={onPress}
            style={[styles.button, buttonStyle]}
            labelStyle={[styles.label, labelStyle]}
            contentStyle={[styles.content, contentStyle]}
        >
            {title}
        </Button>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#03A9F4',
        width: 200,
        padding: 10,
        borderWidth: 1,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    
});

export default CustomButton;