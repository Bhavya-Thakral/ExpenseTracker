import {  createContext, useReducer } from "react";

const DUMMY_DATA=[
    {
        id:'b1',
        title:'New pants',
        amount:99.99,
        date:new Date(2021,7,14)

    },
    {
        id:"b2",
        title:"Apples",
        amount:30.24,
        date:new Date(2021,7,15)
    },
    {
        id:"b3",
        title:"Oranges",
        amount:40.24,
        date:new Date(2021,7,16)
    },
    {
        id:"b4",
        title:"Bananas",
        amount:50.24,
        date:new Date(2021,7,17)
    
    },
    {
        id:'c1',
        title:'New Shoes',
        amount:99.99,
        date:new Date(2021,7,14)

    },
    {
        id:"c2",
        title:"Apples",
        amount:30.24,
        date:new Date(2021,7,15)
    },
    {
        id:"c3",
        title:"Oranges",
        amount:40.24,
        date:new Date(2024,6,21)
    },
    {
        id:"c4",
        title:"Bananas",
        amount:50.24,
        date:new Date(2024,6,23)
    
    }

]

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ title, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { title, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
        const id = new Date().toString()+Math.random().toString();
        return [{...action.payload},...state];
    case "DELETE":
        return state.filter((expense)=>expense.id !== action.payload)
    case "UPDATE":
        const updatableExpenseIndex = state.findIndex((expense)=>expense.id === action.payload.id);
        const updatableExpense =  state[updatableExpenseIndex];
        const updatedItem={...updatableExpense,...action.payload.data};
        const updatedExpenses=[...state];
        updatedExpenses[updatableExpenseIndex]=updatedItem;
        return updatedExpenses;
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer,DUMMY_DATA);

    function addExpense(expenseData){
        dispatch({type:'ADD', payload:expenseData});
    }

    function deleteExpense(id){
        dispatch({type:'DELETE',payload:id})
    }

    function updateExpense(id,expenseData){
        dispatch({type:'UPDATE',payload:{id:id , data:expenseData}})
    }

    const value={
        expenses:expensesState,
        addExpense:addExpense,
        deleteExpense:deleteExpense,
        updateExpense:updateExpense
    }
  return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>;
}

export default ExpensesContextProvider;
