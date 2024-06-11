import React from "react";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View, Text } from 'react-native';

const ValidarEmail = () => {
  const navigation = useNavigation(); // Adicionado o uso da função useNavigation

  const handleSendCode = () => {
    navigation.navigate('Login');
  };

  const handleEmailClick = () => {
    // Não há a necessidade de exibir nenhuma mensagem ao clicar
    // Podemos deixar esta função vazia
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Validar Email</Text>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0fd1e442575f91b91b20b00239cae54588ee3dbb87e8a8382c1054588f0effc?apiKey=43087b9600024da7b7591aeaa0192f8a&"
        className="image"
        alt="Imagem de código"
        style={{ width: "20%", height: "auto" }} // Reduzido o tamanho da imagem em 80%
      />
      <Text style={styles.subtitle}>
        Digite o código de 6 dígitos que enviamos para o seu e-mail:
      </Text>
      <View style={styles.codeInputContainer}>
        {[...Array(6)].map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            style={styles.codeInput}
          />
        ))}
      </View>
      <Text style={styles.info}>Para reenviar o código, espere 0:59</Text>
      <Text style={styles.notMyEmail} onClick={handleEmailClick}>
        Este não é meu e-mail
      </Text>
      <View style={styles.continueContainer}>
        <TouchableOpacity style={styles.continueButton} onPress={handleSendCode}>
          <View style={styles.continueButtonInner}>
            <Text style={styles.continueButtonText}>Continuar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B8E1F1',
  },
  title: {
    color: '#414370',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    color: '#000',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  codeInput: {
    width: 30,
    height: 30,
    margin: 0,
    marginRight: 3,
    textAlign: 'center',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 3,
  },
  info: {
    color: '#000',
    fontSize: 12,
    marginTop: 5,
    marginBottom: 5,
  },
  notMyEmail: {
    color: '#414370',
    fontSize: 14,
    fontWeight: 'bold',
    cursor: 'pointer',
    textDecorationLine: 'underline',
    marginBottom: 5,
  },
  continueContainer: {
    marginTop: 10,
  },
  continueButton: {
    backgroundColor: '#414370',
    borderRadius: 3,
    paddingVertical: 5,
    paddingHorizontal: 10,
    cursor: 'pointer',
  },
  continueButtonInner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
};

export default ValidarEmail;
