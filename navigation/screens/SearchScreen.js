import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import firebase from '../../config/firebase';

export default function SearchScreen() {
const [nom, setNom] = useState('');
const [etablissement, setEtablissement] = useState('');
const [choixOption, setChoixOption] = useState('');

const handleSearch = () => {
// Recherche d'étudiants dans la base de données Firebase
firebase.firestore()
.collection('Inscription')
.where('nom', '==', nom)
.where('etablissement', '==', etablissement)
.where('choixOption', '==', choixOption)
.get()
.then(querySnapshot => {
// Traitement des résultats de recherche
const results = [];
querySnapshot.forEach(doc => {
results.push(doc.data());
});
console.log('Search results:', results);
})
.catch(error => console.error(error));
};

return (
<View style={styles.container}>
<Text style={styles.title}>Recherche d'étudiants</Text>
<View style={styles.form}>
<TextInput
       style={styles.input}
       placeholder="Nom de l'étudiant"
       value={nom}
       onChangeText={setNom}
     />
<TextInput
       style={styles.input}
       placeholder="Nom de l'établissement"
       value={etablissement}
       onChangeText={setEtablissement}
     />
<TextInput
       style={styles.input}
       placeholder="choixOption (SLAM, SISR, NSP)"
       value={choixOption}
       onChangeText={setChoixOption}
     />
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
