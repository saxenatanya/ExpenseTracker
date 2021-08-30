import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import './ExpensesList.css';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };


  //   let filterExpenseResult = (props)=>{
  // return props.items.filter((expense) =>  expense.date.getFullYear().toString() === filteredYear)
  //   };
  const filterExpenseResult = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filterExpenseResult}/>
<ExpensesList filterResult={filterExpenseResult}/>

      </Card>
    </div>
  );
};

export default Expenses;