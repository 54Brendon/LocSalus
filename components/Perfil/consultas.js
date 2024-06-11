import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function consultas() {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consultas</Text>
      <View style={styles.noConsultationsContainer}>
        <Text style={styles.noConsultationsText}>Sem consultas no momento</Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleBackPress}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B8E1F1",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: windowWidth * 0.05,
  },
  title: {
    fontSize: windowWidth * 0.08,
    fontWeight: "bold",
    marginBottom: windowHeight * 0.03,
  },
  noConsultationsContainer: {
    backgroundColor: "#fff",
    width: windowWidth * 0.9,
    height: windowHeight * 0.6, // Aumentado para duas vezes o tamanho original
    paddingVertical: windowHeight * 0.05,
    paddingHorizontal: windowWidth * 0.1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: windowHeight * 0.05,
  },
  noConsultationsText: {
    fontSize: windowWidth * 0.05,
    fontWeight: "400",
    textAlign: "center",
  },
  buttonContainer: {
    backgroundColor: "#1E4967", // Azul escuro
    width: windowWidth * 0.6,
    height: windowHeight * 0.08,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20, // Bordas curvas
    marginTop: 10, // Espaçamento superior ajustado manualmente
  },
  buttonText: {
    color: "#fff",
    fontSize: windowWidth * 0.05,
    fontWeight: "700",
  },
});

export default consultas;
