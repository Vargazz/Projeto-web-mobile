import React, {useEffect, useState } from "react";
import { Text, View, Image, Button, Pressable, Alert } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import InputRegister from '../../components/inputRegister';
import logo from '../../images/png/logo.png'
import api from '../../services/api'


const nameInput = {
  position: 'absolute',
  left: 40,
  top:190,
}

const emailInput = {
  position: 'absolute',
  left: 40,
  top: 270,
}

const passwordInput = {
  position: 'absolute',
  left: 40,
  top: 350,
}

const confirmPasswordInput = {
  position: 'absolute',
  left: 40,
  top: 430,
}

const text = {
  position: 'absolute',
  width: 119,
  height: 36,
  top: 120,
  left: 40,
  fontSize: 25,
  color: '#476EE6'
}

const termos = {
  position: 'absolute',
  fontSize: 14,
  fontWeight: 700,
  width:300,
  top: 520,
  left: 40
}

const checkbox = {
  position: 'absolute',
  top:570,
  left: 40
}

const textTermos = {
  position: 'absolute',
  width: 250,
  top: 550,
  left: 80
}

const img = { 
  position: 'absolute',
  width: 190,
  height: 47,
  left: 40,
  top: 30
}

const buttonCadastro = {
  backgroundColor: '#476EE6',
  width: 324,
  height: 45,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 60,
  top:640,
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
  top:640,
  left: 40
}

const buttonText = {
  position: 'absolute',
  color: '#FFFFFF'
}


const allView = {
  position: 'absolute',
  backgroundColor: '#FFFFFF',
  height: 1000,
}

 const Register = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [confirmPassword , setConfirmPassword] = useState('')
  const [isVisible, setIsVisible] = useState(false);
  const [button, setButton] = useState(true);
  const [checked, setChecked] = useState();


  const handleChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
  };


useEffect(() => {
  const minimumNameLength = 12;
  const minimumPasswordLength = 6;
  const isValidName = inputs.name.length >= minimumNameLength;
  const isValidEmail = /^[^@^ ]+@[^@^ ]+\.[a-z]{2,3}(\.[a-z]{2})?$/.test(inputs.email);
  const isValidPassword = inputs.password.length >= minimumPasswordLength;
  return setButton(!(isValidName && isValidEmail && isValidPassword));
}, [inputs]);


const registerUser = async () => {
  try {
    await api.post('/register', {
      name: inputs.name,
      email: inputs.email,
      password: inputs.password,
    });
    setIsVisible(() => false);
    navigation.navigate('Login')
  } catch (e) {
    setIsVisible(() => true);
    if(isVisible) {
      Alert.alert("Email ja cadastrado")
    }
  }
}

const handleChangeConfirm = (value) => {
  setConfirmPassword(value);
};

  return (
    <View style={allView}>
      <Image source={logo} style={img}/>
      <Text style={text}>Cadastro</Text>
      <InputRegister style={nameInput} onChangeText={(value) => handleChange('name', value)} value={inputs.name} type="text"  nameLabel="Nome" placeholder="   Insira seu nome"/>
      <InputRegister style={emailInput} onChangeText={(value) => handleChange('email', value)} value={inputs.email} type="text"  nameLabel="E-mail" placeholder="   Insira seu e-mail"/>
      <InputRegister style={passwordInput} secureTextEntry autoCorrect={false} nameLabel={"Senha"}  onChangeText={(value) => handleChange('password', value)} value={inputs.password} placeholder="  Insira sua senha"/>
      <InputRegister style={confirmPasswordInput} secureTextEntry onChangeText={handleChangeConfirm} value={confirmPassword} nameLabel="Confirme sua senha" placeholder="  Confirma senha"/>
      <BouncyCheckbox style={checkbox} fillColor="blue" onChange={(e) => setChecked(e.target.checked)} value={checkbox}/> 
      <Text style={termos}>Termos de uso e Privacidade</Text>
      <Text style={textTermos}>Ao clicar nesse botão, eu concordo com os termos de uso e privacidade da nossa empresa</Text>
      <Pressable style={button ? buttonCadastroDisable : buttonCadastro} disabled={ button } onPress={registerUser}>
        <Text style={buttonText}>Cadastrar</Text>
      </Pressable>
    </View>
  );
}


export default Register