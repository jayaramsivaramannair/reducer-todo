import React from 'react';
import actions from '../Actions/actions.js'

const ToDo = (props) => {
    const { todo, dispatch } = props;

    const markComplete = () => {
        dispatch({ type: actions.COMPLETE_TASKS, payload: { id: todo.id } })
    }

    return (
        <div style={{ color: todo.completed ? 'red' : '', textDecorationLine: todo.completed ? "line-through" : '' }}
            onClick={markComplete}>
            <p>{todo.item}</p>
        </div>
    )
}

export default ToDo;