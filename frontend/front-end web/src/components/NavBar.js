import React from "react";
import { useNavigate } from 'react-router-dom';
import ImageLogo from "./logoImg";
import rei from '../images/png/rei.png'
import lista from '../images/png/lista.png';
import comente from '../images/png/comente.png';
import engrenagem from '../images/png/engrenagem.png';
import doUtilizador from '../images/png/do-utilizador.png';
import sair from '../images/png/sair.png';

const divImg = {
  position: 'absolute',
  width: '153px',
  height: '38.27px',
  left: '28px',
  top: '46px',
}

const buttonStyle = {
  background: 'white',
  border: 'none',
  cursor: 'pointer'
}

const pĺaybook = {
  position: 'absolute',
  width: '145px',
  height: '23px',
  left: '48px',
  top: '10px',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '20px',
  lineHeight: '22px',
}

const Exemplo1 = {
  position: 'absolute',
  width: '145px',
  height: '23px',
  fontStyle: 'normal',
  fontWeight: '500',
  left:'48px',
  top: '70px',
  fontSize: '20px',
  lineHeight: '22px',
}

const Exemplo2 = {
  position: 'absolute',
  width: '140px',
  height: '23px',
  left:'48px',
  top: '135px',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '20px',
  lineHeight: '22px',
}

const Exemplo3 = {
  position: 'absolute',
  width: '140px',
  height: '23px',
  fontStyle: 'normal',
  left:'48px',
  top: '195px',
  fontWeight: '500',
  fontSize: '20px',
  lineHeight: '22px',
}

const account= {
  position: 'absolute',
  width: '140px',
  height: '23px',
  fontStyle: 'normal',
  left:'48px',
  top: '255px',
  fontWeight: '500',
  fontSize: '20px',
  lineHeight: '22px',
}

const imgPlaybook = {
  width: '30px',
  height: '35px',
  top: '8px',
  left: '12px'
}

const divItens = {
  position: 'absolute',
  width: '205px',
  height: '544px',
  left: '12px',
  top: '46px',
}

const orderOptions = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0px',
  gap: '21px',
  position: 'absolute',
  width: '205px',
  height: '279px',
  left: '12px',
  top: '137px',
}

const exitText = { 
  position: 'absolute',
  width: '50px',
  height: '50px',
  left: '90px',
  top: '710px',
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '20px',
  lineHeight: '19px',
}

const imgExit = {
  position: 'absolute',
  width: '50px',
  height: '50px',
  left: '28px',
  top: '690px',
}

const NavBar = ({style}) => {

  const navigate = useNavigate()

  const logoutAccount = () => {
    localStorage.clear()
    navigate('/login');
  }

  return(
    <div style={style}>
      <div style={divItens}>
        <ImageLogo  style={divImg}/>
        <div style={orderOptions}>
          <button type="button" style={buttonStyle} onClick={() => navigate('/playbooks')}>
            <img alt="rei" src={rei} style={imgPlaybook} />
            <span style={pĺaybook}>Playbooks</span>
          </button>
          <button style={buttonStyle}>
            <img alt="rei" src={lista} style={imgPlaybook} />
            <span style={Exemplo1}>Exemplo</span>
          </button>
          <button style={buttonStyle}>
            <img alt="rei" src={comente} style={imgPlaybook} />
            <span style={Exemplo2}>Exemplo</span>
          </button>
          <button style={buttonStyle}>
            <img alt="rei" src={engrenagem} style={imgPlaybook} />
            <span style={Exemplo3}>Exemplo</span>
          </button>
          <button style={buttonStyle} onClick={() => navigate('/account')}>
            <img alt="rei" src={doUtilizador} style={imgPlaybook} />
            <span style={account}>Minha Conta</span>
          </button>
        </div>
        <div>
        <button style={buttonStyle} onClick={ logoutAccount }>
        <img alt="rei" src={sair} style={imgExit} />
            <span style={exitText}>Logout</span>
        </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar;