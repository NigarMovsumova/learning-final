export default (state = { data: [] }, action) => {
    switch (action.type) {
        case 'CREATE_TASK': {
            console.log('reached reducer');
            console.log(action.payload)
            console.log(state);
            return { ...state, data: [action.payload, ...state.data] };
        }
        case 'GET_TASKS':{
            return state;
        }
        case 'CLICK_CHECKBOX':{
            console.log(state); 
            return state
        }
        default:
            return state;
    }
};