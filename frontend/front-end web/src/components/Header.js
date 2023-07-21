import React , { useState, useEffect } from "react";
import usuarioPadrao from '../images/png/usuarioPadrao.png';

const divCentral = {
  position: 'absolute',
  width: '1300px',
  height: '54.23px',
  left: '550px',
  top: '70px',
}

const divProfile = {
  boxSizing: 'border-box',
  position: 'absolute',
  width: '234.43px',
  height: '54.23px',
  left: '1060px',
  top: '0px',
  background: '#FFFFFF',
  border: '1px solid #D8D8D8',
  borderRadius: '60px',
}

const titlePage = { 
  position: 'absolute',
  width: '341px',
  height: '34px',
  left: '5px',
  top: '-10px',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '30px',
  lineHeight: '24px',
  display: 'flex',
  alignItems: 'center',
  letterSpacing: '0.101193px,',
  color: '#476EE6'
}

const userName = {
  position: 'absolute',
  width: '146.76px',
  height: '16px',
  left: '70px',
  top: '18px',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '17px',
  lineHeight: '16px',
  color: '#000000',
}

const imgUser = {
  boxSizing: 'border-box',
  position: 'absolute',
  width: '42px',
  height: '42px',
  left: '15px',
  top: '5px',
}

const Header = ({ name }) => {

  const getLocalStorage = () => {
    const usersString = localStorage.getItem('@user');
    const userObj = JSON.parse(usersString);
    return userObj;
  };

  
  const [user, setUser] = useState();
  
  useEffect(() => {
    setUser(getLocalStorage());
  }, []);


  return(
    <div style={divCentral}>
      <h1 style={titlePage}>{name}</h1>
      <div style={divProfile}>
        <span style={userName}>{user?.name}</span>
        <img alt="user" src={usuarioPadrao} style={imgUser}/>
      </div>
    </div>
  )

}

export default Header