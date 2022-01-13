import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './App/screens/Login';
import Register from './App/screens/Register';
import Details from './App/screens/gestion_ticket/details';
import Home from './App/screens/home';
import ListTicket from './App/screens/gestion_ticket/listTicket';
import TicketCreate from './App/screens/gestion_ticket/TicketCreate';
import AddMessage from './App/screens/gestion_ticket/AddMessage';
import ListMessage from './App/screens/gestion_ticket/ListMessage';
import LoginAdmin from './App/screens/loginAdmin';
import ProjetCreate from './App/screens/gestion_projet/ProjetCreate';
import ListProjet from './App/screens/gestion_projet/listProjet';
import ListTache from './App/screens/gestion_projet/listTache';
import Gestion from './App/screens/gestion';
const Stack = createStackNavigator();

class App extends React.Component {

  render() {
    return (

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="LoginAdmin" component={LoginAdmin} />
          <Stack.Screen name="Gestion" component={Gestion} />
          <Stack.Screen name="ListProjet" component={ListProjet} />
          <Stack.Screen name="ListTache" component={ListTache} />
          <Stack.Screen name="ProjetCreate" component={ProjetCreate} />
          <Stack.Screen name="ListTicket" component={ListTicket} />
          <Stack.Screen name="ListMessage" component={ListMessage} />
          <Stack.Screen name="AddMessage" component={AddMessage} />
          <Stack.Screen name="TicketCreate" component={TicketCreate} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;