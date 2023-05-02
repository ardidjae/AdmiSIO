import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function SISRPage() {
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={require('../Image/sisrk.png')} />
      <Text style={styles.subtitle}>Qu'est-ce que l'option SISR ?</Text>
      <Text style={styles.description}>
        L'option SISR (Solutions d'Infrastructure, Systèmes et Réseaux) est une spécialisation proposée dans le BTS SIO (Services Informatiques aux Organisations). Cette option permet aux étudiants d'acquérir des compétences en gestion d'infrastructures et en administration de systèmes et réseaux.
      </Text>
      <Text style={styles.subtitle}>Les avantages de choisir l'option SISR</Text>
      <Text style={styles.description}>
        Les étudiants qui choisissent l'option SISR ont la possibilité de se spécialiser dans la gestion d'infrastructures et d'acquérir des compétences en administration de systèmes et réseaux. Ils peuvent également apprendre à gérer la sécurité des réseaux et des systèmes informatiques.
      </Text>
      <Text style={styles.subtitle}>Les perspectives de carrière pour les étudiants diplômés de l'option SISR</Text>
      <Text style={styles.description}>
        Les étudiants diplômés de l'option SISR peuvent travailler comme administrateurs de systèmes et réseaux, ingénieurs réseaux, techniciens support informatique, ou encore créer leur propre entreprise dans le domaine de l'infrastructure et des systèmes informatiques.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color:'#000',
    margin:5,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'justify',
    color:'#000',
    margin:5,
  },
});
