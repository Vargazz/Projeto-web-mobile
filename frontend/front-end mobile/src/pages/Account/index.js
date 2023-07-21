import { Picker } from "@react-native-picker/picker";
import React, {useEffect, useState } from "react";
import { Text, View, Image, Button, Pressable, Alert, TextInput, ScrollView } from 'react-native';
import api from '../../services/api';
import AsyncStorage from "@react-native-async-storage/async-storage";
import usuarioPadrao from '../../images/png/usuarioPadrao.png';

 const Account = ({ navigation }) => {


  const handleChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
  };


  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [number, setNumber] = useState()

  const attAccount = async () => {
    try {
      const id = JSON.parse(await AsyncStorage.getItem('@user')).id
      await api.put(`/users/${id}`, {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      });
      AsyncStorage.clear();
      navigation.reset({
        index: 0,
        routes: [{name: "Login"}]
      })
    } catch (e) {
        window.alert("Email ja cadastrado")
    }
    };
  
  const inputName = {
    width: 324,
    height: 45,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#D7D7D7',
    borderRadius: 10,
  }

  const button = {
    width: 315,
    height: 43,
    borderRadius: 60,
    backgroundColor: '#476EE6',
    left: 20,
    top: 550
  }

  const textButton = {
    position: 'absolute',
    top: 8,
    left: 124,
    color: 'white',
    fontSize: 25
  }

  const containerInput = {
    padding: 15
  }

  const AllDivIn = {
    position: 'absolute',
    top: 180
  }

  const imgUser = {
   position: 'absolute',
   width: 115,
   height: 115,
   left: 130,
   top: 40
  }

  return (
    <ScrollView>
      <Image source={usuarioPadrao} style={imgUser}/>
      <View style={AllDivIn}>
        <View style={containerInput}>
        <Text>Nome</Text>
        <TextInput style={inputName} value={inputs.name} onChangeText={(value) => handleChange('name', value)}/>
        </View>
        <View style={containerInput}>
        <Text>Email</Text>
        <TextInput style={inputName} value={inputs.email} onChangeText={(value) => handleChange('email', value)}/>
        </View>
        <View style={containerInput}>
        <Text>Numero</Text>
        <TextInput style={inputName} value={number} onChangeText={(e) => { setNumber(e.target.value) }}/>
        </View>
        <View style={containerInput}>
        <Text>Senha</Text>
        <TextInput style={inputName} value={inputs.password} secureTextEntry onChangeText={(value) => handleChange('password', value)}/>
        </View>
      </View>
      <Pressable onPress={attAccount} style={button}>
       <Text style={textButton}>Salvar</Text>
      </Pressable>
    </ScrollView>
  );
}


export default Account