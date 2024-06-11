import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

function Adicionarnumero() {
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationMethod, setVerificationMethod] = useState("");
  const navigation = useNavigation();

  const handleMethodPress = (method) => {
    setVerificationMethod(method);
  };

  const handleSendCode = () => {
    if (!countryCode || !phoneNumber || !verificationMethod) {
      Alert.alert("Erro", "Por favor, preencha todas as informações.");
      return;
    }

    // Aqui você pode adicionar a lógica para enviar o código
    // E então navegar para a tela de validação
    navigation.navigate('ValidarSmS'); // Navegando para a tela de validação
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Número de celular</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, styles.countryCodeInput]}
          placeholder="DDD"
          keyboardType="phone-pad"
          maxLength={2}
          value={countryCode}
          onChangeText={(text) => setCountryCode(text)}
        />
        <TextInput
          style={[styles.input, styles.phoneNumberInput]}
          placeholder="Número de celular"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
      </View>
      <Text style={styles.subtitle}>Escolha o método de verificação:</Text>
      <TouchableOpacity
        style={[
          styles.methodButton,
          verificationMethod === "SMS" && styles.selectedMethod,
        ]}
        onPress={() => handleMethodPress("SMS")}
      >
        <Text style={styles.methodText}>SMS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.methodButton,
          verificationMethod === "WhatsApp" && styles.selectedMethod,
          verificationMethod === "WhatsApp" && styles.whatsappButton,
        ]}
        onPress={() => handleMethodPress("WhatsApp")}
      >
        <Text style={[styles.methodText, verificationMethod === "WhatsApp" && styles.whatsappButtonText]}>WhatsApp</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sendButton} onPress={handleSendCode}>
        <Text style={styles.sendButtonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#B8E1F1",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 5,
    padding: 10,
  },
  countryCodeInput: {
    width: "20%",
    textAlign: "center",
  },
  phoneNumberInput: {
    flex: 1,
    marginLeft: 10,
  },
  subtitle: {
    marginBottom: 10,
  },
  methodButton: {
    width: "70%",
    height: 40,
    backgroundColor: "#f0f0f0",
    marginBottom: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedMethod: {
    backgroundColor: "#dddddd",
  },
  methodText: {
    fontSize: 16,
  },
  whatsappButton: {
    backgroundColor: "#128C7E",
  },
  whatsappButtonText: {
    color: "#ffffff",
  },
  sendButton: {
    width: "70%",
    height: 40,
    backgroundColor: "#007bff",
    borderRadius: 20,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  sendButtonText: {
    color: "#ffffff",
    fontSize: 18,
    textAlign: "center",
  },
});

export default Adicionarnumero;
