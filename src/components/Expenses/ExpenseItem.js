import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [amount, setAmount] = useState(props.amount);
  console.log('Evaluation by React')
  const clickHandler = () => {
    setAmount('100')
    console.log(amount);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__description"></div>
        <h2>{props.locationOfExpenditure}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Amount</button>
    </Card>
  );
};

export default ExpenseItem;
