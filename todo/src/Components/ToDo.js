import React from 'react';

const ToDo = (props) => {
    const { todo } = props;
    return (
        <div>
            <p>{todo.item}</p>
        </div>
    )
}

export default ToDo;