import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { auth } from '../../config/firebase';

export default function ProfileScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [signupDate, setSignupDate] = useState(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        setEmail(user.email);
        setIsSignedIn(true);
        setSignupDate(user.metadata.creationTime);
      } else {
        setIsSignedIn(false);
        setSignupDate(null);
      }
    });

    return unsubscribe;
  }, []);

  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => {
        navigation.replace("Home");
      })
      .catch(error => console.log(error.message));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil</Text>
      {isSignedIn ? (
        <View style={styles.info}>
          <View style={styles.emailContainer}>
            <Text style={[styles.value, {textAlign: 'center'}]}>{email}</Text>
            {signupDate && (
              <Text style={styles.signupDate}>
                Membre depuis : {new Date(signupDate).toLocaleDateString('fr-FR', {day: 'numeric', month: 'numeric', year: 'numeric'})}
              </Text>
            )}
          </View>
        </View>
      ) : (
        <View style={styles.info}>
          <Text style={styles.value}>Aucun utilisateur connecté</Text>
        </View>
      )}
      <TouchableOpacity
        style={[styles.button, !isSignedIn && styles.disabledButton]}
        onPress={handleLogout}
        disabled={!isSignedIn}
      >
        <Text style={styles.buttonText}>Se déconnecter</Text>
      </TouchableOpacity>
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
    color:'#000',
  },
  info: {
    marginBottom: 24,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  value: {
    fontSize: 16,
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
  disabledButton: {
    opacity: 0.5,
  },
});
