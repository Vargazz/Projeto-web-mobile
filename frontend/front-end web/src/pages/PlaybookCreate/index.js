import React from "react";
import { useNavigate } from 'react-router-dom';
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import InputsCard from "../../components/InputsCard";

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

const voltar = '<'

const buttonBack = {
  position: 'absolute',
  width: '40px',
  height: '35px',
  top: '80px',
  left: '460px',
  background: '#476EE6',
  color: 'white',
  border: 'none',
  fontSize: '30px',
  borderRadius: '20px',
  cursor: 'pointer'
}


const PlaybooksCreate = () => {
  const navigate = useNavigate()

  return(
    <div style={divCentral}>
      <NavBar style={navBarStyle}/>
      <button type='button'style={buttonBack} onClick={() => navigate('/playbooks')}><span>{voltar}</span></button>
      <Header name="Criar Card"/>
      <InputsCard />
    </div>
  )
}

export default PlaybooksCreate;