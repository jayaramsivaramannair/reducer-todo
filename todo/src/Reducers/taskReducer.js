import actions from '../Actions/actions.js';

const taskReducer = (state, action) => {
    const { ADD_TASKS, COMPLETE_TASKS, DELETE_TASKS } = actions;
    switch (action.type) {
        case ADD_TASKS:
            return [...state, action.payload]
        case COMPLETE_TASKS:
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo
            })
        case DELETE_TASKS:
            return state.filter((todo) => !(todo.completed))
        default:
            return state;
    }
}

export default taskReducer;