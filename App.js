import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';



class App extends Component {
state = {
  todos: [
    {
      id: 1,
      title: 'Take out the trash',
      completed: false,
   },
   {
    id: 2,
    title: 'Dinner with wife',
    completed: false,
 },
 {
      id: 3,
      title: 'Meeting with Boss',
      completed: false,
   }
 ]
}
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}


export default App;
// STATE: Different components can have their own states BUT
// You will need states that multiple components need to access.
// In this case todos needs a place to feed down to different components