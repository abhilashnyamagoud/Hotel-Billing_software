import React,{useEffect} from 'react';
import AddProduct from './AddProduct';
import { useSelector,useDispatch } from 'react-redux';
import {startGetProduct} from '../actions/productAction';
import ProductDisplay from './ProductDisplay';

const Products=(props)=>{
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(startGetProduct())
    },[dispatch])

    const product=useSelector((state)=>{
        return state.product
    })
    // console.log(product)

    return(
        <div className='mt-5 p-3 product'>
             <div className='row'>
                <div className='col'>
                    <h4><a href='/register' className='text-danger'>Bangalore Restaurant /</a><a href='/register' className='text-secondary'> product</a> </h4>
                </div>
            </div>
        <div className='row  '>
            <div className='col-md-6'>
            <AddProduct />
            </div>
            <div className='col-md-6'>
                {
                product.map((ele)=>{
                    return <ProductDisplay key={ele._id} {...ele} />
                })
            }
            </div>
            </div>
        </div>
    )
}

export default Products