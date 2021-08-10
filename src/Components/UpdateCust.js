import React from 'react';
import CustomerForm from './CustomerForm';
import {startUpdateCust} from '../actions/customerAction';
import { useDispatch } from 'react-redux';

const UpdateCust=(props)=>{
    const {_id,email,mobile,name,handleEdit,toggle}=props

    const dispatch=useDispatch()

    const formSubmit=(formData)=>{
        // console.log(formData)
        dispatch(startUpdateCust(formData,_id))
    }
    return(
        <div>
            <CustomerForm handleEdit={handleEdit} toggle={toggle} formSubmit={formSubmit} _id={_id} email={email} mobile={mobile} name={name} />
        </div>
    )
}

export default UpdateCust