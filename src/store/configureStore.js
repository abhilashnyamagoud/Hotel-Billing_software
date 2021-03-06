import {createStore,combineReducers, applyMiddleware}from 'redux'
import thunk from 'redux-thunk';
import userReducer from '../reducers/userReducer';
import customerReducer from '../reducers/customerReducer';
import productReducer from '../reducers/productReducer';
import billReducer from '../reducers/billReducer';
import lineItemReducer from '../reducers/lineItemReducer'
import singleBillReducer from '../reducers/singleBillReducer'


const configureStore=()=>{
    const store=createStore(combineReducers({
        user:userReducer,
        customer:customerReducer,
        product:productReducer,
        bill:billReducer,
        lineItem:lineItemReducer,
        singleBill:singleBillReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore