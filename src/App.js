//Class-based Component

import React, { Component } from 'react';
import classes from  './App.css';
import Person from './Person/Person';
// import styled from 'styled-components';
// import Radium, { StyleRoot } from 'radium';

// self note: styled-components are not actually makes sense. don't use it in real project.
// use css modules and separate files.

// const StyledButton = styled.button`
//     background-color: ${props => props.alt ? 'red' : 'green'};
//     color: white;
//     font: inherit;
//     border: 1px solid blue;
//     padding: 8px;
//     cursor: pointer;

//     &:hover {
//       background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//       color: black;
//     }
// `;

class App extends Component {
  state = {
    persons: [
      { id:'asdqwe', name: 'Efe', age: 30 },
      { id:'zxcasd', name: 'Selvi', age: 30 },
      { id:'dvfqwe', name: 'Burcu', age: 29 }
    ],
    otherState: 'otherState',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // this.state.persons[0].name = 'Efecan'; // WRONG
    this.setState({
      persons: [
        { name: newName, age: 31 },
        { name: 'Selvi', age: 30 },
        { name: 'Burcu', age: 29 }
      ] // no need to pass otherState again
    })
  }

  // nameChangedHandler = (event) => {
  //   this.setState({
  //     persons: [
  //       { name: 'Efe', age: 30 },
  //       { name: event.target.value, age: 30 },
  //       { name: 'Burcu', age: 29 }
  //     ]
  //   })
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    this.setState({ showPersons : !this.state.showPersons });
  }

  render() {
    /* ///////////////// npm install --save radium ///////////////// pseudo and media queries*/ 
    /* ///////////////// npm install --save styled-components ///////////////// */ 
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   // ':hover': {
    //   //   backgroundColor: 'lightgreen',
    //   //   color: 'black'
    //   // }
    // }
   
    let persons = null;
    let btnClass = [];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              />
          })}
        </div>
      );

    //   style.backgroundColor = 'red';
    //   // style[':hover'] = {
    //   //   backgroundColor: 'salmon',
    //   //   color: 'black'
    //   // }
    btnClass = classes.Red;
    }

    // const classes = []; -> changed after css modules
    const assignedClasses = [];

    if (this.state.persons.length <= 2) assignedClasses.push(classes.red);
    if (this.state.persons.length <= 1) assignedClasses.push(classes.bold);

    return (
      <div className={classes.App}>
        <h1>Hi babe! Wanna hang?</h1>
        <p className={assignedClasses.join(' ')}>You were good babe!</p>
        <button className={btnClass}  onClick={this.togglePersonHandler}>Toggle Persons</button>
        {/* <button className="button" onClick={this.togglePersonHandler}>Toggle Persons</button> */}
        {persons}
      </div>
    );

    
    // return (
    //   <div className="App">
    //     <h1>Hi babe! Wanna hang?</h1>
    //     <p className={classes.join(' ')}>You were good babe!</p>
    //     {/* <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button> */}
    //     <StyledButton alt={this.state.showPersons} onClick={this.togglePersonHandler}>Toggle Person</StyledButton>
    //     {persons}
    //   </div>
    // );

    // return ( Radium
    //   <StyleRoot>
    //     <div className="App">
    //       <h1>Hi babe! Wanna hang?</h1>
    //       <p className={classes.join(' ')}>You were good babe!</p>
    //       <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
    //       {persons}
    //     </div>
    //   </StyleRoot>
    // );

    // render() {
    //   const style = {
    //     backgroundColor: 'white',
    //     font: 'inherit',
    //     border: '1px solid blue',
    //     padding: '8px',
    //     cursor: 'pointer'
    //   }
      
    //   let persons = null;
  
    //   if (this.state.showPersons) {
    //     persons = (
    //       <div>
    //         <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
    //         <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Efi')}
    //           changed={this.nameChangedHandler}>I am a dentist!</Person>
    //         <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    //       </div>
    //     )
    //   }
  
    //   return (
    //     <div className="App">
    //       <h1>Hi babe! Wanna hang?</h1>
    //       <p>You were good babe!</p>
    //       <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
    //       {persons}
    //     </div>
    //   );

    // return (
    //   <div className="App">
    //     <h1>Hi babe! Wanna hang?</h1>
    //     <p>You were good babe!</p>
    //     <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
    //     {
    //       this.state.showPersons ?
    //         <div>
    //           <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
    //           <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Efi')}
    //             changed={this.nameChangedHandler}>I am a dentist!</Person>
    //           <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    //         </div> : null
    //     }
    //   </div>
    // );

    // return (
    //   <div className="App">
    //     <h1>Hi babe! Wanna hang?</h1>
    //     <p>You were good babe!</p>
    //     <button style={style} onClick={(event) => this.switchNameHandler('Efecan')}>Switch the Name!!!</button>
    //     <div>
    //       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
    //       <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Efi')}
    //         changed={this.nameChangedHandler}>I am a dentist!</Person>
    //       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    //     </div>
    //   </div>
    // );
  }
}

// export default Radium(App);
export default App;

// React Hooks ----> Important setPersonsState will override whole state won't replace the value you passed.

// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// const app = props => {

//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Efe', age: 30 },
//       { name: 'Selvi', age: 30 },
//       { name: 'Burcu', age: 29 }
//     ],
//     otherState: 'Other State'
//   });

//   console.log(personsState);

//   const [otherState, setOtherState] = useState('some other value');

//   console.log(personsState, otherState);

//   const switchNameHandler = () => {
//     // this.state.persons[0].name = 'Efecan'; // WRONG
//     setPersonsState({
//       persons: [
//         { name: 'Efecan', age: 30 },
//         { name: 'Selvi', age: 30 },
//         { name: 'Burcu', age: 29 }
//       ],
//       otherState: personsState.otherState // If you don't do this, otherState will be overwritten
//     })
//   };

//   return (
//     <div className="App">
//       <h1>Hi babe! Wanna hang?</h1>
//       <p>You were good babe!</p>
//       <button onClick={switchNameHandler}>Switch the Name!!!</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>I am a dentist!</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//     </div>
//   );
// }

// export default app;