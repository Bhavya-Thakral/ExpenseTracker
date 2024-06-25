import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { GlobalStyle } from '../../constants/style'

const Input = ({title , textInputConfig}) => {
  return (
    <View style={styles.container} >
      <Text style={styles.text} >{title}</Text>
      <TextInput style={styles.input} {...textInputConfig} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container:{
    width:"100%",
    // backgroundColor:"pink"
   
  },
  text:{
    fontSize:16,
    fontWeight:"500",
    color:GlobalStyle.color.primary1000
  },
  input:{
    borderWidth:1,
    borderRadius:5,
    backgroundColor: GlobalStyle.color.primary100,
    borderColor: GlobalStyle.color.primary1000
  }
})