export const createTask = (id, title) =>  {
    let newPost = {id: id, title: title};
    return {
        type: 'CREATE_TASK',
        payload: newPost
    };
}
export const getTasks = () => {
    return {
        type: 'GET_TASKS',
    }
}
//checked eto true ili false

export const clickCheckbox = (checked) => dispatch => {
    dispatch({
            type: 'CLICK_CHECKBOX',
            payload: checked
        }
    )
}

