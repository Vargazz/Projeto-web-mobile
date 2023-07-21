import { Picker } from "@react-native-picker/picker";
import React, {useEffect, useState } from "react";
import { Text, View, Image, Button, Pressable, Alert, TextInput, ScrollView } from 'react-native';
import api from '../../services/api';
import AsyncStorage from "@react-native-async-storage/async-storage";


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

const PlaybookUpdate = ({ navigation }) => {

  const [inputs, setInputs] = useState({
    name: '',
    text: '',
  });


  const handleChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
  };

  async function handleClick() {
    await api.put(`/playbooks/${categories.id}`, {
      name: inputs.name,
      text: inputs.text,
    })
    navigation.reset({
      index: 0,
      routes: [{name: "Playbooks"}]
    })

    await AsyncStorage.removeItem('@categorieEdit')
  }

  const getLocalStorage = async () => {
   const  usersString = await AsyncStorage.getItem('@categorieEdit');
    const userObj = JSON.parse(usersString);
    return userObj;
  };

  const [categories, setCategories] = useState();

  useEffect(() => {
    setCategories(getLocalStorage());
  }, []);

  return (
    <ScrollView>
      <View>
        <View style={containerInput}>
        <Text>Nome</Text>
        <TextInput style={inputName} value={inputs.name} onChangeText={(value) => handleChange('name', value)}/>
        </View>
        <View style={containerInput}>
        <Text>Categoria</Text>
        <Text>{categories?.categoriesName}</Text>
        </View>
        <View style={containerInput}>
         <TextInput multiline={true} numberOfLines={10} value={inputs.text} style={inputText} onChangeText={(value) => handleChange('text', value)}/>
        </View>
      </View>
      <Pressable onPress={handleClick} style={button}>
       <Text style={textButton}>Editar</Text>
      </Pressable>
    </ScrollView>
  );
}

export default PlaybookUpdate