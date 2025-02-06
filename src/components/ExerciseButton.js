import * as React from 'react';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const NewExercise = () => {
    const navigation = useNavigation();

    return (
        <Button
        icon="plus"
        mode='contained'
        onPress={() => {
            console.log("Navigating to InputNewExercise...");
            navigation.push("InputNewExercise");
        }}
        >
            New Exercise
        </Button>
    )
}
    

export default NewExercise;