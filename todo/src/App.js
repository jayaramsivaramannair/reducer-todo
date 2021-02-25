import './App.css';
import Form from './Components/Form.js';
import ToDo from './Components/ToDo.js';
import React, { useReducer } from 'react';
import taskReducer from './Reducers/taskReducer.js';


function App() {
  const [todos, dispatch] = useReducer(taskReducer, []);
  return (
    <div className="App">
      <h1>Reducer ToDo List</h1>
      <Form dispatch={dispatch} />
      {todos && todos.map((todo) => {
        return <ToDo key={todo.id} todo={todo} />
      })}
    </div>
  );
}

export default App;
