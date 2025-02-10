import * as React from 'react';
import { Button,  } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

const NewExercise = () => {
    const navigation = useNavigation();

    return (
        <Button
        icon="plus"
        mode='contained'
        onPress={() => {
            console.log('Navigating to InputNewExercise...');
            navigation.navigate('InputNewExercise');
          }}
          style={styles.button}
          labelStyle={styles.label} 
          contentStyle={styles.content}
        >
          NEW EXERCISE
        </Button>
    )
};


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#21B4DE',
        width: 200,
        padding: 10,
    },
    label: {
        fontStyle: 'bold',
    }
});
    

export default NewExercise;