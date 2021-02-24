import React, { useReducer, useState } from 'react';
import taskReducer from '../Reducers/TaskReducer.js';
import actions from '../Actions/TaskActions';
import Item from './Item.js';

//Initial Object Value
const initialTaskValue = ' ';

const ToDo = (props) => {
    const [currentTask, setCurrentTask] = useState(initialTaskValue);
    const [taskList, dispatch] = useReducer(taskReducer, []);

    //Registers the change made to the input value and sets the value of the state
    const registerChange = (e) => {
        console.log(currentTask);
        setCurrentTask(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ type: actions.ADD_TASKS, payload: { id: Date.now(), item: currentTask, completed: false } })
        setCurrentTask(initialTaskValue);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="currentTask"
                    placeholder="Add Tasks"
                    value={currentTask}
                    onChange={registerChange}
                />
                <button>Add Tasks</button>
            </form>
            {(taskList.length === 0) ? "Start your ToDo List" : " "}
            {taskList &&
                <div>
                    {taskList && taskList.map((task) => {
                        return <Item key={task.id} task={task} />
                    })}
                </div>
            }
        </div>
    )
}

export default ToDo;