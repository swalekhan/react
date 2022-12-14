import ExpenseDetail from './EspenseDetail';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import React from 'react';

const ExpenseItem = (props) => {

  // return React.createElement("div",{className:"expense-item"},
  //   React.createElement(ExpenseDate, {date:props.date}),
  //   React.createElement(ExpenseDetail, {amount:props.amount,title:props.title})
  // )

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetail amount={props.amount} title={props.title} />
    </div>
  )
}

export default ExpenseItem;