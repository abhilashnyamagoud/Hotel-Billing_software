
const lineItemReducer=(state=[],action)=>{

    switch(action.type){
        case 'ADD_LINE_ITEMS':{
            return [...state,action.payload]
        }
        case 'REMOVE_ITEMS':{
            return state.filter((ele)=>{
                return ele.product !==action.payload
            })
        }
        default:{
            return [...state]
        }
    }
}

export default lineItemReducer