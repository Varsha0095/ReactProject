import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
    // const saveExpenseDataHandler = (enteredExpenseData) => {
    //     const expenseData = {
    //         ...enteredExpenseData,
    //         id: Math.random().toString()
    //     }
        // console.log(expenseData);
        // props.onAddExpense(expenseData);           //calling the function and passing expenseData as argument so that it forwards expenseData
    // };
  return (
    <div className="new-expense">
      <ExpenseForm />   
    </div>
  );
};
export default NewExpense;
