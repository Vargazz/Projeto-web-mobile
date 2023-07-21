import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import api from '../services/api'


  const firstDiv = {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '25px',
    gap: '10px',
    position: 'absolute',
    width: '1261px',
    height: '123px',
    left: '510px',
    top: '152px',
    background: '#FFFFFF',
    border: '1px solid #D7D7D7',
    borderRadius: '10px' 
  }

  const nameInput = {
    position: 'absolute',
    width: '570px',
    height: '45px',
    top: '40px',
    left: '28px',
    borderRadius: '7px'
  }

  const optionInput = {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '370px',
    height: '45px',
    left: '800px',
    top: '45px',
    background: '#FFFFFF',
    border: '1px solid #D7D7D7',
    borderRadius: '7px',
  }

  const categoText = {
    position: 'absolute',
    left: '800px',
    top:'15px'
  }

  const nameText = {
    position: 'absolute',
    top:'15px'
  }

  const textArea = {
    position: 'absolute',
    top: '200px',
    left: '0px',
    borderRadius: '10px'
  }

  const button = {
    position: 'absolute',
    width: '165px',
    height: '45px',
    left: '1600px',
    top: '850px',
    fontSize: '20px',
    color: 'white',
    background: '#476EE6',
    borderRadius: '60px',
    cursor: 'pointer'
  }

const PlaybooksCreate = () => {
  const [inputs, setInputs] = useState({
    name: '',
    categorie: '',
    text: '',
  });
  const [allCategories, setAllCategories] = useState([])

  const handleChange = ({ target }) => {
    setInputs((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const navigate = useNavigate();

  async function handleClick() {
    await api.post('/playbooks', {
      categoriesName: inputs.categorie,
      name: inputs.name,
      categories: inputs.categorie,
      text: inputs.text,
    })

    navigate('/playbooks')
  }

  const loadCategories= async (id) => {
    const apii = await api.get(`/categories/${id}`)
    setAllCategories(apii.data)
  }

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('@user')).id
    loadCategories(id)
  }, []);

  return(
    <div>
        <div style={firstDiv}>
          <label style={nameText}>Nome</label>
         <input style={nameInput} name={"name"} onChange={ handleChange } value={inputs.name} placeholder="Insira um nome"/>
         <lable style={categoText}>Categoria</lable>
          <select value={inputs.categorie} name={"categorie"} onChange={ handleChange } style={ optionInput }>
            <option>Selecione</option>
          {allCategories?.map(({ name, id }) => (
            <option kay={id} value={name}>{name}</option>
            ))
          }
          </select>
          <textarea value={inputs.text}type="textarea" style={textArea}  name={"text"} onChange={ handleChange } cols="154" rows="30"  placeholder="Escreva algo"></textarea>
        </div>
        <button type="button" style={button} onClick={ () => handleClick() }>Criar</button>
    </div>
  )
}

export default PlaybooksCreate;