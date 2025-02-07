import * as React from 'react';
import { Button,  } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';


const NewExercise = ({ onPress, title }) => (
    <Button
      icon="plus"
      mode="contained"
      onPress={onPress}
      contentStyle={styles.buttonContent}
      labelStyle={styles.label}
    >
      {title}
    </Button>
  );


const styles = StyleSheet.create({
    buttonContent: {
        backgroundColor: '#21B4DE',
        width: 250,
        padding: 10,
    },
    label: {
        
        fontSize: 20,
        fontFamily: 'RobotoMedium',
    },
    
});
    

export default NewExercise;