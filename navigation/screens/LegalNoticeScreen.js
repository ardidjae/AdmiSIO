import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';

export default function LegalNoticeSreen(navigation) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Politique de confidentialité et de protection des données personnelles</Text>
      <Text style={styles.text}>Date de création : 2023</Text>
      <Text style={styles.text}>Adresse : 98 rte Ifs, 14000 Caen</Text>
      <Text style={styles.text}>Adresse e-mail : contact@adminsio.fr</Text>
      <Text style={styles.text}>Auteurs : Ardelaide DJAE et Arnaud LE COZANNET</Text>
      <Text style={styles.text}>L'application mobile admiSIO collecte des données personnelles des visiteurs lors des portes ouvertes ou pendant le salon de l'étudiant. Ces données sont stockées dans une base de données externalisée via Firebase et sont utilisées uniquement dans le cadre de la sélection des dossiers des futurs étudiants de la section BTS SIO du Lycée Jean Rostand.</Text>
      <Text style={styles.text}>Les visiteurs doivent donner leur consentement explicite et librement donné pour que leurs données personnelles soient collectées, utilisées et stockées. Les visiteurs ont le droit de demander l'accès à leurs données personnelles, de les corriger si elles sont inexactes et de les supprimer si elles ne sont plus nécessaires.</Text>
      <Text style={styles.text}>Les données personnelles des visiteurs sont stockées de manière sécurisée et ne sont conservées que le temps nécessaire à leur utilisation. Les enseignants de la section pourront consulter les candidats qui sont venus et inscrits pendant les portes ouvertes ou le salon de l'étudiant selon une année donnée. L'enseignant pourra trier les candidats selon leur nom, section ou établissement scolaire. Il pourra également supprimer l'inscription d'un ou plusieurs candidats.</Text>
      <Text style={styles.text}>Les auteurs de l'application mobile admiSIO s'engagent à respecter les règles du RGPD et à protéger les données personnelles des visiteurs. Si vous avez des questions ou des préoccupations concernant la protection de vos données personnelles.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: '#fff',
    },
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#000',
    },
    text: {
      fontSize: 16,
      marginBottom: 10,
      lineHeight: 24,
      color: '#000',
    },
  });
