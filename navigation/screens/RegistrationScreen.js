import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Picker } from '@react-native-picker/picker';
// import firestore from '../../config/firebase';

// Utilisez Firebase dans votre code ici


export default function RegistrationScreen({ navigation }) {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [bac, setBac] = useState('');
  const [etablissement, setEtablissement] = useState('');
  const [choixOption, setChoixOption] = useState('');
  const [type, setType] = useState('Salon Etudiant');
  const [annee, setAnnee] = useState(new Date().getFullYear().toString()); // Champ année invisible

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
          onChangeText={setNom}
          placeholder="Nom"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          value={prenom}
          onChangeText={setPrenom}
          placeholder="Prénom"
          placeholderTextColor="#000"
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
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          value={bac}
          onChangeText={setBac}
          placeholder="Bac"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          value={etablissement}
          onChangeText={setEtablissement}
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
        <Text style={styles.description}>Où souhaitez-vous nous rencontrer ?</Text>
        <Picker
          selectedValue={type}
          onValueChange={(itemValue) => setType(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="Salon Etudiant" value="Salon Etudiant" />
          <Picker.Item label="Porte Ouverte" value="Porte Ouverte" />
        </Picker>

        <TouchableOpacity style={styles.button} onPress={handleRegistration}>
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
});
