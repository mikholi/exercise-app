import React from 'react';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import Navigation from './src/navigation/Navigation';

export default function App() {
  const [loaded] = useFonts({
    RobotoMedium: require('./src/fonts/Roboto-Medium.ttf'),
  });

  if (!loaded) {
    return <Text>Loading...</Text>;
  }

  return <Navigation />;
}