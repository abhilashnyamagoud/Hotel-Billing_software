import React,{useState} from 'react';
import { startRemoveCust} from '../actions/customerAction'
import { useDispatch } from 'react-redux';
import UpdateCust from './UpdateCust';

const CustomerShow=(props)=>{
    const[toggle,setToggle]=useState(false)
    const {_id,email,mobile,name}=props
    const dispatch=useDispatch()

    const removeItem=()=>{
        const confirmRemove=window.confirm('Are You Sure')
        if(confirmRemove){
            dispatch(startRemoveCust(_id))
        }
    }
    const handleEdit=()=>{
        setToggle(!toggle)
    }

    return(
        <div>
            {
                toggle?<div><UpdateCust _id={_id} email={email} mobile={mobile} name={name} handleEdit={handleEdit} toggle={toggle} /><button className='btn btn-danger btn-sm' onClick={handleEdit}>Cancel</button> </div>:<div className='card p-2 mb-2 border-0 rounded'>
                <div className='card-header bg-info'>
                    <div className='card-title'>
                       Name:{name}
                    </div>
                </div>
                <div className='card-body'>
                    <div>
                        <div>
                        <p>Email:{email} </p>
                    <p>Mobile:{mobile} </p>
                        </div>  
                        <div>
                            <button onClick={removeItem} className='btn btn-outline-info btn-sm mr-2'>Delete</button>
                            <button onClick={handleEdit} className='btn btn-outline-danger btn-sm'>Update</button>
                            </div>             
                    </div>
                </div>
                </div>
            }
        
        </div>
    )
}

export default CustomerShow