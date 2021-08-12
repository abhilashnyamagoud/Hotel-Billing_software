
export const startAddLineItems=(data)=>{
    return {
        type:'ADD_LINE_ITEMS',
        payload:data
    }
}

export const startRemoveItem=(data)=>{
    return {
        type:'REMOVE_ITEMS',
        payload:data
    }
}