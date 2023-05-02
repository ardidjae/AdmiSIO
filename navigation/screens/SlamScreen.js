import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function SLAMPage() {
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={require('../Image/slamk.png')} />
      <Text style={styles.subtitle}>Qu'est-ce que l'option SLAM ?</Text>
      <Text style={styles.description}>
        L'option SLAM (Solution Logicielle et Applications Métiers) est une spécialisation proposée dans le BTS SIO (Services Informatiques aux Organisations). Cette option permet aux étudiants d'acquérir des compétences en développement logiciel et en gestion de projet.
      </Text>
      <Text style={styles.subtitle}>Les avantages de choisir l'option SLAM</Text>
      <Text style={styles.description}>
        Les étudiants qui choisissent l'option SLAM ont la possibilité de se spécialiser dans le développement logiciel et de travailler sur des projets concrets. Ils peuvent également acquérir des compétences en gestion de projet et en communication, ce qui est essentiel dans le domaine de l'informatique.
      </Text>
      <Text style={styles.subtitle}>Les perspectives de carrière pour les étudiants diplômés de l'option SLAM</Text>
      <Text style={styles.description}>
        Les étudiants diplômés de l'option SLAM peuvent travailler comme développeurs logiciels, chefs de projet informatique, consultants en informatique, ou encore créer leur propre entreprise dans le domaine du développement logiciel.
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
