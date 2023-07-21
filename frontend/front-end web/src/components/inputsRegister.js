import React from "react";

const input = {
  width: '290px',
  height:'50.06px',
  boxSizing: 'border-box',
  position: 'absolute',
  left: '716px',
  top: '269.32px',
  borderRadius: '10px'
}


const label = {
  position: 'absolute',
  width: '208.35px',
  height: '14px',
  left: '716.94px',
  top: '241px',
  
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '18px',
}

const InputRegister = ({ nameLabel, placeholder, onChange, type, style, value, name }) => {

  return(
    <div style={style}>
      <label className="labelInput" style={label}>{nameLabel}</label>
      <input className="inputRegister"  name={name} value={value} onChange={onChange} type={type} placeholder={placeholder} style={input} />
    </div>
  )

}

export default InputRegister