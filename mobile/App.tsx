import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Navigation from './src/navigation/Navigator';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import {styled} from 'nativewind';

const App: React.FC = () => {
  return <Navigation />
};

export default App;