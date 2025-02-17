import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet,} from 'react-native';
import { ExerciseContext } from '../components/ExerciseContext';
import ExercisesModal from '../components/ExercisesModal';
import CustomButton from '../components/Button';
import styles from '../styles/ExercisesScreenStyles';

const ExerciseScreen = () => {
    const { exercises } = useContext(ExerciseContext);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            
            <View style={styles.inputButtonContainer}></View>
            <CustomButton
                title="Show Exercises" onPress={() => setModalVisible(true)} />
                <ExercisesModal
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    exercises={exercises}
                />
        </View>
    )
}



export default ExerciseScreen;
