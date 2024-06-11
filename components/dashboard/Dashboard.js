import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'; // Importar o useNavigation


const Dashboard = () => {
    const navigation = useNavigation(); 
    const handleLogin = () => {
        navigation.navigate('Perfil');
      };
  return (
    <View style={styles.container}>
      
      {/* Barra de Pesquisa */}
      <View style={styles.searchBar}>
        
        <TouchableOpacity style={styles.profileButton} onPress={handleLogin}>
          <Icon name="account-circle" size={40} color="#fff" />
        </TouchableOpacity>
        <TextInput style={styles.searchInput}></TextInput>
        <TouchableOpacity style={styles.searchButton}>
          <Icon name="search" size={40} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Seção de Botões */}
      <View style={styles.buttonSection}>
        <TouchableOpacity style={styles.button}>
          <Text  style={styles.unitName}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.unitName}> Hospitais</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text  style={styles.unitName}>Clínicas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text  style={styles.unitName}>Farmácias</Text>
        </TouchableOpacity>
      </View>

      {/* Seção de Vídeos */}
      <View style={styles.videoButtons}>
        <TouchableOpacity style={styles.largeButton}>
          <Text  style={styles.unitName}>Vídeos Explicativos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.largeButton}>
          <Icon name="play-circle-filled" size={60} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Melhores Avaliados e Unidades de Saúde */}
      <ScrollView style={styles.servicesSection} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Melhores Avaliados</Text>
        {/* Repita os componentes de unidade de saúde conforme necessário */}
        <View style={styles.bestAward}>
            <View style={styles.bestAwardContent}>
                <Icon name="house" size={60} color="#fff" />
                <View style={styles.unitInfo}>
                    <Text style={styles.unitName}>Clínica da Cidade</Text>
                    <Text style={styles.unitTime}>★★★★★</Text>
                </View>
            </View>
            <View style={styles.bestAwardContent}>
                <Icon name="house" size={60} color="#fff" />
                <View style={styles.unitInfo}>
                    <Text style={styles.unitName}>Clínica da Cidade</Text>
                    <Text style={styles.unitTime}>★★★★</Text>
                </View>
            </View>
            <View style={styles.bestAwardContent}>
                <Icon name="house" size={60} color="#fff" />
                <View style={styles.unitInfo}>
                    <Text style={styles.unitName}>Clínica da Cidade</Text>
                    <Text style={styles.unitTime}>★★★★</Text>
                </View>
            </View>
        </View>
      </ScrollView>

      <ScrollView style={styles.servicesSection} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>Unidades de Saude</Text>
        {/* Repita os componentes de unidade de saúde conforme necessário */}
        <View style={styles.healthUnit}>

          <Icon name="map" size={60} color="#fff" />
          <View style={styles.unitInfo}>
            <Text style={styles.unitName}>Clínica da Cidade</Text>
            <Text style={styles.unitTime}>20 - 30 min</Text>
          </View>
          
        </View>
         <View style={styles.healthUnit}>

          <Icon name="map" size={60} color="#fff" />
          <View style={styles.unitInfo}>
            <Text style={styles.unitName}>Clínica da Cidade</Text>
            <Text style={styles.unitTime}>20 - 30 min</Text>
          </View>
          
        </View>
         <View style={styles.healthUnit}>

          <Icon name="map" size={60} color="#fff" />
          <View style={styles.unitInfo}>
            <Text style={styles.unitName}>Clínica da Cidade</Text>
            <Text style={styles.unitTime}>20 - 30 min</Text>
          </View>
          
        </View>
         <View style={styles.healthUnit}>

          <Icon name="map" size={60} color="#fff" />
          <View style={styles.unitInfo}>
            <Text style={styles.unitName}>Clínica da Cidade</Text>
            <Text style={styles.unitTime}>20 - 30 min</Text>
          </View>
          
        </View>
      </ScrollView>



    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B8E1F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',

    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  searchInput: {
    backgroundColor: 'none',
    width:500,
    borderRadius: 2,
  },
  profileButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#5080EF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#5080EF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    backgroundColor: '#5080EF',
    padding: 10,
    margin: 6,
    borderRadius: 20,
  },
  videoButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  largeButton: {
    flex: 1,
    height: 100,
    margin: 10,
    backgroundColor: '#5080EF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  servicesSection: {
    width: '100%',
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    backgroundColor: '#5080EF',
    fontWeight: 'bold',
    color: '#fff',
  },
  healthUnit: {
    flexDirection: 'row',
  },
  bestAward: {
    flexDirection: 'row',
    justifyContent: 'space-between',


  },
  bestAwardContent: {
    flexDirection: 'row',
    margin: '43px',
  },
  unitImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  unitInfo: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  unitName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  
  unitTime: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Dashboard;
