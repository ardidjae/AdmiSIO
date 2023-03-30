import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';
// import firestore from '../../config/firebase';

// Utilisez Firebase dans votre code ici


export default function RegistrationScreen({ navigation }) {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [bac, setBac] = useState('');
  const [etablissement, setEtablissement] = useState('');
  const [choixOption, setChoixOption] = useState('');

  const handleRegistration = async () => {
    try {
      const response = await firestore()
        .collection('Inscription')
        .add({
          nom,
          prenom,
          email,
          bac,
          etablissement,
          choixOption,
        });
      console.log('Utilisateur enregistré avec succès!', response);
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Salon Etudiant</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={nom}
          onChangeText={setNom}
          placeholder="Nom"
        />
        <TextInput
          style={styles.input}
          value={prenom}
          onChangeText={setPrenom}
          placeholder="Prénom"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          value={bac}
          onChangeText={setBac}
          placeholder="Bac"
        />
        <TextInput
          style={styles.input}
          value={etablissement}
          onChangeText={setEtablissement}
          placeholder="Établissement"
        />
        <TextInput
          style={styles.input}
          value={choixOption}
          onChangeText={setChoixOption}
          placeholder="Choix option"
        />
        <TouchableOpacity style={styles.button} onPress={handleRegistration}>
          <Text style={styles.buttonText}>S'inscrire</Text>
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
  checkbox: {
    alignSelf: 'center',
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
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
