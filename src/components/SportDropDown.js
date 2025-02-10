import React, { useState } from "react";
import { View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import DropDown from "react-native-paper-dropdown"; // Ensure correct import

const OPTIONS = [
    { label: 'Swimming', value: 'swimming' },
    { label: 'Running', value: 'running' },
    { label: 'Cycling', value: 'cycling' },
];

const SportDropDown = () => {
    const [exercise, setExercise] = useState("");
    const [showDropDown, setShowDropDown] = useState(false);

    return (
        <PaperProvider>
            <View style={{ margin: 16 }}>
                <DropDown
                    label="Select a sport"
                    mode="outlined"
                    visible={showDropDown}
                    showDropDown={() => setShowDropDown(true)}
                    onDismiss={() => setShowDropDown(false)}
                    value={exercise}
                    setValue={setExercise}
                    list={OPTIONS}  // ✅ Ensure this is not undefined
                />
            </View>
        </PaperProvider>
    );
};

export default SportDropDown;
