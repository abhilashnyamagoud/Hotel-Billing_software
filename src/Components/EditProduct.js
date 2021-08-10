import React from 'react'
import ProductForm from './ProductForm'
import {startEditProduct} from '../actions/productAction'
import { useDispatch } from 'react-redux'

const EditProduct=(props)=>{
    const {_id,name,price,handleToggle,toggle}=props
    const dispatch=useDispatch()

    const formSubmit=(formData)=>{
        dispatch(startEditProduct(formData,_id))
    }
    return(
        <div>
            <ProductForm _id={_id} name={name} price={price} formSubmit={formSubmit} handleToggle={handleToggle} toggle={toggle} />
        </div>
    )
}

export default EditProduct