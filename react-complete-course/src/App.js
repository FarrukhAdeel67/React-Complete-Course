
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

import React, { Component } from 'react';
// import { render } from 'react-dom';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  //state is used in class based components
  state = {
    persons:[
      {
        name: "Farrukh Adeel ",        age: 21,      },
      {
        name:"Shahrukh Adeel",        age: 25,      },
      {
        name: "Faaiz Adeel",        age: 19,      },
    ],
    otherState: "some other value",
    showPersons:false,
  }
 
    switchNameHandler = (newName) => {
      this.setState({
         persons: [
           { name: newName, age: 21, },
           { name: "Shahrukh frk", age: 25, },
           { name: "Faaiz Adeel", age: 29, },
         ],
       })
     }
     nameChangedHandler = (event)=>{
        this.setState({
          persons:[
            { name: "Farrukh Adeel", age: 21, },
           { name: event.target.value,  age: 25, },
           { name: "Faaiz Adeel", age: 29, },
          ]
        })
     }
     togglePersonsHandler = (event)=>{
        const  doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
     }

 render() {
  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",  
    cursor: "pointer",
  }
  let persons = null;
  if(this.state.showPersons){
    persons  =(
      <div>
       <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age}
      click = {this.switchNameHandler.bind(this,'max')}
      >
        My Hobbies: Racing</Person>

      <Person
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age}
      click = {this.switchNameHandler.bind(this, "gulbadin")}
      changed={this.nameChangedHandler}></Person>
      
      <Person 
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age}></Person>
     </div> 
    )
  }




  return (
    <div className="App">
      <h1>Alhamdullillah I am Muslim and ALLAH PAK is the Greatest.</h1>
      <button
      style={style}
      onClick={ this.togglePersonsHandler}>Toggle Persons</button>
      {persons}

    </div>
  );
}
export default App;
