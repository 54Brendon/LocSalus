import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

function Cadastro() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleContinue = async () => {
    if (!nome || !sobrenome || !email || !cpf || !senha || !confirmarSenha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem.');
      return;
    }

    try {
      await axios.post('http://localhost:3000/cadastro', {
        nome,
        sobrenome,
        email,
        cpf,
        senha,
      });
      navigation.navigate('Adicionarnumero');
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      alert('Erro ao cadastrar. Por favor, tente novamente.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>D</Text>
        <Text style={styles.logoText}>a</Text>
        <Text style={styles.logoText}>d</Text>
        <Text style={styles.logoText}>o</Text>
        <Text style={styles.logoText}>s</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Sobrenome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu sobrenome"
          value={sobrenome}
          onChangeText={setSobrenome}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>CPF:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu CPF"
          value={cpf}
          onChangeText={setCpf}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirmar Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirme sua senha"
          secureTextEntry={true}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />
      </View>
      <TouchableOpacity
        style={[styles.buttonContainer, { marginTop: 20 }]}
        onPress={handleContinue}
      >
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#B8E1F1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    color: '#414370',
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: -0.4,
  },
  inputContainer: {
    width: '100%',
    marginTop: 10,
  },
  label: {
    fontSize: 16,
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    width: '100%',
    fontSize: 16,
    borderColor: '#333',
    borderWidth: 1,
  },
  buttonContainer: {
    backgroundColor: '#001f3f',
    borderRadius: 20,
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    letterSpacing: -0.21,
  },
});

export default Cadastro;

