import React from "react";
import logo from '../images/png/f1eb8ef5713ffa8ebff20aa8ab18e1f9.png'


const divImg = {
  position: 'absolute',
  width: '190px',
  height: '48px',
  left: '716px',
  top: '88px',
}


const imageLogo = ({style}) => {

  return(
    <div>
      <img src={logo} alt="steve" style={style}/>
    </div>
  )

}

export default imageLogo