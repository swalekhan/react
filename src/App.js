// import logo from './logo.svg';
import './App.css';
import ExpenseItem from "./component/Expenses/ExpenseItem"
import React from 'react';

const App = () => {
  let expense = [
    { title: "trip", amount: "10", date: new Date() },
    { title: "shoping", amount: "100", date: new Date() },
    { title: "food", amount: "50", date: new Date() }
  ];
  return (
    <div >
      <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date} />
      <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date} />
      <ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date} />
    </div>
  );
}
export default App;
