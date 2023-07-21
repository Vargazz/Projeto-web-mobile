import { Picker } from "@react-native-picker/picker";
import React, {useEffect, useState } from "react";
import { Text, View, Image, Button, Pressable, Alert, TextInput, ScrollView } from 'react-native';
import api from '../../services/api';
import AsyncStorage from "@react-native-async-storage/async-storage";


 const PlaybooksCreate = ({ navigation }) => {

  const [inputs, setInputs] = useState({
    name: '',
    categorie: '',
    text: '',
  });
  const [allCategories, setAllCategories] = useState([])

  const handleChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
  };


  async function handleClick() {
    await api.post('/playbooks', {
      categoriesName: inputs.categorie,
      name: inputs.name,
      categories: inputs.categorie,
      text: inputs.text,
    })

    navigation.reset({
      index: 0,
      routes: [{name: "Playbooks"}]
    })
  }

  const loadCategories= async (id) => {
    const apii = await api.get(`/categories/${id}`)
    setAllCategories(apii.data)
  }

  const setFullCategories = async () => {
    const id = JSON.parse( await AsyncStorage.getItem('@user')).id
    loadCategories(id)
  }


  useEffect(() => {
    setFullCategories()
  }, []);
  
  const inputName = {
    width: 324,
    height: 45,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#D7D7D7',
    borderRadius: 10,
  }

  const inputCategorie = {
    width: 324,
    height: 45,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#D7D7D7',
    borderRadius: 10,
  }

  const inputText = {
    width: 324,
    height: 504,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#D7D7D7',
    borderRadius: 10,
  }


  const button = {
    width: 80,
    height: 33,
    borderRadius: 60,
    backgroundColor: '#476EE6',
    left: 290,
    top: -10
  }

  const textButton = {
    position: 'absolute',
    top: 9,
    left: 24,
    color: 'white'
  }

  const containerInput = {
    padding: 30
  }

  return (
    <ScrollView>
      <View>
        <View style={containerInput}>
        <Text>Nome</Text>
        <TextInput style={inputName} value={inputs.name} onChangeText={(value) => handleChange('name', value)}/>
        </View>
        <View style={containerInput}>
        <Text>Categoria</Text>
        <Picker selectedValue={inputs.categorie} style={inputCategorie} onValueChange={(value) => handleChange('categorie', value)}>
          {
            allCategories?.map(({name, id}) => (
              <Picker.Item key={id} label={name} value={name} />
            ))
          }
        </Picker>
        </View>
        <View style={containerInput}>
         <TextInput multiline={true} numberOfLines={10} value={inputs.text} style={inputText} onChangeText={(value) => handleChange('text', value)}/>
        </View>
      </View>
      <Pressable onPress={handleClick} style={button}>
       <Text style={textButton}>Criar</Text>
      </Pressable>
    </ScrollView>
  );
}


export default PlaybooksCreate