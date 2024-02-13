import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, alert, Alert } from 'react-native';
// import { firebase } from '@react-native-firebase/auth';
import firebase from '../../config/firebase';


export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // état pour activer/désactiver le bouton Se connecter

  // Fonction pour vérifier si les champs email et mot de passe sont remplis
  const checkInputs = () => {
    if (email.trim() !== '' && password.trim() !== '') {
      setIsButtonDisabled(false); // activer le bouton si les champs sont remplis
    } else {
      setIsButtonDisabled(true); // désactiver le bouton si un champ est vide
    }
  };

  useEffect(() => {
    checkInputs(); // Vérifier à chaque changement des champs email et mot de passe
  }, [email, password])

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    });

    return unsubscribe;
  }, );

  const handleSignUp = () => {
    // Vérifier d'abord si l'utilisateur existe déjà avec cette adresse e-mail
    firebase
    .auth()
    .fetchSignInMethodsForEmail(email)
    .then(signInMethods => {
      if (signInMethods && signInMethods.length > 0) {
        // L'utilisateur existe déjà, afficher une alerte
        Alert.alert(
          'Adresse e-mail déjà utilisée',
          'Un compte avec cette adresse e-mail existe déjà. Veuillez utiliser une autre adresse e-mail.'
        );
      } else {
        // L'utilisateur n'existe pas encore, créer un nouveau compte
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered with:', user.email);
          })
          .catch(error => alert(error.message));
      }
    })
    .catch(error => alert(error.message));
  };

  const handleLogin = () => {
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message));
  };

  const handleResetPassword = () => {
    firebase.auth().sendPasswordResetEmail(email);
    console.log('Un email de réinitialisation a été envoyé à votre adresse email');
    Alert.alert('Email envoyé', 'Un email de réinitialisation a été envoyé à votre adresse email');
      // .then(() => {
      //   alert('Un email de réinitialisation a été envoyé à votre adresse email.');
      // })
      // .catch((error) => {
      //   alert('Cette adresse email n\'est pas associée à un compte Admisio ou une erreur s\'est produite');
      // });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={text => {
            setEmail(text);
            checkInputs(); // Vérifier à chaque changement de texte
          }}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          value={password}
          onChangeText={text => {
            setPassword(text);
            checkInputs(); // Vérifier à chaque changement de texte
          }}
          secureTextEntry
          autoCapitalize="none"
          autoCompleteType="password"
          textContentType="password"
          placeholderTextColor="#000"
        />
        <TouchableOpacity
          style={[styles.button, styles.connectButton, isButtonDisabled && styles.disabledButton]}
          onPress={handleLogin}
          disabled={isButtonDisabled}
        >
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.signUpButton, isButtonDisabled && styles.disabledButton]}
          onPress={handleSignUp}
          disabled={isButtonDisabled}
        >
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            styles.forgotPasswordButton,
            email.trim() === '' && styles.disabledButton // Désactiver le bouton si le champ email est vide
          ]}
          onPress={handleResetPassword}
          disabled={email.trim() === ''}
        >
          <Text style={styles.buttonText}>Mot de passe oublié ?</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
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
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  connectButton: {
    backgroundColor: '#007AFF', // couleur pour le bouton Se connecter
  },
  signUpButton: {
    backgroundColor: '#FFA500', // couleur pour le bouton S'inscrire
  },
  forgotPasswordButton: {
    backgroundColor: '#FF6347', // couleur pour le bouton Mot de passe oublié
  },
  disabledButton: {
    backgroundColor: 'rgba(169, 169, 169, 0.5)', // couleur pour le bouton désactivé
  },
});
