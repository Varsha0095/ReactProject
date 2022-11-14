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
    //using filter method on the array of items which is props.items

    return expense.date.getFullYear().toString() === filteredYear; //converting the dateObject to string which is used by the expense and checking if it is same as the filteredYear
  }); //this expression will return true if the expense and filter has same year (and store those items in the new array filteredExpenses) otherwise false
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {filteredExpenses.map((expense) => (         //using map method on the new array of filtered items to render those particular items as a list
          <ExpenseItem
            title={expense.title}
            key={expense.id}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
