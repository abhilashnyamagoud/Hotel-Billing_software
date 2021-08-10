import React from 'react'
import CustomerForm from './CustomerForm'
import {startPostCust} from '../actions/customerAction'
import { useDispatch } from 'react-redux'

const AddCustomer=(props)=>{

    const dispatch=useDispatch()
    const formSubmit=(formData)=>{
        dispatch(startPostCust(formData))
    }

    return(
        <div>
            <CustomerForm formSubmit={formSubmit} />
        </div>
    )
}

export default AddCustomer