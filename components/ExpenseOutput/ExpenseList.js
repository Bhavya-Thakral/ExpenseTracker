import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import ExpenseView from "./ExpenseView";

const expenseData = (itemData) => {
  // console.log("expense",itemData.item);
  return <ExpenseView {...itemData.item} />;
};

const ExpenseList = ({ expense }) => {


  // console.log("expense" , expense);

  return (
    <View style={styles.component}>
      <FlatList
        data={expense}
        renderItem={expenseData}
        keyExtractor={(item) =>
          item.id
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ExpenseList;

const styles = StyleSheet.create({
  component: {
    width: "90%",
   marginBottom:60
  },
});
