import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {useEffect, useState } from "react";
import { Text, ScrollView, Image, Button, Pressable, Alert, View } from 'react-native';
import Header from "../../components/Header";
import Navbar from "../../components/NavBar";
import Categories from "../../components/Categories";


const text = {
  position: 'absolute',
  fontSize: 25,
  fontWeight: 600,
  color: '#476EE6',
  top: 180,
  left: 20
}

 const Playbooks = ({ navigation }) => {

  const [showNavBar, setShowNavBar] = useState()
  const [allPLaybooks, setAllPlaybooks] = useState([])

  async function logTheStorage() {
    const response = await AsyncStorage.getItem('@user');
    console.log(response);
  }

  useEffect(() => {
    logTheStorage()
  }, [])

  const getCategorieID = async (id, categoriesName) => {
    const categorie = {
      id,
      categoriesName,
    }
    await AsyncStorage.setItem('@categorieEdit', JSON.stringify(categorie));
    navigation.navigate('Update')
  }

  const textButton = {
    position: 'absolute',
    width: 100,
    top: 9,
    left: 10,
    color: 'white'
  }

  const button = { 
    backgroundColor: '#476EE6',
    width: 120,
    height: 30,
    left: 250,
    borderRadius: 20,
    top: 40
  }
  
  const navigateCreat = () => {
    navigation.navigate('Criar Card')
  }
  
  const divPlaybooks = {
    width: 390,
    top: 150,
    left: 10
  }

  const divPlaybook = {
    width: 333,
    height: 250,
    margin: 15,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#D7D7D7',
    borderRadius: 10,
  }

  console.log(allPLaybooks);
  
  const titleText = {
    position: 'absolute',
    width: 196,
    height: 24,
    fontSize: 17,
    left: 30,
    top: 10
  }

  const buttonEdit = {
    position: 'absolute',
    backgroundColor: '#476EE6',
    width: 70,
    height: 30,
    fontSize: 17,
    left: 240,
    borderRadius: 20,
    top: 10
  }

  const textButton2 = {
    position: 'absolute',
    width: 100,
    top: 9,
    left: 10,
    color: 'white'
  }

  const textAll = {
    position: 'absolute',
    width: 196,
    height: 24,
    fontSize: 17,
    left: 10,
    top: 100
  }

  const firstDiv = {
    height: 60,
    borderBottomColor: '#D7D7D7',
    borderBottomWidth: 2
  }


  return (
    <ScrollView>
      <Text style={text}>Playbooks</Text>
      <Header setShowNavBar={setShowNavBar} showNavBar={showNavBar}/>
      <Pressable onPress={navigateCreat} style={button}>
        <Text style={textButton}>Criar Playbook</Text>
      </Pressable>
      <Categories setAllPlaybooks={setAllPlaybooks}/>
      <View style={divPlaybooks}>
        {
          allPLaybooks.map(({id, name, text, categoriesName}, index) => (
            <View key={index} style={divPlaybook}>
              <View style={firstDiv}>
                <Text style={titleText}>{name}</Text>
                <Pressable onPress={() => getCategorieID(id, categoriesName)} style={buttonEdit}>
                  <Text style={textButton2}>Editar</Text>
                </Pressable>
              </View>
              <ScrollView style={textAll}>
                <Text>{text}</Text>
              </ScrollView>
            </View>
          ))
        }
      </View>
      { showNavBar &&
        <Navbar setShowNavBar={setShowNavBar} navigation={navigation}/>
      }
    </ScrollView>
  );
}


export default Playbooks