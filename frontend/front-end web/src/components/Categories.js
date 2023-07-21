import React, { useState, useEffect} from "react";
import api from '../services/api'

const centralCategories = {
  boxSizing: 'border-box',
  position: 'absolute',
  width: '280px',
  height: '640px',
  left: '450px',
  top: '190px',
  background: '#FFFFFF',
  border: '1px solid #D7D7D7',
  borderRadius: '10px',
}

const adicionaCategorie = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0px',
  gap: '7px',
  width: '224px',
  height: '25px',
  flex: 'none',
  order: '5',
  flexGrow: '0',
  border:'none',
  background: 'white',
  cursor: 'pointer',
}

const addText = {
  width: '197px',
  height: '25px',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '165%',
  letterSpacing: '0.005em',
  color: '#476EE6',
  flex: 'none',
  order: '1',
  flexGrow: '0', 
}

const title = {
  borderBottom: 'solid 2px black',
  width: '90px',
  height: '18px',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '18px',
  display: 'flex',
  alignItems: 'center',
  color:'#101828',
}

const Categories = ({ setAllPlaybooks }) => {

  const [allCategories, setAllCategories] = useState([])
  const [viewInput, setViewInput] = useState(false)
  const [categorieInput, setCategorieInput] = useState()

  async function handleClick() {
    const {data: { userId }} = await api.post('/categories', {
      userName: JSON.parse(localStorage.getItem('@user')).name,
      name: categorieInput,
    })
    const apii = await api.get(`/categories/${userId}`)
    setAllCategories(apii.data)
    setViewInput(false)
  }
  

  const loadCategories= async (id) => {
    const apii = await api.get(`/categories/${id}`)
    setAllCategories(apii.data)

  }

  const loadPlaybooks = async (id) => {
    const apii = await api.get(`/playbooks/${id}`)
    setAllPlaybooks(apii.data)
  } 

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem('@user')).id
    loadCategories(id)
  }, []);

  return(
    <div style={centralCategories}>
      <h1 style={title}>Categories</h1>
      {viewInput &&
        <div>
          <input type="text" onChange={(e) => setCategorieInput(e.target.value)} />
          <button type="button" onClick={handleClick}>Salvar</button>
        </div>
      }
      {allCategories?.map(({ name, id }, index) => (
        <button style={adicionaCategorie} onClick={() => loadPlaybooks(id)} key={index}><span style={addText}>{name}</span></button>
      ))

      }
      <button type="button" style={adicionaCategorie} onClick={() => setViewInput(true)}><span style={addText}> + Adicionar nova categoria </span></button>
    </div>
  )
}

export default Categories;