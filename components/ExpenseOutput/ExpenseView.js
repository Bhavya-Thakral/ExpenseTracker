import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { formattedDate } from "../../util/Date";
import { useNavigation } from "@react-navigation/native";


const ExpenseView = ({id, title, amount, date }) => {
  
  const navigation = useNavigation();
  
  // console.log("date",date);
  
  function expenseHandler() {
    navigation.navigate("ManageExpenses",{expenseId:id , expenseTitle:title});
  }

  return (
    <Pressable style={({ pressed }) => pressed && styles.press} onPress={expenseHandler} >
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{formattedDate(date)}</Text>
        </View>
        <Text style={styles.amount}>{amount}</Text>
      </View>
    </Pressable>
  );
};

export default ExpenseView;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 5,
    backgroundColor: "#F3E5F5",
    width: "100%",
    borderWidth: 1,
    borderColor: "#4A148C",
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#424242",
  },
  amount: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#4A148C",
  },
  date: {
    fontSize: 14,
    color: "#424242",
  },
  press: {
    opacity: 0.90,
  },
});
