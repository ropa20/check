export const addTodo = (data) => {

    return (dispatch) => {
        dispatch({
        type:"ADD_TODO", //WHAT TO DO
        payload:{
            // id: {id_},
            data:data,
        }
        })
    }
}

export const addTitle= (data)=>{
    return (dispatch) => {
        dispatch({
        type:"ADD_TITLE", //WHAT TO DO
        payload:{
            data:data,
        }
        })
    }
}

export const deleteTodo= (id)=>{
    return{
        type: "DELETE_TODO",
        id
    }
}
