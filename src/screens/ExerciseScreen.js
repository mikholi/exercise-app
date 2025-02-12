import React, {useContext} from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import { ExerciseContext } from '../components/ExerciseContext';

const ExerciseScreen = () => {
    const { exercises} = useContext(ExerciseContext);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Exercise List</Text>
            <FlatList
                data={exercises}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>Date: {item.date}</Text>
                        <Text>Sport: {item.sport}</Text>
                        <Text>Distance: {item.distance} km</Text>
                        <Text>Time: {item.time} minutes</Text>
                    </View>
                )}
            />
        </View>
    );
};

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
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
});

export default ExerciseScreen;
