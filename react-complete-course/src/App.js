import React from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
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
      //in date month and day starts at index 0 like jan is at zero 0 index
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: "823.12",
      date: new Date(2022, 6, 11),
    },
    {
      id: "e4",
      title: "Desk",
      amount: "123.1",
      date: new Date(2022, 11, 2),
    },
  ];
  const addExpenseHandler = expense =>{
    console.log("inside the App.js");
    console.log(expense);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />;{" "}
    </div>
  );
};
export default App;
