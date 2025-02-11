import React, { useState } from 'react';
import { View, StyleSheet} from 'react-native';
import { Dropdown } from 'react-native-paper-dropdown';
import { Provider as PaperProvider } from 'react-native-paper';


const OPTIONS = [
  { label: 'Swimming', value: 'swimming' },
  { label: 'Running', value: 'running' },
  { label: 'Cycling', value: 'cycling' },
];

export default function App() {
  const [gender, setGender] = useState();

  return (
    <PaperProvider>
      <View style={styles.dropdown}>
        <Dropdown
          label="Sport"
          placeholder="Select Sport"
          options={OPTIONS}
          value={gender}
          onSelect={setGender}
        />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
    dropdown: {
        justifyContent: 'center',
        padding: 10,
        flex: 0.4,
        
    },
    });