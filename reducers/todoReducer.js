//holds your current state and action
const initialData={
    list:[], 
    list2:[]
}

const todoReducer=(state=initialData, action)=>{
    switch(action.type)
    {
        case "ADD_TODO" :

        // eslint-disable-next-line no-unused-vars
        const {id, data} = action.payload;
        return{
            ...state, //previos state
            list:[...state.list,action.payload]
        }
        
        case "DELETE_TODO" :
        const newList=state.list.filter((elem)=>elem.data.id !== action.id)
            return{
                ...state, //previos state
                list: newList
            }

        case "ADD_TITLE" :

            // eslint-disable-next-line no-unused-vars
            const {titleId, title} = action.payload;
            return{
                ...state,
                list2:[...state.list2, action.payload]
            }
    
        default: {
            return {
                ...state
            }
        }
    }
}
export default todoReducer;