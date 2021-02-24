import React, { useState } from 'react';

const Form = (props) => {
    const [item, setItem] = useState('')

    const registerChanges = (evt) => {
        console.log(item);
        setItem(evt.target.value);
    }
    return (
        <div>
            <form>
                <input
                    name="Task"
                    placeholder="Add Tasks"
                    value={item}
                    onChange={registerChanges}
                />
                <button>Add Task</button>
            </form>
            <button>Clear Completed Tasks</button>
        </div>
    )
}

export default Form;