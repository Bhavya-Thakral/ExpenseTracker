
import React, { useContext } from 'react'
import ExpenseOutput from '../components/ExpenseOutput/ExpenseOutput'
import { ExpenseContext } from '../store/expense-context'
import { getDateMinusDays } from '../util/Date';

const RecentExpenses = () => {

  const expenseCtx= useContext(ExpenseContext);

  const recentExpenses = expenseCtx.expenses.filter((expense)=> {
    const today = new Date();
    const date7daysAgo=getDateMinusDays(today,7);

    return expense.date > date7daysAgo;
  })


  // console.log("recentExpenses",recentExpenses);
  return (
   <ExpenseOutput expense={recentExpenses} expensePeriod={"Last 7 Days"} fallBack="No recent Expenses" />
  )
}

export default RecentExpenses