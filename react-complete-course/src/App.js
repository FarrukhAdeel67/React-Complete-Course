import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
// class App extends Component {
//   //state is used in class based components
//   state = {
//     persons:[
//       {
//         name: "Farrukh Adeel ",
//         age: 21,
//       },
//       {
//         name:"Shahrukh Adeel",
//         age: 25,
//       },
//       {
//         name: "Faaiz Adeel",
//         age: 19,
//       },
//     ],
//     otherState: "some other value",
//   }
const app = props => {
  
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: " Farrukh Adeel ", age: 21, },
      { name: "Shahrukh Adeel", age: 25, },
      { name: "Faaiz Adeel", age: 19, },
    ],
  });

  const [otherState, setOtherState]= useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
   setPersonsState({
      persons: [
        { name: "Sahibzada Farrukh Adeel ", age: 21, },
        { name: "Shahrukh frk", age: 25, },
        { name: "Faaiz Adeel", age: 29, },
      ],
    })
  }
  return (
    <div className="App">
      <h1>Alhamdullillah I am Muslim and ALLAH PAK is the Greatest.</h1>

      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My Hobbies: Racing</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}></Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}></Person>
    </div>
  );

  // return (
  //   React.createElement('div', {className:'App'}, React.createElement('h1', {className:'App'}, 'Hi, I\'m a react app!'))
  // )
}

export default app;
