import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  // let expensesContent = <h2>No Expenses Found !</h2>;
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found!</h2>;
  } //changing filteredExpenses back to props.items
  else if (props.items.length === 1) {
    return props.items.map((expense) => (
    <ul className="expenses-list">
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
        <h2>Only single expense here. Please add more...</h2>
      </ul>
    ));
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
