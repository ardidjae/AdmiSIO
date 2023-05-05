import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import LoginScreen from './navigation/screens/LoginScreen';
import RegistrationScreen from './navigation/screens/RegistrationScreen';
import LegalNoticeScreen from './navigation/screens/LegalNoticeScreen';
import SearchScreen from './navigation/screens/SearchScreen';
// import RegistrationScreenPorteOuverte from './navigation/screens/RegistrationScreenPorteOuverte';
import ProfilScreen from './navigation/screens/ProfilScreen';
import SearchResultsScreen from './navigation/screens/SearchResultsScreen';
import { ScrollView } from 'react-native-gesture-handler';
import SLAMPage from './navigation/screens/SlamScreen';
import SISRPage from './navigation/screens/SisrScreen';
// import MainContainer from './navigation/screens/MainContainer';

const Stack = createStackNavigator();
const albums = [
  { id: 0, title: 'SLAM', image: require('./navigation/Image/slam.jpg'), description: 'Solutions Logicielles et Applications Métiers' },
  { id: 1, title: 'SISR', image: require('./navigation/Image/sisr.jpg'), description: 'Solutions d\'Infrastructure, Systèmes et Réseaux' },
  { id: 2, title: 'Salon Etudiant | Porte Ouverte', image: require('./navigation/Image/salonk.jpg'), description: 'Future Etudiant de BTS SIO' },
];

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Se connecter" component={LoginScreen} />
        <Stack.Screen name="S'inscrire" component={RegistrationScreen} />
        <Stack.Screen name="Réglement" component={LegalNoticeScreen} />
        <Stack.Screen name="Recherche" component={SearchScreen} />
        {/* <Stack.Screen name="Porte Ouverte" component={RegistrationScreenPorteOuverte} /> */}
        <Stack.Screen name="Profil" component={ProfilScreen} />
        <Stack.Screen name="SearchResults" component={SearchResultsScreen} />
        <Stack.Screen name="SLAM"component={SLAMPage}/>
        <Stack.Screen name="SISR"component={SISRPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image
      source={require('./navigation/Image/BTSSIO2.png')}
      style={styles.image}
      />
      <Text style={styles.subtitle}>Bienvenue dans l'application dédiée aux futurs étudiants du BTS SIO</Text>
      <Text style={styles.titleOption}>Découvrir</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
          <TouchableOpacity key={albums[0].id} style={{ width: '48%', marginRight: '2%', marginBottom: 15, borderWidth: 1,
            borderColor: '#DDD', borderRadius: 10, backgroundColor: '#DCDCD6',
            shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2, shadowRadius: 4 }} onPress={() => navigation.navigate('SLAM')}>
            <Image source={albums[0].image} style={{ width: '100%', height: 100,
              borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: "#000" }}>{albums[0].title}</Text>
              <Text style={{ fontSize: 14, marginTop: 5, color: "#000" }}>{albums[0].description}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity key={albums[1].id} style={{ width: '48%', marginBottom: 15, borderWidth: 1,
            borderColor: '#DDD', borderRadius: 10, backgroundColor: '#DCDCD6',
            shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2, shadowRadius: 4 }} onPress={() => navigation.navigate('SISR')}>
            <Image source={albums[1].image} style={{ width: '100%', height: 100,
              borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: "#000" }}>{albums[1].title}</Text>
              <Text style={{ fontSize: 14, marginTop: 5, color: "#000" }}>{albums[1].description}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.titleInscription}>Inscription</Text>
          <Text style={styles.description}>Venez découvrir le BTS SIO et rencontrer nos enseignants lors de nos portes ouvertes et salons étudiants ! Inscrivez-vous dès maintenant pour participer à ces événements passionnants.</Text>
          <TouchableOpacity key={albums[2].id} style={{ marginBottom: 15, borderWidth: 1,
            borderColor: '#DDD',borderRadius: 10, backgroundColor: '#DCDCD6',
            shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2, shadowRadius: 4 }} onPress={() => navigation.navigate('S\'inscrire')}>
            <Image source={albums[2].image} style={{ width: '100%', height: 110,
              borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: "#000" }}>{albums[2].title}</Text>
            </View>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Se connecter')}>
              <Text style={styles.buttonText}>Se connecter</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Recherche')}>
              <Text style={styles.buttonText}>Recherche</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profil')}>
              <Text style={styles.buttonText}>Profil</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText} onPress={() => navigation.navigate('Réglement')}>Réglement générales</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    right:'14%',
  },
  titleInscription: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#000',
  },
  titleOption:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingRight:683,//Table : 683 // Telephone : 300
    color:'#000',
  },
  description: {
    fontSize: 15,
    marginBottom: 20,
    color:'#000',
    textAlign:'justify',
  },
  image: {
    width: '100%',
    height: 160,
    margin:15,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'normal',
    textAlign: 'center',
    marginVertical: 20,
    paddingHorizontal: 30,
    color: '#000',
    lineHeight: 25,
  },
  album: {
    width: '90%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  albumImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  albumContent: {
    padding: 10,
  },
  albumTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    marginLeft: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    margin:20,
    padding: 10,
  },
  footerText: {
    color: '#000',
    fontSize: 15,
    textAlign: 'center',
    opacity: 0.6,
  },
});
