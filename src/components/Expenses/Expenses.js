import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // console.log('Expense.js');
    // console.log(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <h2>No Expenses Found !</h2>;
  if (filteredExpenses.length > 1) {
    expensesContent = filteredExpenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          key={expense.id}
          amount={expense.amount}
          date={expense.date}
        />
      ));
  }
  else if (filteredExpenses.length === 1){
    expensesContent = 
    filteredExpenses.map((expense) => (
      <div>
      <ExpenseItem
        title={expense.title}
        key={expense.id}
        amount={expense.amount}
        date={expense.date}
      />
      <h2>Only single expense here. Please add more...</h2>
      </div>
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {expensesContent}

        {/* {filteredExpenses.map((expense) => (         //using map method on the new array of filtered items to render those particular items as a list
          <ExpenseItem
            title={expense.title}
            key={expense.id}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
      </Card>
    </div>
  );
};

export default Expenses;
