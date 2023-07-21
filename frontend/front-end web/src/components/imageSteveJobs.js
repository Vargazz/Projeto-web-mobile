import React from "react";
import steveJobs from '../images/png/fb6c96b07af7c3976db71fe4f0d45bea.png'
import fundoSteve from '../images/png/efda7748fd6624f33c46b340e124a5cb.png'


const fundo = {
  position: 'absolute',
  width: '1200px',
  height: '978px',
  left: '-270px',
  top: '0px',
  size: '10px'
}

const steve = {
  position: 'absolute',
  width: '1200px',
  height: '900px',
  left: '-260px',
  top: '78px',
  // border: 'solid red 2px'
}

const divImg = {
  position: 'absolute',
  width: '930px',
  height: '978px',
  left: '70px',
  top: '0px',
  borderRight: 'solid gray 2px',
  boderRadius: '60px'
}


const imageSteveJobs = () => {

  return(
    <div style={divImg}>
      <img src={fundoSteve} alt="steve" style={fundo}/>
      <img src={steveJobs} alt="steve" style={steve}/>
    </div>
  )

}

export default imageSteveJobs