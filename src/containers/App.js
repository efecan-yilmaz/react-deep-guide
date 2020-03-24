//Class-based Component

import React, { Component } from 'react';
import classes from  './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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

    if (this.state.showPersons) {
      persons = (
        <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler} />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonHandler} />
        {persons}
      </div>
    );
  }
}
export default App;