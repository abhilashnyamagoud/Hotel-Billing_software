

const billReducer=(state=[],action)=>{

    switch(action.type){
        case 'POST_BILL':{
            return [...state,action.payload]
        }
        case 'GET_BILLS':{
            return [...action.payload]
        }
        case 'REMOVE_BILL':{
            return state.filter((ele)=>{
                return ele._id !==action.payload._id
            })
        }
        default :{
            return [...state]
        }
    }
}
export default billReducer