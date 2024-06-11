import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import axios from 'axios';

function meusdados() {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Substitua pela URL correta do seu backend
        const response = await axios.get('http://localhost:3000/cadastro');
        setDados(response.data[0]); // Pega o primeiro item da lista de cadastros
      } catch (error) {
        console.error('Erro ao obter dados do usuário', error);
      }
    };

    fetchData();
  }, []);

  if (!dados) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
        <Text style={styles.loadingText}>Carregando dados...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.texto}>{dados.nome}</Text>
        <Text style={styles.label}>Sobrenome:</Text>
        <Text style={styles.texto}>{dados.sobrenome}</Text>
        <Text style={styles.label}>E-mail:</Text>
        <Text style={styles.texto}>{dados.email}</Text>
        <Text style={styles.label}>CPF:</Text>
        <Text style={styles.texto}>{dados.cpf}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E1F5FE",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#E1F5FE",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#007BFF",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%',
    maxWidth: 400,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
  },
  texto: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
  },
});

export default meusdados;
