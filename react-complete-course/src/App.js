import React from "react";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: "23.12",
      date: new Date(2022, 2, 12),
    },
    {
      id: "e2",
      title: "New Tv",
      amount: "232.12",
      date: new Date(2022, 4, 21),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: "823.12",
      date: new Date(2022, 6, 11),
    },
    {
      id: "e4",
      title: "New Desk",
      amount: "123.1",
      date: new Date(2022, 11, 2),
    },
  ];
  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date.toISOString()}
      />{" "}
        <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date.toISOString()}
      />{" "}
        <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date.toISOString()}
      />{" "}
        <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date.toISOString()}
      />{" "}
    </div>
  );
}
export default App;
