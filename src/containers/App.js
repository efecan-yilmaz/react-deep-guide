//Class-based Component

import React, { Component } from 'react';
import classes from  './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    // 1
    super(props);
    console.log('[App.js] constructor');
    // you can also set state here. But it is old fashioned.
  }

  state = {
    persons: [
      { id:'asdqwe', name: 'Efe', age: 30 },
      { id:'zxcasd', name: 'Selvi', age: 30 },
      { id:'dvfqwe', name: 'Burcu', age: 29 }
    ],
    otherState: 'otherState',
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    // 2
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    // 5
    // good for http requests
    console.log('[App.js] componentDidMount');
  }

  // componentWillMount() {
  //   // 4 will be removed soon. don't use if possible
  //   console.log('[App.js] componentWillMount'); 
  // }

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
    // 3
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler} />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit title={this.props.appTitle} showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonHandler} />
        {persons}
      </div>
    );
  }
}
export default App;