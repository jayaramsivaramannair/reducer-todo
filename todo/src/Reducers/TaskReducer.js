import actions from '../Actions/TaskActions.js';

const taskReducer = (state, action) => {
    const { ADD_TASKS, TOGGLE_COMPLETION, CLEAR_TASKS } = actions;
    switch (action.type) {
        case ADD_TASKS:
            return state;
        case TOGGLE_COMPLETION:
            return state;
        case CLEAR_TASKS:
            return state;
        default:
            return state;
    }
}

export default taskReducer;