import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filterYear, setFilteredYear] = useState("2020");
  const { items } = props;
  const filteredExpense = items.filter(item => item.date.getFullYear().toString() === filterYear )

  const filteredYearHandler = (year) => {
    setFilteredYear(year);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filterYear} filteredYearHandler={filteredYearHandler} />

      <ExpensesChart expenses={filteredExpense} />

      <ExpensesList items={filteredExpense} />
      
    </Card>
  );
};

export default Expenses;
