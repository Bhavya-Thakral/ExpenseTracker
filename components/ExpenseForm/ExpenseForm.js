import { StyleSheet,  View } from 'react-native'
import React from 'react'
import Input from "./Input"


const ExpenseForm = () => {
  return (
    <View style={styles.container} >
     <Input title="Amount" textInputConfig={{
        keyboardType:"num-pad"
     }} />
    </View>
  )
}

export default ExpenseForm

const styles = StyleSheet.create({
  container:{
    width:"90%",
    alignItems:"center",
    marginTop:10
  }
})