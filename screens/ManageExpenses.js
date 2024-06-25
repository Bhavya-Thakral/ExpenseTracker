import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";
import Button from "../components/UI/Button";
import { GlobalStyle } from "../constants/style";
import { ExpenseContext } from "../store/expense-context";
import ExpenseForm from "../components/ExpenseForm/ExpenseForm";

const ManageExpenses = ({ route, navigation }) => {

  const expenseCtx= useContext(ExpenseContext);

  const editExpense = route.params?.expenseId;
  const isEditing = !!editExpense;

  const expenseTitle = route.params?.expenseTitle;
  console.log("expenseTitle", expenseTitle);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteHandler() {
    expenseCtx.deleteExpense(editExpense);
    navigation.goBack();

  }
  function cancelHandler() {
    navigation.goBack();
  }
  function saveHandler() {
    if(isEditing){
      expenseCtx.updateExpense(
        editExpense,
        {
          title:"bhavya",
          amount:999,
          date:new Date(2024,6,25)
        }
      )
    }
    else{
      expenseCtx.addExpense({
        title:"bhavya Thakral",
        date:new Date(2024,6,20),
        amount:99.99
      })
    }
    navigation.goBack();

  }

  return (
    <View style={styles.container}>
      {isEditing && (
        <View style={styles.deleteContainer}>
          {/* <TextInput
            style={styles.textInput}
            placeholder={"Edit Expense"}
            defaultValue={expenseTitle}
            editable={false}
          /> */}
          <IconButton
            icon="trash"
            size={28}
            color="red"
            onPress={deleteHandler}
          />
        </View>
      )}
        <ExpenseForm />
      <View style={styles.buttonContainer}>
        <Button mode="flat" style={{width:"50%"}} onPress={cancelHandler} >Cancel</Button>
        <Button style={{width:"50%"}} onPress={saveHandler}>{isEditing ? "Save":"Add"}</Button>
      </View>
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:"center",
    alignItems: "center",
  },
  deleteContainer: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "80%",
    marginVertical: 10,
  },
  textInput: {
    width: "80%",
    borderBottomWidth: 1,
    padding: 5,
    marginVertical: 10,
    borderBottomColor: GlobalStyle.color.textGrey,
    color: GlobalStyle.color.textBlack,
  },
  buttonContainer:{
    flexDirection:"row",
    justifyContent:"space-around",
    width:"80%",
  }
});
