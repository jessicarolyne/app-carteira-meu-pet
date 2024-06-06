import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginScreen from '../components/LoginScreen';

function HomeScreen() {
  return null; // Adicione seu componente de tela aqui
}

function SettingsScreen() {
  return null; // Adicione seu componente de tela aqui
}

const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="LoginScreen"
          activeColor="#f0edf6"
          inactiveColor="#3e2465"
          barStyle={{ backgroundColor: '#694fad' }}
        >
          <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <Icon name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen 
            name="Settings" 
            component={SettingsScreen} 
            options={{
              tabBarLabel: 'Settings',
              tabBarIcon: ({ color }) => (
                <Icon name="cog" color={color} size={26} />
              ),
            }}
          />
           <Tab.Screen 
            name="LoginScreen" 
            component={LoginScreen} 
            options={{
              tabBarLabel: 'Perfil',
              tabBarIcon: ({ color }) => (
                <Icon name="account-circle-outline" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default AppNavigator;