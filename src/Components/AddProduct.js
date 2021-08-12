import React from 'react';
import ProductForm from './ProductForm';
import {startPostProduct} from '../actions/productAction'
import {useDispatch} from 'react-redux';

const AddProduct=(props)=>{

    const dispatch=useDispatch()

    const formSubmit=(formData)=>{
        dispatch(startPostProduct(formData))
    }

    return(
        <div>
            <ProductForm formSubmit={formSubmit} />
        </div>
    )
}

export default AddProduct