import "./ExpenseItem.css";

function ExpenseDetails(props) {
  return (
    <div className='expense-item'>
      <div className="expense-item__description"><h2>{props.title}</h2></div>
      
      <div className="expense-item__description"><h2>{props.locationOfExpenditure}</h2></div>
      
      <div className='expense-item__price'>${props.amount}</div>
      </div>
  );
}

export default ExpenseDetails;
