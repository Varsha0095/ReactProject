import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const [amount, setAmount] = useState(props.amount);
  // console.log('Evaluation by React')
  // const clickHandler = () => {
  //   setAmount('100')
  //   console.log(amount);
  // };
  const removeExpense = () => {
    console.log(props.id);

    const ele = document.getElementById(props.id)
    console.log(props.id, ele);
      ele.parentNode.removeChild(ele)
  
    
  }
  
  return (
    <Card className="expense-item" id={props.id}>
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__description"></div>
        <h2>{props.locationOfExpenditure}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={removeExpense}>Delete</button>

    </Card>
  );
};

export default ExpenseItem;
