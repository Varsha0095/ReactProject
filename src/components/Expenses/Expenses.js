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
  return (
    <div>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <Card className="expenses">
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            key={expense.id}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
          locationOfExpenditure={props.items[0].locationOfExpenditure}
          id={props.items[0].id}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
          locationOfExpenditure={props.items[1].locationOfExpenditure}
          id={props.items[1].id}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
          locationOfExpenditure={props.items[2].locationOfExpenditure}
          id={props.items[2].id}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
          locationOfExpenditure={props.items[3].locationOfExpenditure}
          id={props.items[3].id}
        ></ExpenseItem> */}
      </Card>
    </div>
  );
};

export default Expenses;
