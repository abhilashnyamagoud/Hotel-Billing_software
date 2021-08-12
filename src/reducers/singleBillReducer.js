
const singleBillReducer=(state=[],action)=>{
    
    switch(action.type){
        case 'GET_SINGLE_BILL':{
            return [{...action.payload}]
        }
        default:{
            return [...state]
        }
    }
}

export default singleBillReducer