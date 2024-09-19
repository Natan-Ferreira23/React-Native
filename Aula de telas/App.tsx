import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/Home/Home'; // Tela inicial
import Noticias from './components/Noticias/Noticias'; // Tela de notícias
import Usuarios from './components/Usuarios/Usuarios';
import Cursos from './components/Cursos/Cursos';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer  >
        <Stack.Navigator initialRouteName="Home">        
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Noticias" component={Noticias} />
          <Stack.Screen name="Usuarios" component={Usuarios} />
          <Stack.Screen name="Cursos" component={Cursos} />
        </Stack.Navigator>
        
      </NavigationContainer>
    
  );
};
