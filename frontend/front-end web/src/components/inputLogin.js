import React from "react";

const input = {
  width: '418px',
  height:'50.06px',
  boxSizing: 'border-box',
  position: 'absolute',
  left: '808px',
  top: '270px',
  borderRadius: '10px'
}


const label = {
  position: 'absolute',
  width: '222px',
  height: '14px',
  left: '809px',
  top: '240px',
  
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '18px',
}

const InputLogin = ({ nameLabel, placeholder, onChange, type, style, name, value }) => {

  return(
    <div style={style}>
      <label className="labelInput" style={label}>{nameLabel}</label>
      <input className="inputRegister" name={name} value={value} onChange={onChange} type={type} placeholder={placeholder} style={input} />
    </div>
  )

}

export default InputLogin