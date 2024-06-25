import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalStyle } from '../../constants/style'

const Button = ({children,onPress,mode ,style}) => {
  return (
    <View style={style}>
      <Pressable onPress={onPress}>
        <View style={[styles.button,mode==="flat" && styles.flat]}>
            <Text style={[styles.buttonText,mode==="flat" && styles.flatText]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({

    button:{
        padding:5,
        margin:10,
        borderRadius:5,
        backgroundColor: GlobalStyle.color.primary1000,
        height:40,
        justifyContent:"center",

    },
    flat:{
        backgroundColor:"transparent",
    },
    buttonText:{
        color: GlobalStyle.color.primary100,
        textAlign:"center",
        fontSize:16,
        fontWeight:"600"
    },
    flatText:{
        color: GlobalStyle.color.primary1000,
        textAlign:"center",
        fontWeight:"400",
      
    },
    pressed:{
        opacity:0.5,
        borderRadius:5,
        backgroundColor: GlobalStyle.color.primary100,
    }


})