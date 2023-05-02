import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import firebase from '../../config/firebase';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

export default function SearchScreen() {
  const [type, setType] = useState(''); // Nouveau state pour le type
  const [annee, setAnnee] = useState(''); // Nouveau state pour l'année de l'inscription

  const navigation = useNavigation();

  const handleSearch = () => {
    // Recherche d'étudiants dans la base de données Firebase
    firebase.firestore()
      .collection('Inscription')
      .where('type', '==', type) // Ajout de la condition pour le type de l'événement
      .where('annee', '==', annee) // Ajout de la condition pour l'année de l'inscription
      .get()
      .then(querySnapshot => {
        // Traitement des résultats de recherche
        const results = [];
        querySnapshot.forEach(doc => {
          results.push(doc.data());
        });
        console.log('Search results:', results);
        const filteredResults = results.filter(result => result.type === type && result.annee === annee); // Filtrer les résultats en fonction du type d'événement sélectionné
        navigation.navigate('SearchResults', { results : filteredResults});
      })
      .catch(error => console.error(error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recherche d'étudiants</Text>
      <View style={styles.form}>
        <Picker
          style={styles.input}
          selectedValue={type}
          onValueChange={(itemValue, itemIndex) => setType(itemValue)}
        >
          <Picker.Item label="Salon Etudiant" value="Salon Etudiant" />
          <Picker.Item label="Porte Ouverte" value="Porte Ouverte" />
        </Picker>
        <Picker
          style={styles.input}
          selectedValue={annee}
          onValueChange={(itemValue, itemIndex) => setAnnee(itemValue)}
        >
          <Picker.Item label="2022" value="2022" />
          <Picker.Item label="2023" value="2023" />
        </Picker>
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Rechercher</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#F5F5F5',
},
title: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 24,
color:'#000',
},
form: {
width: '80%',
},
input: {
backgroundColor: '#FFFFFF',
borderRadius: 8,
fontSize: 16,
paddingVertical: 12,
paddingHorizontal: 16,
marginBottom: 16,
},
button: {
backgroundColor: '#007AFF',
borderRadius: 8,
paddingVertical: 12,
paddingHorizontal: 16,
alignItems: 'center',
marginBottom: 15,
},
buttonText: {
color: '#FFFFFF',
fontWeight: 'bold',
fontSize: 16,
},
});
