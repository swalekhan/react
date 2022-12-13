import ExpenseDetail from './EspenseDetail';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import React from 'react';
import { useState } from 'react';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)

 const clickhandler = () =>{
  //  let li = e.target.parentElement
  //  li.remove()
  setTitle("update");
 }

  // return React.createElement("div",{className:"expense-item"},
  //   React.createElement(ExpenseDate, {date:props.date}),
  //   React.createElement(ExpenseDetail, {amount:props.amount,title:props.title})
  // )

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetail amount={props.amount} title={title} />
      <button onClick={clickhandler}>button</button>
    </div>
  )
}

export default ExpenseItem;