import React, { Component } from 'react';
// import { render } from 'react-dom';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  //state is used in class based components
  state = {
    persons:[
      {
        name: "Farrukh Adeel ",
        age: 21,
      },
      {
        name:"Shahrukh Adeel",
        age: 25,
      },
      {
        name: "Faaiz Adeel",
        age: 19,
      },
    ],
    otherState: "some other value",
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

 render() {
  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
  }


  return (
    <div className="App">
      <h1>Alhamdullillah I am Muslim and ALLAH PAK is the Greatest.</h1>

      <button
      style={style}
      onClick={ ()=>this.switchNameHandler("frk adeel")}>Switch Name</button>
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
  );}}

  // return (
  //   React.createElement('div', {className:'App'}, React.createElement('h1', {className:'App'}, 'Hi, I\'m a react app!'))
  // )


export default App;
