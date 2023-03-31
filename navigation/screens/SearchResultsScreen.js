import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function SearchResults({ route }) {
  const { results } = route.params;

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.nom} {item.prenom}</Text>
      <Text style={styles.info}>Type: {item.type}</Text>
      <Text style={styles.info}>Année d'inscription: {item.annee}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Résultats de recherche</Text>
      {results.length > 0 ? (
        <FlatList
          data={results}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text style={styles.noResults}>Aucun résultat trouvé</Text>
      )}
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
    padding: 20,
  },
  item: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  info: {
    fontSize: 14,
    color: '#666666',
  },
  noResults: {
    fontSize: 16,
    color: '#666666',
  },
});
