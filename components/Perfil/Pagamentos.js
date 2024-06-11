import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';


const Pagamentos = () => {
    const navigation = useNavigation(); 
    const handleRegistration = () => {
        navigation.navigate('Perfil');
      };
  return (
    <View style={styles.container}>
      
      {/* Barra de Pesquisa */}
      <View style={styles.searchBar}>
        <TouchableOpacity style={styles.profileButton}>
          <Icon name="account-circle" size={40} color="#fff" />
        </TouchableOpacity>
        <TextInput style={styles.searchInput}></TextInput>
        <TouchableOpacity style={styles.searchButton}>
          <Icon name="search" size={40} color="#fff" />
        </TouchableOpacity>
      </View>


      {/* Seção de Vídeos */}
      <View style={styles.videoButtons}>

            <Text style={styles.unitNameTitle}>Extratos</Text>

      </View>


      <ScrollView style={styles.servicesSectionImage} showsVerticalScrollIndicator={true}>
            <View style={styles.videoButtons}>

                    <Text style={styles.unitName}>Sem extratos no momento</Text>
               
            </View>
           
      </ScrollView>

      <TouchableOpacity style={styles.searchButton} onPress={handleRegistration}>
          <Icon name="arrow-back" size={40} color="#fff" />
        </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444655',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#A8AABC',

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
  ImageButton: {
    width: 200,
    height: 200,
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
    padding: 30,
  },
  largeButton: {
    flex: 1,
    height: 100,
    margin: 10,
    flexDirection: 'row',

    backgroundColor: '#5080EF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  largeHelpButton: {
    flex: 1,
    width:200,
    height: 70,
    margin: 60,
    backgroundColor: '#5080EF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,

    borderRadius: 20,
  },
  servicesSection: {
    width: '100%',
    flexDirection: 'row',
    
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
  unitNameTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  unitTime: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Pagamentos;
