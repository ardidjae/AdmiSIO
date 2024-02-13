import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Picker } from '@react-native-picker/picker';
// import firestore from '../../config/firebase';


export default function RegistrationScreen({ navigation }) {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [bac, setBac] = useState('');
  const [etablissement, setEtablissement] = useState('');
  const [choixOption, setChoixOption] = useState('');
  const [type, setType] = useState('Salon Etudiant');
  const [annee, setAnnee] = useState(new Date().getFullYear().toString()); // Champ année invisible
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // état pour activer/désactiver le bouton S'inscrire

  // Fonction pour vérifier si tous les champs obligatoires sont remplis
  const checkInputs = () => {
    if (nom.trim() !== '' && prenom.trim() !== '' && email.trim() !== '' && bac.trim() !== '' && etablissement.trim() !== '') {
      setIsButtonDisabled(false); // activer le bouton si tous les champs obligatoires sont remplis
    } else {
      setIsButtonDisabled(true); // désactiver le bouton si au moins un champ est vide
    }
  };

  // Mettre à jour l'état isButtonDisabled à chaque changement dans les champs de saisie
  const handleInputChange = (field, value) => {
    switch (field) {
      case 'nom':
        setNom(value);
        break;
      case 'prenom':
        setPrenom(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'bac':
        setBac(value);
        break;
      case 'etablissement':
        setEtablissement(value);
        break;
      default:
        break;
    }
    checkInputs(); // Vérifier à chaque changement de texte
  };

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
          type,
          annee,
        });
      console.log('Utilisateur enregistré avec succès!', response);
      Alert.alert('Inscription réussie', 'Votre inscription a été enregistrée avec succès.');
      setNom('');
      setPrenom('');
      setEmail('');
      setBac('');
      setEtablissement('');
      setChoixOption('');
      setType('');
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
    }
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Formulaire d'inscription</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={nom}
          onChangeText={(text) => handleInputChange('nom', text)}
          placeholder="Nom"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          value={prenom}
          onChangeText={(text) => handleInputChange('prenom', text)}
          placeholder="Prénom"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => handleInputChange('email', text)}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          value={bac}
          onChangeText={(text) => handleInputChange('bac', text)}
          placeholder="Bac"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          value={etablissement}
          onChangeText={(text) => handleInputChange('etablissement', text)}
          placeholder="Établissement"
          placeholderTextColor="#000"
        />
        <Text style={styles.description}>Quelle option préférez-vous ?</Text>
        <Picker
          selectedValue={choixOption}
          onValueChange={(itemValue) => setChoixOption(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="SLAM" value="SLAM" />
          <Picker.Item label="SISR" value="SISR" />
          <Picker.Item label="NSP" value="NSP" />
        </Picker>
        <Text style={styles.description}>Lieu de rencontre</Text>
        <Picker
          selectedValue={type}
          onValueChange={(itemValue) => setType(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="Salon Etudiant" value="Salon Etudiant" />
          <Picker.Item label="Porte Ouverte" value="Porte Ouverte" />
        </Picker>

        <TouchableOpacity
          style={[styles.button, isButtonDisabled && styles.disabledButton]}
          onPress={handleRegistration}
          disabled={isButtonDisabled}
        >
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    margin:5,
    padding:5,
  },
  checkbox: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop:15,
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
    marginTop:10,
    marginBottom:50,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  disabledButton: {
    backgroundColor: 'rgba(169, 169, 169, 0.5)', // couleur pour le bouton désactivé
  },
});
