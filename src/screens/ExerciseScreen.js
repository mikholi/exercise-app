import React, { useContext, useState } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/ExercisesScreenStyles';
import { ExerciseContext } from '../components/ExerciseContext';
import ExercisesModal from '../components/ExercisesModal';
import CustomButton from '../components/Button';

const ExerciseScreen = () => {
    const { exercises } = useContext(ExerciseContext);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.inputButtonContainer}>
                <CustomButton
                    title="Show Exercises" onPress={() => setModalVisible(true)} />
            </View>
            <ExercisesModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                exercises={exercises}
            />
            <Text>SUMMARY OF ALL EXERCISES</Text>
            <Text>Sum of all distances</Text> {/* Tämä pitää tehdä */}
            <Text>Sum of distances per sport</Text> {/* Tämä pitää tehdä */}
        </View>
    );
};

export default ExerciseScreen;