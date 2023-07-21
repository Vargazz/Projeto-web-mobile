import React, {useEffect, useState } from "react";
import { Text, View, Image, Button, Pressable, Alert } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import InputRegister from '../../components/inputRegister';
import logo from '../../images/png/logo.png'
import api from '../../services/api'


const nameInput = {
  position: 'absolute',
  left: 40,
  top:240,
}

const emailInput = {
  position: 'absolute',
  left: 40,
  top: 350,
}


const text = {
  position: 'absolute',
  width: 209,
  height: 36,
  top: 160,
  left: 90,
  fontSize: 25,
  color: '#476EE6'
}

const termos = {
  position: 'absolute',
  color: 'blue',
  fontSize: 14,
  fontWeight: 700,
  width:300,
  top: 480,
  left: 230
}

const img = { 
  position: 'absolute',
  width: 190,
  height: 47,
  left: 90,
  top: 100
}

const buttonCadastro = {
  backgroundColor: '#476EE6',
  width: 324,
  height: 45,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 60,
  top:580,
  position: 'absolute',
  left: 40
}

const buttonCadastroDisable = {
  position: 'absolute',
  backgroundColor: 'rgb(161, 180, 238)',
  width: 324,
  height: 45,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 60,
  top:580,
  left: 40
}

const buttonText = {
  position: 'absolute',
  color: '#FFFFFF'
}

const allView = {
  position: 'absolute',
  backgroundColor: '#FFFFFF',
  height: 1000
}

 const Login = ({ navigation }) => {

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const [button, setButton] = useState(true);

  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
  };


  const loadUser = async () => {
    try {
      const { data } = await api.post('/login', {
        email: inputs.email,
        password: inputs.password,
      });
      setIsVisible(() => false);
      await AsyncStorage.setItem('@user', JSON.stringify(data))
      navigation.reset({
        index: 0,
        routes: [{name: "Playbooks"}]
      })
    } catch (e) {
      setIsVisible(() => true);
      if(isVisible) {
        Alert.alert("Conta não existe")
      }
    }
  };

  useEffect(() => {
    const minimumPasswordLength = 6;
    const isValidEmail = /^[^@^ ]+@[^@^ ]+\.[a-z]{2,3}(\.[a-z]{2})?$/.test(inputs.email);
    const isValidLength = inputs.password.length >= minimumPasswordLength;
    return setButton(!(isValidEmail && isValidLength));
  }, [inputs]);

  return (
    <View style={allView}>
      <Image source={logo} style={img}/>
      <Text style={text}>Dados de acesso</Text>
      <InputRegister style={nameInput} onChangeText={(value) => handleChange('email', value)} value={inputs.email}   nameLabel="E-mail" placeholder="   Insira seu email"/>
      <InputRegister style={emailInput} onChangeText={(value) => handleChange('password', value)} value={inputs.password}  nameLabel="Senha" placeholder="   Insira sua senha"/>
      <Text style={termos}>Esqueceu a senha?</Text>
      <Pressable style={button ? buttonCadastroDisable : buttonCadastro} disabled={ button } onPress={loadUser}>
        <Text style={buttonText}>Entrar</Text>
      </Pressable>
    </View>
  );
}


export default Login