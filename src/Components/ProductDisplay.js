import React,{useState} from 'react';
import {startRemoveProduct} from '../actions/productAction';
import { useDispatch } from 'react-redux';
import EditProduct from './EditProduct';

const ProductDisplay=(props)=>{
    const {_id,name,price}=props
    const[toggle,setToggle]=useState(false)

    const dispatch=useDispatch()
    const removeProduct=()=>{
        const confirmRemove=window.confirm('Are You Sure')
        if(confirmRemove){
            dispatch(startRemoveProduct(_id))
        }
    }
    const handleToggle=()=>{
        setToggle(!toggle)
    }
    return(
        <div className='container mt-3'>
        {
            toggle ?<div><EditProduct _id={_id} name={name} price={price} handleToggle={handleToggle} toggle={toggle} /><button onClick={handleToggle} className='btn btn-danger'>Cancel</button> </div> :<div >
            <div className='card mb-2 border-0 rounded p-2'>
                <div className='card-header bg-info'>
                    <div className='card-title'>{name} </div>
                </div>
                <div className='card-body'>
                    <div className='row'>
                    <div className='col-md-6'>
                            <h1>{price} </h1>
                            </div>
                            <div className='col-md-6'>
                            <button onClick={removeProduct} className='btn btn-outline-danger btn-sm me-2'>Delete</button>
                            <button onClick={handleToggle} className='btn btn-outline-info btn-sm'>Update</button>
                            </div>
                    </div>
                </div>

            </div>
        </div>
        }
        </div>
        
    )
}

export default ProductDisplay