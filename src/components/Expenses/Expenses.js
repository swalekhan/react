import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  let filterExpense = props.items.filter((e)=>{
    return e.date.getFullYear().toString() === filteredYear ;
  })

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        
        {filterExpense.map((e)=>{ 
          return <ExpenseItem
            key = {e.id}
            title={e.title}
            amount={e.amount}
            date={e.date}
          />
          
        })}
       
      </Card>
    </div>
  );
};

export default Expenses;