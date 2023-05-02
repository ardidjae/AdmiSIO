import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export default function SearchResults({ route }) {
  const { results } = route.params;
  const [updatedResults, setUpdatedResults] = useState(results.sort((a, b) => a.nom.localeCompare(b.nom)));
  const numResults = updatedResults.length;

  const removeResult = (itemToRemove) => {
    const updated = updatedResults.filter(item => item !== itemToRemove);
    setUpdatedResults(updated);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Résultats de recherche</Text>
      <Text style={styles.numResults}>{numResults} personne(s) inscrite(s)</Text>
      {updatedResults.length > 0 ? (
        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.cell}>Nom</Text>
            <Text style={styles.cell}>Prénom</Text>
            <Text style={styles.cell}>Type</Text>
            <Text style={styles.cell}>Année</Text>
            <Text style={styles.cell}>Supprimer</Text>
          </View>
          {updatedResults.map((item, index) => (
            <View style={styles.row} key={index}>
              <Text style={styles.cell}>{item.nom}</Text>
              <Text style={styles.cell}>{item.prenom}</Text>
              <Text style={styles.cell}>{item.type}</Text>
              <Text style={styles.cell}>{item.annee}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => removeResult(item)}
              >
                <Text style={styles.buttonText}>Supprimer</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ) : (
        <Text style={styles.noResults}>Aucun résultat trouvé</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#000',
  },
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    flex: 1,
    fontSize: 16,
  },
  noResults: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
