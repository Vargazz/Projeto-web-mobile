import React from 'react';
import { ScrollView, StyleSheet, TextInput , Text, View } from 'react-native';

const input = {
  width: 324,
  height: 50,
  backgroundColor: 'white',
  borderWidth: 1,
  borderColor: '#D7D7D7',
  borderRadius: 10,
}

const InputRegister = ({ nameLabel, placeholder, onChangeText, type, style, defaultValue, name, trueOrFalse }) => {

  return(
    <View style={style}>
      <Text className="labelInput">{nameLabel}</Text>
      <TextInput className="inputRegister" secureTextEntry={trueOrFalse} name={name} defaultValue={defaultValue} onChangeText={onChangeText} type={type} placeholder={placeholder} style={input} />
    </View>
  )

}

export default InputRegister