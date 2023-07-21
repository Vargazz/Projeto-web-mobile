import React from 'react';
import { Image , Pressable, View, Text } from 'react-native';
import rei from '../images/png/rei.png';
import logo from '../images/png/logo.png';
import lista from '../images/png/lista.png';
import sair from '../images/png/sair.png';
import comente from '../images/png/comente.png';
import engrenagem from '../images/png/engrenagem.png';
import doUtilizador from '../images/png/do-utilizador.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const logoImg = {
  position: 'absolute',
  width: 153,
  height: 39,
  left: 40,
  top: 50
}

const imgEx1 = {
  position: 'absolute',
  width: 20,
  height: 24,
  left: 20,
  top: 200
}

const imgEx2 = {
  position: 'absolute',
  width: 20,
  height: 24,
  left: 20,
  top: 250
}

const imgEx3 = {
  position: 'absolute',
  width: 20,
  height: 24,
  left: 20,
  top: 300
}

const imgPlaybook = {
  position: 'absolute',
  width: 20,
  height: 24,
  left: 20,
  top: 150
}

const imgAccount = {
  position: 'absolute',
  width: 20,
  height: 24,
  left: 20,
  top: 350
}

const imgLogout = {
  position: 'absolute',
  width: 20,
  height: 24,
  left: 20,
  top: 500
}


const headerView = {
  backgroundColor: '#FFFFFF',
  position: 'absolute',
  width: 266,
  height: 812,
  borderWidth: 1,
  borderColor: '#D7D7D7',
}

const textPlaybook = {
  position: 'absolute',
  fontSize: 15,
  fontWeight: 500,
  width: 145,
  height: 24,
  left: 50,
  top: 155
}
const textEx1 = {
  position: 'absolute',
  fontSize: 15,
  fontWeight: 500,
  width: 145,
  height: 24,
  left: 50,
  top: 205
}
const textEx2 = {
  position: 'absolute',
  fontSize: 15,
  fontWeight: 500,
  width: 145,
  height: 24,
  left: 50,
  top: 255
}
const textEx3 = {
  position: 'absolute',
  fontSize: 15,
  fontWeight: 500,
  width: 145,
  height: 24,
  left: 50,
  top: 305
}
const textAccount = {
  position: 'absolute',
  fontSize: 15,
  fontWeight: 500,
  width: 145,
  height: 24,
  left: 50,
  top: 355
}

const textLogout = {
  position: 'absolute',
  fontSize: 15,
  fontWeight: 500,
  width: 145,
  height: 24,
  left: 50,
  top: 505
}


const Navbar = ({navigation, setShowNavBar}) => {

  const logoutAccount = async () => {
    await AsyncStorage.clear()
    navigation.reset({
      index: 0,
      routes: [{name: "Login"}]
    })
  }



  return(
    <View style={headerView}>
      <Image source={logo} style={logoImg}/>
      <Pressable onPress={() => setShowNavBar(false)}>
      <Image source={rei} style={imgPlaybook}/>
      <Text style={textPlaybook}>Playbooks</Text>
      </Pressable>
      <View>
      <Image source={lista} style={imgEx1}/>
      <Text style={textEx1}>Exemplo</Text>
      </View>
      <View>
      <Image source={comente} style={imgEx2}/>
      <Text style={textEx2}>Exemplo</Text>
      </View>
      <View>
      <Image source={engrenagem} style={imgEx3}/>
      <Text style={textEx3}>Exemplo</Text>
      </View>
      <Pressable onPress={() => {navigation.navigate("Conta")}}>
      <Image source={doUtilizador} style={imgAccount}/>
       <Text style={textAccount}>Minha Conta</Text>
      </Pressable>
      <Pressable onPress={logoutAccount}>
      <Image source={sair} style={imgLogout}/>
       <Text style={textLogout}>Sair</Text>
      </Pressable>
    </View>
  )

}

export default Navbar