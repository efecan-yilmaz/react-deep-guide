//Class-based Component

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Efe', age: 30 },
      { name: 'Selvi', age: 30 },
      { name: 'Burcu', age: 29 }
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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Efe', age: 30 },
        { name: event.target.value, age: 30 },
        { name: 'Burcu', age: 29 }
      ]
    })
  }

  togglePersonHandler = () => {
    this.setState({ showPersons : !this.state.showPersons });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Efi')}
            changed={this.nameChangedHandler}>I am a dentist!</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi babe! Wanna hang?</h1>
        <p>You were good babe!</p>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );

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