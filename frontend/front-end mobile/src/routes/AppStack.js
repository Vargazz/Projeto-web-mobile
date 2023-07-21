import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Playbooks from '../pages/Playbooks';
import PlaybooksCreate from '../pages/PlaybookCreate';
import PlaybookUpdate from '../pages/PlaybookUpdate';
import Account from '../pages/Account';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Register"
          component={Register}
        />
      <Stack.Screen
          name="Conta"
          component={Account}
        />
      <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Playbooks"
          component={Playbooks}
        />
      <Stack.Screen
          name="Criar Card"
          component={PlaybooksCreate}
        />
        <Stack.Screen
          name="Editar Card"
          component={PlaybookUpdate}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default MyStack