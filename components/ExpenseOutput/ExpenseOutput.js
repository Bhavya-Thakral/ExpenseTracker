import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import ExpenseSummary from './ExpenseSummary'
import ExpenseList from './ExpenseList'
import { GlobalStyle } from '../../constants/style'



const ExpenseOutput = ({expense , expensePeriod , fallBack}) => {
let content = <Text style={styles.infoText}>{fallBack}</Text>

if(expense.length> 0){
  content =<ExpenseList expense={expense} />

}
  return (
    <View style={styles.container} >
      <ExpenseSummary expensePeriod={expensePeriod} expense={expense} />
      {content}
    </View>
  )
}

export default ExpenseOutput

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor:"#F5F5",
},
infoText:{
  color: GlobalStyle.color.primary1000,
  textAlign:"center",
  fontSize:18,
  marginTop:32
}

})