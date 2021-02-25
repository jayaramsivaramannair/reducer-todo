import React from 'react';
import actions from '../Actions/actions.js'

const ToDo = (props) => {
    const { todo, dispatch } = props;
    return (
        <div style={{ color: todo.completed ? 'red' : '', textDecorationLine: todo.completed ? "line-through" : '' }}
            onClick={() => dispatch({ type: actions.COMPLETE_TASKS, payload: { id: todo.id } })}>
            <p>{todo.item}</p>
        </div>
    )
}

export default ToDo;