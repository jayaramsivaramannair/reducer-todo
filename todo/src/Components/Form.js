import React, { useState } from 'react';
import actions from '../Actions/actions.js';

const Form = (props) => {
    const [task, setTask] = useState('')
    const { dispatch } = props;

    const registerChanges = (evt) => {
        console.log(task);
        setTask(evt.target.value);
    }

    const addTaskFunction = (evt) => {
        evt.preventDefault();
        const newTask = { item: task, completed: false, id: Date.now() };
        dispatch({ type: actions.ADD_TASKS, payload: newTask })
        setTask('');
    }

    return (
        <div>
            <form onSubmit={addTaskFunction}>
                <input
                    name="Task"
                    placeholder="Add Tasks"
                    value={task}
                    onChange={registerChanges}
                />
                <button>Add Task</button>
            </form>
            <button>Clear Completed Tasks</button>
        </div>
    )
}

export default Form;