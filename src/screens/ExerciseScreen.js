import React, { useContext, useState } from 'react';
import { View, ImageBackground,Text, } from 'react-native';
import { ExerciseContext } from '../components/ExerciseContext';
import ExercisesModal from '../components/ExercisesModal';
import CustomButton from '../components/Button';
import styles from '../styles/ExercisesScreenStyles';
import background from '../../assets/background.jpg';

const ExerciseScreen = () => {
    const { exercises } = useContext(ExerciseContext);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <ImageBackground source={background} style={styles.backgroundImage}></ImageBackground>
            <View style={styles.inputButtonContainer}></View>
            <CustomButton
                title="WORKOUTS" onPress={() => setModalVisible(true)} />
                <ExercisesModal
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    exercises={exercises}
                />
                <Text style={styles.textContainer}>Press the button to see all your stored exercises.</Text>
                <Text style={styles.textContainer}>In Profile can see all sum of all your workouts.</Text>
        </View>
    )
}



export default ExerciseScreen;
