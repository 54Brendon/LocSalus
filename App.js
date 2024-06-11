import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios'; // Importando axios para fazer solicitações HTTP

// Importando componentes
import Inicializacao from './components/Inicializacao/Inicializacao';
import Permicao from './components/login/Permicao';
import Cadastro from './components/cadastro/cadastro';
import ValidarSmS from './components/cadastro/ValidarSmS';
import ValidarEmail from './components/cadastro/validaremail';
import Login from './components/login/login'; // Renomeando para Login em maiúscula
import Dashboard from './components/dashboard/Dashboard';
import Perfil from './components/Perfil/Perfil';
import Pagamentos from './components/Perfil/Pagamentos';
import configuracoes from './components/Perfil/configuração';
import consultas from './components/Perfil/consultas';
import meusdados from './components/Perfil/meusdados';
import Adicionarnumero from './components/cadastro/adicionarnumero';

const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      console.log('Fetching data...');
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading(false);
      console.log('Data fetched, loading completed');
    };

    fetchData();
  }, []);

  if (isLoading) {
    console.log('Showing Inicializacao screen');
    return <Inicializacao />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Permicao">
        <Stack.Screen name="Permicao" component={Permicao} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
        <Stack.Screen name="Adicionarnumero" component={Adicionarnumero} options={{ headerShown: false }} />
        <Stack.Screen name="ValidarSmS" component={ValidarSmS} options={{ headerShown: false }} />
        <Stack.Screen name="ValidarEmail" component={ValidarEmail} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false }} />
        <Stack.Screen name="Pagamentos" component={Pagamentos} options={{ headerShown: false }} />
        <Stack.Screen name="meusdados" component={meusdados} options={{ headerShown: false }} />
        <Stack.Screen name="consultas" component={consultas} options={{ headerShown: false }} />
        <Stack.Screen name="configuracoes" component={configuracoes} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
