import React,{useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  
  const [hideForm, setHideForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

    const hideFormHandler =()=>{
        setHideForm(true);
console.log("clicked hideform true");
    };

    const showFormHandler =() =>{
        setHideForm(false);
    };

  return (
    <div className='new-expense'>
      {!hideForm ?  <button onClick={hideFormHandler}>Add Expense</button> :    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel ={showFormHandler} /> }
     
  
    </div>
  );
};

export default NewExpense;
