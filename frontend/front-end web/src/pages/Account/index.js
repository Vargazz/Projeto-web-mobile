import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import InputRegister from "../../components/inputsRegister";
import usuarioPadrao from '../../images/png/usuarioPadrao.png';
import api from '../../services/api'

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

const divForm = {
  boxSizing: 'border-box',
  position: 'absolute',
  width: '800px',
  height: '600px',
  left: '760px',
  top: '200px',
  background: '#FFFFFF',
  border: '1px solid #D7D7D7',
  borderRadius: '15px',
}

const nameInput = {
  position: 'absolute',
  width: '315px',
  height: '78px',
  left: '-650px',
  top: '0px',
}

const emailInput = {
  position: 'absolute',
  width: '315px',
  height: '78px',
  left: '-270px',
  top: '0px',
}

const passwordInput = {
  position: 'absolute',
  width: '315px',
  height: '78px',
  left: '-270px',
  top: '120px',
}

const numberInput = {
  position: 'absolute',
  width: '315px',
  height: '78px',
  left: '-650px',
  top: '120px',
}

const imgPerfil = {
  position: 'absolute',
  width: '115px',
  height: '115px',
  left: '330px',
  top: '50px'
}

const buttonSave = { 
  boxSizing: 'border-box',
  position: 'absolute',
  width: '190px',
  height: '43px',
  left: '290px',
  top: '500px',
  background: '#476EE6',
  border: '0.5px solid #D7D7D7',
  borderRadius: '60px',
  color: 'white'
}

const Account = () => {

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [number, setNumber] = useState()

  const navigate = useNavigate();

  const handleUpdateForm = ({ target }) => {
    setInputs((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const id = JSON.parse(localStorage.getItem('@user')).id


  const attAccount = async () => {
    try {
      await api.put(`/users/${id}`, {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      });
      localStorage.clear();
      navigate('/login')
    } catch (e) {
        window.alert("Email ja cadastrado")
    }
    };

  return(
    <div style={divCentral}>
      <NavBar style={navBarStyle}/>
      <Header name="Minha Conta"/>
      <div style={divForm}>
        <img alt="perfil" src={usuarioPadrao} style={imgPerfil} />
      <InputRegister style={nameInput}  nameLabel={"Nome"} name={"name"} onChange={ handleUpdateForm } value={inputs.name} placeholder="Insira seu novo nome"/>
      <InputRegister style={emailInput}  nameLabel={"E-mail"} name={"email"} onChange={ handleUpdateForm } value={inputs.email} placeholder="Insira seu novo email"/>
      <InputRegister style={numberInput}  nameLabel={"Número"} name={"number"} onChange={(e) => setNumber(e.target.value)} value={number} placeholder="Insira seu numero"/>
      <InputRegister style={passwordInput}  type="password" nameLabel={"Senha"} name={"password"} onChange={ handleUpdateForm } value={inputs.password} placeholder="Insira sua nova senha"/>
      <button type="button" style={buttonSave} onClick={ attAccount }>Salvar</button>
      </div>
    </div>
  )
}

export default Account;