//Class-based Component

import React, { Component } from 'react';
import classes from  './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

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
    this.setState({
      persons: [
        { name: newName, age: 31 },
        { name: 'Selvi', age: 30 },
        { name: 'Burcu', age: 29 }
      ] // no need to pass otherState again
    })
  }

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
    let persons = null;
    let btnClass = [];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}><Person  /// key is for creating a list. It should be in outer component
              click={() => this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              /></ErrorBoundary>
          })}
        </div>
      );
    btnClass = classes.Red;
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2) assignedClasses.push(classes.red);
    if (this.state.persons.length <= 1) assignedClasses.push(classes.bold);

    return (
      <div className={classes.App}>
        <h1>Hi babe! Wanna hang?</h1>
        <p className={assignedClasses.join(' ')}>You were good babe!</p>
        <button className={btnClass}  onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}
export default App;