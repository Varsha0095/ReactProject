import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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

  return (
    <li>
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/> 

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
    </li>
  );
};

export default Expenses;
