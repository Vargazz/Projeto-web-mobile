import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import Categories from "../../components/Categories";

const divCentral = { 
  position: 'relative',
  width: '2133px',
  height: '978px',
  background: '#F7F9FB',
}

const navBarStyle = {
  position: 'absolute',
  width: '250px',
  height: '976px',
  left: '0px',
  top: '0px',
  background: '#FFFFFF',
  border: '1px solid #D7D7D7',
  borderRadius: '17px',
}

const buttonAdd ={
  position: 'absolute',
  width: '65px',
  height: '65px',
  left: '1950px',
  top: '810px',
  background:'#476EE6',
  borderRadius: '60px',
  cursor: 'pointer'
}

const addText = {
  fontSize: '40px',
  color: 'white'
}

const playbookDiv = {
  boxSizing: 'border-box',
  width: '664px',
  height: '231px',
  background: '#FFFFFF',
  border: '1px solid #D7D7D7',
  borderRadius: '10px',
  margin: '10px'
}

const allDivPlaybooks = {
  position: 'absolute',
  left: '935px',
  top: '180px',
}

const namePlaybooks = {
  position: 'absolute',
  left:'60px',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '17px',
  lineHeight: '26px',
  display: 'flex',
  alignItems: 'center',
  color: '#000000',
}

const buttonEdit = {
  position: 'absolute',
  width: '102px',
  height: '35px',
  left: '500px',
  background: '#476EE6',
  borderRadius: '60px',
  color: 'white',
  cursor: 'pointer'
}

const divFirst = {
  width: '662px',
  height:'60px',
  display: 'flex',
  alignItems: 'center',
  borderBottom: 'solid #E8E8E8 2px'
}

const divtext = {
  overflowY: 'scroll',
  height: '160px',
}

const playbookText = {
  display: 'block',
  left: '60px',
}

const Playbooks = () => {
  const navigate = useNavigate()

  const [allPLaybooks, setAllPlaybooks] = useState([])

  console.log(allPLaybooks);

  const getCategorieID = (id, categoriesName) => {
    const categorie = {
      id,
      categoriesName,
    }
    localStorage.setItem('@categorieEdit', JSON.stringify(categorie));
    navigate('/playbooks/update')
  }

  console.log(allPLaybooks);

  return(
    <div style={divCentral}>
      <NavBar style={navBarStyle}/>
      <Header name="Playbooks"/>
      <Categories setAllPlaybooks={ setAllPlaybooks }/>
      <div style={allDivPlaybooks}>
        {
          allPLaybooks.map(({ id, name , text, categoriesName }, index) => (
            <div key={index} style={playbookDiv}>
              <div style={divFirst}>
              <span style={namePlaybooks}>{name}</span>
              <button type="button" style={buttonEdit} onClick={() => getCategorieID(id, categoriesName) }>Editar</button>
              </div>
              <div style={divtext}>
              <span style={playbookText}>{text}</span>
              </div>
            </div>
          ))
        }
      </div>
      <button type="button" onClick={() => { navigate('/playbooks/create') }} style={buttonAdd}><span style={addText}>+</span></button>
    </div>
  )
}

export default Playbooks;