import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const Perfil = () => {
    const navigation = useNavigation(); 

    // Navigation handlers
    const handlePagamentoPress = () => navigation.navigate('Pagamentos');
    const handleConsultasPress = () => navigation.navigate('consultas');
    const handleExamesPress = () => navigation.navigate('exames');
    const handleMeusDadosPress = () => navigation.navigate('meusdados');
    const handleConfiguracoesPress = () => navigation.navigate('configuracoes');
    const handleRegistrations = () => navigation.navigate('Dashboard');

    return (
        <View style={styles.container}>
            {/* Barra de Pesquisa */}
            <View style={styles.searchBar}>
                <TouchableOpacity style={styles.profileButton} onPress={handleRegistrations}>
                    <Icon name="account-circle" size={40} color="#fff" />
                </TouchableOpacity>
                <TextInput style={styles.searchInput} />
                <TouchableOpacity style={styles.searchButton}>
                    <Icon name="search" size={40} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* Seção de Vídeos */}
            <View style={styles.videoButtons}>
                <TouchableOpacity style={styles.largeButton}>
                    <Icon name="account-circle" size={60} color="#fff" />
                </TouchableOpacity>
                <View style={styles.largeButton}>
                    <Text style={styles.unitName}>Nome do Usuario</Text>
                </View>
            </View>

            {/* Ações */}
            <ScrollView style={styles.servicesSection} showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={styles.largeButton} onPress={handlePagamentoPress}>
                    <Icon name="payments" size={20} color="#fff" />
                    <Text style={styles.unitName}> Pagamentos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.largeButton} onPress={handleConsultasPress}>
                    <Icon name="watch" size={20} color="#fff" />
                    <Text style={styles.unitName}> Consultas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.largeButton} onPress={handleExamesPress}>
                    <Icon name="description" size={20} color="#fff" />
                    <Text style={styles.unitName}> Exames</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.largeButton} onPress={handleMeusDadosPress}>
                    <Icon name="web" size={20} color="#fff" />
                    <Text style={styles.unitName}> Meus Dados</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.largeButton} onPress={handleConfiguracoesPress}>
                    <Icon name="adjust" size={20} color="#fff" />
                    <Text style={styles.unitName}> Configurações</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* Imagem ou Seção de Destaque */}
            <ScrollView style={styles.servicesSectionImage} showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={styles.ImageButton}>
                    <Icon name="image" size={300} color="#fff" />
                </TouchableOpacity>
                {/* Add more components or images as needed */}
            </ScrollView>
            
            {/* Botão de Ajuda */}
            <TouchableOpacity style={styles.largeHelpButton}>
                <Text style={styles.unitName}>Ajuda</Text>
            </TouchableOpacity>
        </View>
    );
};

// Stylesheet
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
        width: 500,
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
        width: 200,
        height: 70,
        margin: 10,
        backgroundColor: '#5080EF',
        justifyContent: 'center',
        alignItems: 'center',
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
    unitTime: {
        fontSize: 14,
        color: 'gray',
    },
});

export default Perfil;
