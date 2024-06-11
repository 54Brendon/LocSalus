import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

const ValidarSmS = ({ screenWidth, handleSendCodeProp, handleVerificationMethod }) => {
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationMethod, setVerificationMethod] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    console.log("Screen width:", screenWidth);
  }, [screenWidth]);

  const handleInputChange = (text, index) => {
    const newCode = [...verificationCode];
    newCode[index] = text;
    setVerificationCode(newCode.join(''));
  };

  const handleMethodPress = (method) => {
    setVerificationMethod(method);
    handleVerificationMethod(method);
  };

  const handleSendCode = () => {
    navigation.navigate('ValidarEmail');
  };

  const renderInputFields = () => {
    const inputFields = [];
    for (let i = 0; i < 6; i++) {
      inputFields.push(
        <TextInput
          key={i}
          style={styles.input}
          maxLength={1}
          keyboardType="numeric"
          value={verificationCode[i] || ''}
          onChangeText={(text) => handleInputChange(text, i)}
        />
      );
    }
    return inputFields;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Validar o número</Text>

      <Text style={styles.message}>Digite o Código de 6 dígitos que enviamos por SMS para (xx) x xxxx-xxxx</Text>

      <View style={styles.inputContainer}>
        {renderInputFields()}
      </View>

      <Text style={styles.resendMessage}>Para reenviar o código, espere 0:59</Text>

      <TouchableOpacity
        style={[styles.resendButton, verificationMethod === "SMS" && styles.selectedMethod]}
        onPress={() => handleMethodPress("SMS")}
      >
        <Text style={styles.resendButtonText}>Reenviar por SMS</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.resendButton,
          styles.whatsappButton,
          verificationMethod === "WhatsApp" && styles.selectedMethod,
          verificationMethod === "WhatsApp" && styles.whatsappButtonSelected
        ]}
        onPress={() => handleMethodPress("WhatsApp")}
      >
        <Text style={[styles.resendButtonText, styles.whatsappButtonText]}>Reenviar por WhatsApp</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.continueButtonContainer} onPress={handleSendCode}>
        <View style={styles.continueButtonInner}>
          <Text style={styles.continueButtonText}>Continuar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B8E1F1",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  message: {
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    marginRight: 10,
    textAlign: "center",
    fontSize: 20,
  },
  resendMessage: {
    textAlign: "center",
    marginBottom: 20,
  },
  resendButton: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
    width: "auto",
  },
  resendButtonText: {
    fontSize: 16,
  },
  selectedMethod: {
    backgroundColor: "#dddddd",
  },
  whatsappButton: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    backgroundColor: "#f0f0f0",
    width: "auto",
  },
  whatsappButtonSelected: {
    backgroundColor: "#8BC34A",
  },
  whatsappButtonText: {
    fontSize: 16,
  },
  continueButtonContainer: {
    width: "100%",
    marginTop: 20,
    alignItems: "center",
  },
  continueButtonInner: {
    backgroundColor: "#414370",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  continueButtonText: {
    color: "#ffffff",
    fontSize: 20,
  },
});

export default ValidarSmS;
