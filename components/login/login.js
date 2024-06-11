import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const signInWithGoogle = async () => {
    try {
      // Lógica de login com o Google
    } catch (error) {
      console.error("Erro ao fazer login com o Google:", error);
      // Adicione feedback visual ao usuário informando sobre o erro
    }
  };

  const signInWithFacebook = async () => {
    try {
      // Lógica de login com o Facebook
    } catch (error) {
      console.error("Erro ao fazer login com o Facebook:", error);
      // Adicione feedback visual ao usuário informando sobre o erro
    }
  };

  const handleRegistration = () => {
    navigation.navigate('Cadastro');
  };

  const handleLogin = async () => {
    try {
      // Simular login sem comunicação com o servidor
      if ((email === "proedf@gmail.com" && password === "30351429") ||
          (email === "54brendon@gmail.com" && password === "30351429")) {
        navigation.navigate('Dashboard');
      } else {
        Alert.alert('Erro', 'Email ou senha incorretos');
      }
    } catch (error) {
      console.error('Erro:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao fazer login');
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.fazerLoginContainer}>
          <Text style={[styles.letter, styles.letter1]}>F</Text>
          <Text style={[styles.letter, styles.letter2]}>a</Text>
          <Text style={[styles.letter, styles.letter3]}>z</Text>
          <Text style={[styles.letter, styles.letter4]}>e</Text>
          <Text style={[styles.letter, styles.letter5]}>r</Text>
        </View>
        <View style={styles.loginContainer}>
          <Text style={[styles.letter, styles.letter6]}>l</Text>
          <Text style={[styles.letter, styles.letter7]}>o</Text>
          <Text style={[styles.letter, styles.letter8]}>g</Text>
          <Text style={[styles.letter, styles.letter9]}>i</Text>
          <Text style={[styles.letter, styles.letter10]}>n</Text>
        </View>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Fazer login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.separator}>
        <View style={styles.line} />
        <Text style={styles.or}>ou</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.socialLogin}>
        <TouchableOpacity
          style={[styles.button, styles.googleButton]}
          onPress={signInWithGoogle}
        >
          <Text style={[styles.socialButtonText, {textAlign: 'center'}]}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.facebookButton]}
          onPress={signInWithFacebook}
        >
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.register}
        onPress={handleRegistration}
      >
        <Text style={styles.registerText}>Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B8E1F1',
  },
  logoContainer: {
    marginBottom: 30,
    flexDirection: 'row',
  },
  fazerLoginContainer: {
    flexDirection: 'row',
  },
  loginContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  letter: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },
  letter1: {
    transform: [{ rotate: '-15deg' }, { translateY: -5 }],
  },
  letter2: {
    transform: [{ rotate: '-13deg' }, { translateY: -10 }],
  },
  letter3: {
    transform: [{ rotate: '-10deg' }, { translateY: -13 }],
  },
  letter4: {
    transform: [{ rotate: '-15deg' }, { translateY: -15 }],
  },
  letter5: {
    transform: [{ rotate: '-4deg' }, { translateY: -17 }],
  },
  letter6: {
    transform: [{ rotate: '4deg' }, { translateY: -17 }],
  },
  letter7: {
    transform: [{ rotate: '7deg' }, { translateY: -15 }],
  },
  letter8: {
    transform: [{ rotate: '10deg' }, { translateY: -13 }],
  },
  letter9: {
    transform: [{ rotate: '13deg' }, { translateY: -10 }],
  },
  letter10: {
    transform: [{ rotate: '15deg' }, { translateY: -5 }],
  },
  formContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#4285f4',
    borderRadius: 5,
    paddingVertical: 10,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  socialLogin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    width: '80%',
  },
  googleButton: {
    backgroundColor: '#db4437',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%'
  },
  facebookButton: {
    backgroundColor: '#4267B2',
    borderRadius
    : 5,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
  },
  socialButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
 
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  or: {
    marginHorizontal: 10,
  },
  register: {
    marginTop: 15,
  },
  registerText: {
    color: '#4285f4',
    fontWeight: 'bold',
  },
});

export default Login;
