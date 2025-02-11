import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress, buttonStyle, labelStyle, contentStyle }) => {
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
        backgroundColor: '#21B4DE',
        width: 200,
        padding: 10,
    },
    label: {
        fontWeight: 'bold',
    },
    
});

export default CustomButton;