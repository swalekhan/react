import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  let [state, setState] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setState(false)
  };

  
  const cancelHandler = () => {
    setState(false)
  }

  const addHandler = () => {
    setState(true)
  }

  // let a = <button onClick={addHandler}>Add expense</button>
  // let b = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelHandler={cancelHandler} />

  return (
    <div className='new-expense'>
      {!state && <button onClick={addHandler}>Add expense</button>}
      {state &&  <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelHandler={cancelHandler} />}
    </div>
  );
};

export default NewExpense;
