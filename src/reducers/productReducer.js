
const productReducer=(state=[],action)=>{

    switch(action.type){
        case 'POST_PRODUCT':{
            return [...state,action.payload]
        }
        case 'GET_PRODUCT':{
            return [...action.payload]
        }
        case 'REMOVE_PRODUCT':{
            return state.filter((ele)=>{
                return ele._id !==action.payload._id
            })
        }
        case 'EDIT_PRODUCT':{
            return state.map((ele)=>{
                if(ele._id===action.payload._id){
                    return {...ele,...action.payload}
                }else{
                    return {...ele}
                }
            })
        }
        default:{
            return [...state]
        }
    }
}

export default productReducer