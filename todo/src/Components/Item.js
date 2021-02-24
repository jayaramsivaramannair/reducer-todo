import React from 'react';

const Item = (props) => {
    const { task } = props;
    return (
        <div>
            <span style={{ color: task.completed ? 'red' : 'green', textDecorationLine: task.completed ? 'line-through' : '' }}>
                {task.item}
            </span>
            <button>Mark Complete</button>
            {/*Clear Task button will appear only when the task is marked as complete*/}
            {(task.completed) ? <button>Clear Task</button> : ""}

        </div>
    )
}

export default Item;