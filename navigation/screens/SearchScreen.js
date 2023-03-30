import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const SearchScreen = () => {
  const [type, setType] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rechercher des étudiants</Text>
      <TextInput
        style={styles.input}
        placeholder="Type de forum (Porte Ouverte / Salon Etudiant)"
        value={type}
        onChangeText={setType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  noResultsText: {
    fontSize: 18,
    fontStyle: 'italic',
  },
  resultContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  resultText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default SearchScreen;
