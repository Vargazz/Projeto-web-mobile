import React, {useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import api from '../../services/api'
import InputRegister from "../../components/inputsRegister";
import InputImage from "../../components/imageSteveJobs";
import ImageLogo from "../../components/logoImg";


const nameInput = {
  position: 'absolute',
  height: '78.38471221923828px',
  width: '290px',
  left: '425px',
  top: '30px',
  borderRadius: '10px',
}

const emailInput = {
  position: 'absolute',
  height: '78.38471221923828px',
  width: '290px',
  left: '750px',
  top: '30px',
  borderRadius: '10px',
}

const passwordInput = {
  position: 'absolute',
  height: '78.38471221923828px',
  width: '290px',
  left: '425px',
  top: '130px',
  borderRadius: '10px',
}

const validPasswordInput = {
  position: 'absolute',
  height: '78.38471221923828px',
  width: '290px',
  left: '750px',
  top: '130px',
  borderRadius: '10px',
}

const titlePage = {
  position: 'absolute',
  width: '277px',
  height: '36px',
  left: '1140px',
  top: '178px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '36px',
  letterSpacing: '0.03em',
  color: '#476EE6',
}

const divTermos = {
  position: 'absolute',
  width: '602px',
  height: '106.13px',
  left: '1140px',
  top: '480px',
}

const titleTermos = {
  fontSize: '18px',
  fontWeight: '600',
  lineHeight: '20px',
  fontStyle: 'normal',
  color: 'black'
}

const termosEnd = {
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '20px',
  fontStyle: 'normal',
  color: '#476EE6'
}

const buttonCadastro = {
  position:'absolute',
  height: '45.36837387084961px',
  width: '267px',
  left: '1330px',
  top: '650px',
  borderRadius: '60px',
  background: '#476EE6',
  color: 'white',
  fontSize: '18px',
  fontWeight: '600',
  lineHeight: '20px',
  cursor: 'pointer'
}

const buttonCadastroDisable = {
  position:'absolute',
  height: '45.36837387084961px',
  width: '267px',
  left: '1330px',
  top: '650px',
  borderRadius: '60px',
  background: 'rgb(161, 180, 238)',
  color: 'white',
  fontSize: '18px',
  fontWeight: '600',
  lineHeight: '20px',
  cursor: 'pointer'
}

const divLogin = {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'space-evenly',
  width: '223px',
  height: '23px',
  left: '1360px',
  top: '750px',
}

const pLogin = {
  color:'#476EE6',
  cursor: 'pointer'
}

const divImg = {
  position: 'absolute',
  width: '190px',
  height: '48px',
  left: '1140px',
  top: '88px',
}

const divCadastro = {
  position: 'absolute',
  left: '150px',
  top: '70px'
}

const Register = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [confirmPassword , setConfirmPassword] = useState()
  const [isVisible, setIsVisible] = useState(false);
  const [button, setButton] = useState(true);
  const [checked, setChecked] = useState();
  
  const navigate = useNavigate()


  const handleRegisterForm = ({ target }) => {
    setInputs((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };


useEffect(() => {
  const minimumNameLength = 12;
  const minimumPasswordLength = 6;
  const isValidName = inputs.name.length >= minimumNameLength;
  const isValidEmail = /^[^@^ ]+@[^@^ ]+\.[a-z]{2,3}(\.[a-z]{2})?$/.test(inputs.email);
  const isValidPassword = inputs.password.length >= minimumPasswordLength;
  const isValidConfirmPassword = confirmPassword?.length >= minimumPasswordLength
  return setButton(!(isValidName && isValidEmail && isValidPassword && checked && isValidConfirmPassword));
}, [inputs, checked, confirmPassword]);


const registerUser = async () => {
  try {
    await api.post('/register', {
      name: inputs.name,
      email: inputs.email,
      password: inputs.password,
    });
    setIsVisible(() => false);
    navigate('/login')
  } catch (e) {
    setIsVisible(() => true);
    if(isVisible) {
      window.alert("Email ja cadastrado")
    }
  }
}



  return(
    <div>
      <div>
        <InputImage />
      </div>
      <div style={divCadastro}>
        <ImageLogo  style={divImg}/>
        <h1 style={titlePage}>Cadastro</h1>
        <InputRegister style={nameInput}  nameLabel={"Nome"} name={"name"} onChange={ handleRegisterForm } value={inputs.name} placeholder="Insira seu nome"/>
        <InputRegister style={emailInput}  nameLabel={"Email"} name={"email"} onChange={ handleRegisterForm } value={inputs.email} placeholder="Insira seu e-mail"/>
        <InputRegister style={passwordInput} nameLabel={"Senha"} name={"password"} onChange={ handleRegisterForm } value={inputs.password} placeholder="Insira sua senha" type="password"/>
        <InputRegister style={validPasswordInput} nameLabel={"Confirme sua Senha"} name={"confirm-password"} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirma Senha" type="password"/>
        <div style={divTermos}>
          <p style={titleTermos}>Termos de uso e privacidade</p>
          <input type="checkbox" onChange={(e) => setChecked(e.target.checked)} /><span> Ao clicar neste botão, eu concordo com os  termos de uso e privacidade da nossa empresa.</span>
          <p style={termosEnd}>Termos de uso e Privacidade</p>
        </div>
        <button style={button ? buttonCadastroDisable : buttonCadastro} disabled={ button } type='button' onClick={ registerUser }>Cadastrar</button>
        <div style={divLogin}>
        <p className="textPrimaryNotRegister">Já e cadastrado?</p>
        <p style={pLogin}  className="textSecondaryNotRegister" onClick={() => navigate('/login')}>Login</p>
        </div>
      </div>

    </div>
  )
}

export default Register;