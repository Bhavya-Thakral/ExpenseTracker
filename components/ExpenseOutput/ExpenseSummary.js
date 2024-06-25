import { View, Text, StyleSheet } from "react-native";
import React from "react";
const ExpenseSummary = ({ expense, expensePeriod }) => {
  const expenseSum = expense?.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{expensePeriod}</Text>
      <Text style={styles.txt}>${expenseSum?.toFixed(2)}</Text>
    </View>
  );
};

export default ExpenseSummary;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor:"#F3E5F5",
    borderColor:"#4A148C"
  },
  txt:{
    color: "#4A148C",
    textTransform:"capitalize",
    fontWeight:"bold"

  }
});
