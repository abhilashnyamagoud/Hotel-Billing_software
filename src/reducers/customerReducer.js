
const customerReducer=(state=[],action)=>{
    switch(action.type){
        case 'POST_CUST':{
            return [...state,action.payload]
        }
        case 'GET_CUST':{
            return [...action.payload]
        }
        case 'REMOVE_CUST':{
            return state.filter((ele)=>{
                return ele._id !==action.payload
            })
        }
        case 'UPDATE_CUST':{
           return state.map((cust)=>{
                if(cust._id===action.payload._id){
                    return {...cust,...action.payload}
                }else{
                    return {...cust}
                }
            })
        }
        default:{
            return [...state]
        }
    }
}

export default customerReducer