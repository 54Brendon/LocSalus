import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';

function Permicao() {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [locationPermissionGranted, setLocationPermissionGranted] = useState(false);
  const [continueDisabled, setContinueDisabled] = useState(true);
  const navigation = useNavigation();

  const handleContinue = async () => {
    if (!locationPermissionGranted || !termsAccepted) {
      Alert.alert('Permissões Necessárias', 'Por favor, aceite os termos e conceda permissão de localização para continuar.');
      return;
    }

    navigation.navigate('Login');
  };

  const handleLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      setLocationPermissionGranted(true);
      setContinueDisabled(!termsAccepted);
    }
  };

  const handleTermsAccepted = () => {
    setTermsAccepted(!termsAccepted);
    setContinueDisabled(!locationPermissionGranted);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={{ uri: 'https://example.com/path/to/logo.png' }}
          />
        </View>
        <Text style={styles.welcome}>Bem-Vindo!</Text>
        <Text style={styles.description}>
          Achar e Marcar suas consultas
          {'\n'}
          nunca foi tão fácil!
        </Text>
        <View style={styles.permission}>
          <TouchableOpacity onPress={handleTermsAccepted}>
            <View style={styles.permissionSquare}>{termsAccepted && <Text style={styles.permissionCheck}>x</Text>}</View>
          </TouchableOpacity>
          <Text style={styles.permissionText}>Concordar com os termos de uso</Text>
        </View>
        <View style={styles.permission}>
          <TouchableOpacity onPress={handleLocationPermission}>
            <View style={styles.permissionSquare}>{locationPermissionGranted && <Text style={styles.permissionCheck}>x</Text>}</View>
          </TouchableOpacity>
          <Text style={styles.permissionText}>Permitir Localização</Text>
        </View>
        <Text style={styles.locationInfo}>Para descobrir clínicas perto da sua região</Text>
        <View style={styles.continue}>
          <TouchableOpacity
            style={[styles.continueButton, { backgroundColor: continueDisabled ? '#ccc' : '#007bff' }]}
            disabled={continueDisabled}
            onPress={handleContinue}
          >
            <Text style={styles.continueButtonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b8e1f1',
  },
  content: {
    alignItems: 'center',
    padding: 0,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
  },
  welcome: {
    fontSize: 30,
    marginBottom: 20,
  },
  description: {
    textAlign: 'center',
    marginBottom: 40,
  },
  permission: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    alignSelf: 'flex-start',
  },
  permissionSquare: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  permissionCheck: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  permissionText: {
    fontSize: 16,
  },
  locationInfo: {
    textAlign: 'center',
    marginBottom: 40,
  },
  continue: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  continueButton: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Permicao;
