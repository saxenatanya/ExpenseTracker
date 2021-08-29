import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // const [enterTitle,setEnteredTitle] = useState('');
    // const [enterAmount,setEnteredAmount] = useState('');
    // const [enterDate,setEnteredDate] = useState('');
    
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {
        // setEnteredTitle(event.target.value);
        // console.log("title");
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        });
    };
    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value
        });
        // console.log("title");
    };
    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        });
        // console.log("title");
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        // console.log(expenseData);
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        });
    };

  

    return (
        <form onSubmit={submitHandler} className="hideform">
            <div className="new-expense__controls">
                <div className="new-expense_control">
                    <label>Title</label>
                    <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense_control">
                    <label>amount</label>
                    <input type="number" min="0.01" step="0.01" value={userInput.enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense_control">
                    <label>date</label>
                    <input type="date" min="2019-10-10" step="2022-12-31" value={userInput.enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" onClick={props.onCancel}>Cancel</button>
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;