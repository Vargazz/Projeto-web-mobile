import React , {useEffect, useState } from 'react';
import { ScrollView , Pressable, View, Text, TextInput } from 'react-native';
import api from '../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage';

const viewCategories = {
  width: 333,
  height: 289,
  backgroundColor: 'white',
  borderWidth: 1,
  borderColor: '#D7D7D7',
  borderRadius: 10,
  top: 100,
  left: 25
}

const textAdd ={
  width: 197,
  height: 25,
  fontSize: 15,
  fontWeight: 500
}

const Categories = ({navigation, setAllPlaybooks, setAllPlaybooksView}) => {

  const [allCategories, setAllCategories] = useState([])
  const [viewInput, setViewInput] = useState(false)
  const [categorieInput, setCategorieInput] = useState('')

  async function handleClick() {
    const {data: { userId }} = await api.post('/categories', {
      userName: JSON.parse(await AsyncStorage.getItem('@user')).name,
      name: categorieInput,
    })
    const apii = await api.get(`/categories/${userId}`)
    setAllCategories(apii.data)
    setViewInput(false)
    setCategorieInput()
  }
  

  const loadCategories= async (id) => {
    const apii = await api.get(`/categories/${id}`)
    setAllCategories(apii.data)

  }

  const loadPlaybooks = async (id) => {
    const apii = await api.get(`/playbooks/${id}`)
    setAllPlaybooks(apii.data)

    setAllPlaybooksView(true)
  } 

  const setFullCategories = async () => {
    const id = JSON.parse( await AsyncStorage.getItem('@user')).id
    loadCategories(id)
  }

  useEffect(() => {
    setFullCategories()
  }, []);

  const handleChange = (value) => {
    setCategorieInput(value);
  };

  const titleText = {
    position: 'absolute',
    width:90,
    height: 18,
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 18,
    left: 20,
    top: 20
  }
  const categories = {
    position: 'absolute',
    width:298,
    height: 39,
    top: 55
  }

  const textCategorie = {
    color: 'blue',
    padding: 10
  }

  return(
    <ScrollView style={viewCategories}>
      <Text style={titleText}>Categories</Text>
      <View style={categories}>
      {
        allCategories?.map(({ name, id }, index) => (
          <Pressable onPress={() => loadPlaybooks(id)} key={index} >
            <Text style={textCategorie}>{name}</Text>
          </Pressable>
        ))
      }
      {
        viewInput && 
        <View>
          <TextInput placeholder="Digite a Categoria" onChangeText={handleChange} value={categorieInput}/>
          <Pressable onPress={handleClick}>
            <Text style={textAdd}>Salvar</Text>
          </Pressable>
        </View>
      }
      <Pressable onPress={() => setViewInput(true)}>
       <Text style={textCategorie}>+ Adicionar nova categoria</Text>
      </Pressable>
      </View>
    </ScrollView>
  )

}

export default Categories