import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet,} from 'react-native';
import { ExerciseContext } from '../components/ExerciseContext';
import ExercisesModal from '../components/ExercisesModal';

const ExerciseScreen = () => {
    const { exercises } = useContext(ExerciseContext);
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>EXERCISE LIST</Text>
            <Button title="Show Exercises" onPress={() => setModalVisible(true)} />
                <ExercisesModal
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    exercises={exercises}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default ExerciseScreen;
