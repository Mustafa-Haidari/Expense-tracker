import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formDisplay, setFormDisplay] = useState(false)
  const enteredExpenseHandler = (expense) => {
    const newExpense = {
      id: Math.round(Math.random() * 5 + 3),
      ...expense,
    };
    props.addExpenseHandler(newExpense);
  };

  const displayForm = () => {
    setFormDisplay(true)
  }

  const hideForm = () => {
    setFormDisplay(false)
  }

  return (
    <div className="new-expense">
      {formDisplay !== true ? <button onClick={displayForm}>Add New Expense</button> : 
      <ExpenseForm hideForm={hideForm} enteredExpenseHandler={enteredExpenseHandler} />}
    </div>
  );
};

export default NewExpense;
