import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './navigation/screens/LoginScreen';
import RegistrationScreen from './navigation/screens/RegistrationScreen';
import LegalNoticeScreen from './navigation/screens/LegalNoticeScreen';
import SearchScreen from './navigation/screens/SearchScreen';
import RegistrationScreenPorteOuverte from './navigation/screens/RegistrationScreenPorteOuverte';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Salon Etudiant" component={RegistrationScreen} />
        <Stack.Screen name="Réglement" component={LegalNoticeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Porte Ouverte" component={RegistrationScreenPorteOuverte} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Connexion</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Salon Etudiant')}>
        <Text style={styles.buttonText}>Inscription au Salon Etudiant</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Porte Ouverte')}>
        <Text style={styles.buttonText}>Inscription au Porte Ouvertes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Réglement')}>
        <Text style={styles.buttonText}>Réglement géneral</Text>
      </TouchableOpacity>
      {/* Autres bouton recherche eleves */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Search')}>
        <Text style={styles.buttonText}>Recherche Etudiant</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#1E88E5',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
