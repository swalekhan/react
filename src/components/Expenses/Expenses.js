import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  let filterExpense = props.items.filter((e) => {
    return e.date.getFullYear().toString() === filteredYear;
  })

  // conditional


  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses = {filterExpense}/>
         <ExpensesList item= {filterExpense}/>
      </Card>
    </div>
  );
};

export default Expenses;