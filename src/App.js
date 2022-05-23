import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 234.33,
    date: new Date(2022, 1, 10),
  },
  {
    id: 2,
    title: "Bike Insurance",
    amount: 54.0,
    date: new Date(2021, 2, 8),
  },
  {
    id: 3,
    title: "House Insurance",
    amount: 372.0,
    date: new Date(2020, 7, 2),
  },
];

function App() {

  const [expenseData, setExpenseData] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenseData((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
    console.log(expense)
  }

  return (
    <div>
      <NewExpense addExpenseHandler={addExpenseHandler} />
      <Expenses items={expenseData} />
    </div>
  );
}

export default App;
