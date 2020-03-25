import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    // componentWillReceiveProps(props) {
    //     // old . don't use it.
    //     console.log('[Persons.js] componentWillReceiveProps');
    // }

    static getDerivedStateFromProps(props, state) {
        // 1
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }

    shouldComponentUpdate(nextProps) {
        // 2 Check nextProps. return true or false depending on if you want them to take effect
        console.log('[Persons.js] shouldComponentUpdate');
        return true; 
    }

    getSnapshotBeforeUpdate(previousProps, previousState) {
        // 4
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!' };
    }

    // componentWillUnmount() {
    //     // old. don't use it.
    // }

    componentDidUpdate(previousProps, previousState, snapshot) {
        // 5
        console.log('[Persons.js] componentDidUpdate');
        console.log('[Persons.js] snapshot:', snapshot);
    }

    render() {
        // 3
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return <Person 
                key={person.id} 
                click={() => this.props.clicked(index)} 
                name={person.name} 
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)}
                />
        });
    }
};

export default Persons;




// import React from 'react';
// import Person from './Person/Person';

// const Persons = (props) => {
//     console.log('[Persons.js] rendering...');
//     return props.persons.map((person, index) => {
//         return <Person 
//             key={person.id} 
//             click={() => props.clicked(index)} 
//             name={person.name} 
//             age={person.age}
//             changed={(event) => props.changed(event, person.id)}
//             />
//     });
// };
// export default Persons;