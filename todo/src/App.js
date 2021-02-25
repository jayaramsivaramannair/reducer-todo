import './App.css';
import Form from './Components/Form.js';
import ToDo from './Components/ToDo.js';
import React, { useReducer } from 'react';
import taskReducer from './Reducers/taskReducer.js';


function App() {
  const [todos, dispatch] = useReducer(taskReducer, []);
  return (
    <div className="App">
      <h3>Reducer ToDo List</h3>
      <Form dispatch={dispatch} />
      {todos.length === 0 ? <h6>Start Adding Tasks to Keep Yourself on Track</h6> : " "}
      <div className="taskList">
        {todos && todos.map((todo) => {
          return <ToDo key={todo.id} todo={todo} dispatch={dispatch} />
        })}
      </div>
    </div>
  );
}

export default App;
