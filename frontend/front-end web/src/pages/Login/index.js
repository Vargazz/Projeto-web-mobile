import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import api from '../../services/api'
import InputImage from "../../components/imageSteveJobs";
import InputLogin from "../../components/inputLogin";
import ImageLogo from "../../components/logoImg";

const emailInput = {
  position: 'absolute',
  height: '78.49px',
  width: '418px',
  left: '550px',
  top:'80px',
  borderRadius: '10px',
}

const passwordInput = {
  position: 'absolute',
  height: '78.49px',
  width: '418px',
  left: '550px',
  top:'200px',
  borderRadius: '10px',
}

const titlePage = {
  position: 'absolute',
  width: '218px',
  height: '36px',
  left: '1355px',
  top: '247px',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '36px',
  letterSpacing: '0.03em',
  color: '#476EE6',
}

const divImg = {
  position: 'absolute',
  width: '190px',
  height: '48px',
  left: '1350px',
  top: '160px',
}

const loginButton = {
  position: 'absolute',
  width: '185px',
  height: '48px',
  left: '1350px',
  top: '580px',
  background: '#476EE6',
  borderRadius: '60px',
  color: 'white',
  cursor: 'pointer'
}

const loginButtonDisable = {
  position: 'absolute',
  width: '185px',
  height: '48px',
  left: '1350px',
  top: '580px',
  background: 'rgb(161, 180, 238)',
  borderRadius: '60px',
  color: 'white',
  cursor: 'pointer'
}

const passwordErr = {
  position: 'absolute',
  width: '137px',
  height: '20px',
  left: '1650px',
  top: '595px',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '20px',
  textAlign: 'center',
  color: '#476EE6',
  cursor: 'pointer'
}

const divForm = {
  position: 'absolute',
  top: '90px'
}

const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const [button, setButton] = useState(true);

  const [isVisible, setIsVisible] = useState(false);

  const handleLoginForm = ({ target }) => {
    setInputs((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const navigate = useNavigate()

  const loadUser = async () => {
    try {
      const { data } = await api.post('/login', {
        email: inputs.email,
        password: inputs.password,
      });
      localStorage.setItem('@user', JSON.stringify(data));
      console.log(data);
      setIsVisible(() => false);
      navigate('/playbooks')
    } catch (e) {
      setIsVisible(() => true);
      if(isVisible) {
        window.alert("Conta não existe")
      }
    }
  };

  useEffect(() => {
    const minimumPasswordLength = 6;
    const isValidEmail = /^[^@^ ]+@[^@^ ]+\.[a-z]{2,3}(\.[a-z]{2})?$/.test(inputs.email);
    const isValidLength = inputs.password.length >= minimumPasswordLength;
    return setButton(!(isValidEmail && isValidLength));
  }, [inputs]);

  return(
    <div>
      <div>
      <InputImage />
      </div>
      <div style={divForm}>
        <ImageLogo  style={divImg}/>
        <h1 style={titlePage}>Dados de Acesso</h1>
        <InputLogin style={emailInput} nameLabel={"E-mail"} value={ inputs.email } name={"email"} onChange={ handleLoginForm } placeholder="Insira seu e-mail"/>
        <InputLogin style={passwordInput} nameLabel={"Senha"} value={ inputs.password } name={"password"} type="password" onChange={ handleLoginForm } placeholder="Insira sua senha"/>
        <button style={button ? loginButtonDisable : loginButton} disabled={ button } onClick={ loadUser } type="button">Entrar</button> 
        <span style={passwordErr}>Esqueceu a senha?</span>
      </div>
    </div>
  )
}

export default Login