import React, { useContext } from 'react'
import ExpenseOutput from '../components/ExpenseOutput/ExpenseOutput'
import { ExpenseContext } from '../store/expense-context';

const AllExpenses = () => {
  const expenseCtx=useContext(ExpenseContext);
  return (
   <ExpenseOutput expense={expenseCtx.expenses} expensePeriod={"total"} fallBack="No Expenses yet" />
  )
}

export default AllExpenses