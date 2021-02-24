import React, { useReducer, useState } from 'react';
import taskReducer from '../Reducers/TaskReducer.js';

//Initial Object Value
const initialTaskValue = {
    item: '',
    completed: false,
    id: '',
};

const initialTaskList = [];

const ToDo = (props) => {
    const [currentTask, setCurrentTask] = useState(initialTaskValue);
    const [taskList, dispatch] = useReducer(taskReducer, initialTaskList);
    return (
        <div>
            <h1>Hello from ToDo!</h1>
        </div>
    )
}

export default ToDo;