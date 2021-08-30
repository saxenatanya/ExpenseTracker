import React from "react";
import ExpenseItem from "./ExpenseItem";


const ExpensesList = (props) => {

    return (
        <ul className="expenses-list">
            {props.filterResult.length === 0 ? (<h1 className="expenses-list__fallback">NO expenses found</h1>) : (

                props.filterResult.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))
            )}
        </ul>
    )

};

export default ExpensesList;