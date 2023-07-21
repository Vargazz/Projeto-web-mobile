import React from 'react';
import { Image , Pressable, View } from 'react-native';
import usuarioPadrao from '../images/png/usuarioPadrao.png';
import logo from '../images/png/logo.png';
import cardapio from '../images/png/cardapio.png';

const logoImg = {
  position: 'absolute',
  width: 153,
  height: 39,
  left: 110,
  top: 50
}

const imgUser = {
  position: 'absolute',
  width: 40,
  height: 40,
  left: 320,
  top: 50
}

const imgUser2 = {
  position: 'absolute',
  width: 40,
  height: 40,
  left: 20,
  top: 50
}

const headerView = {
  backgroundColor: '#FFFFFF',
  width: 393,
  height: 145,
  borderWidth: 1,
  borderColor: '#D7D7D7',
}

const Header = ({setShowNavBar, showNavBar}) => {

  const altShowNavBar = () => {
    if(showNavBar === false) {
      setShowNavBar(true)
    } else {
      setShowNavBar(false)
    }
    
  }


  return(
    <View style={headerView}>
      <Image source={usuarioPadrao} style={imgUser}/>
      <Image source={logo} style={logoImg}/>
      <Pressable onPress={altShowNavBar}>
      <Image source={cardapio} style={imgUser2}/>
      </Pressable>
    </View>
  )

}

export default Header