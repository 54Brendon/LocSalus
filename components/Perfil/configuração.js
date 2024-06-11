//não precisa terminar
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function configuracoes() {
  const handleLogout = () => {
    console.log("Logout executado"); // Simula a ação de logout
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B8E1F1",
    alignItems: "center",
    paddingTop: windowHeight * 0.2, // Ajustando para posicionar o título mais acima
  },
  title: {
    fontSize: windowWidth * 0.1,
    fontWeight: "bold",
    marginBottom: windowHeight * 0.05,
  },
  logoutButton: {
    flexDirection: 'row', // Usar flexDirection para alinhar o texto à esquerda
    backgroundColor: "#4285f4", // Cor do botão ajustada
    width: windowWidth * 0.6,
    height: windowHeight * 0.08,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: windowHeight * 0.03,
  },
  buttonText: {
    color: "#fff",
    fontSize: windowWidth * 0.05,
    fontWeight: "700",
    marginLeft: 10, // Adicionando espaço entre o texto e a borda esquerda
  },
});

export default configuracoes;
