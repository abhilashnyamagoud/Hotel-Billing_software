import React,{useEffect} from 'react';
import AddCustomer from './AddCustomer';
import { useSelector,useDispatch } from 'react-redux';
import CustomerShow from './CustomerShow';
import {startGetCust} from '../actions/customerAction'


const Customers=(props)=>{
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(startGetCust())
    },[dispatch])

    const customer=useSelector((state)=>{
        return state.customer
    })
    // console.log(customer)
    return(
        <div className='cust mt-5 p-3'>
            <div className='row'>
            <div className='col'>
                <h4><a href='/customers' className='text-danger'>Bangalore Restaurant / </a><a href='/customers' className='text-secondary'>Customers</a> </h4>
            </div>
            </div>
        <div className='row'>
            <div className='col-md-6'>
            <AddCustomer />
            </div>
                <div className='col-md-6'>
                    <h2 className='display-4'>Customers-{customer.length}</h2>
                {
                customer.map((ele)=>{
                    return <CustomerShow key={ele._id} {...ele} />
                })
            }
                </div>
        </div>
        </div>
    )
    
}

export default Customers