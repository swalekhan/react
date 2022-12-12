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
     <div>
       { expense.map((e) => {
      return ( <div key={e.amount} >
        <ExpenseItem title={e.title} amount={e.amount} date={e.date} />
      </div>
      )
    })}
     </div>
  )
  
}
export default App;
