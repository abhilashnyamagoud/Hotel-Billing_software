import React from 'react'
import { useDispatch } from 'react-redux'
import {startRemoveItem} from '../actions/lineItemAction'

const LineItemTable=(props)=>{
const{lineItem}=props
const dispatch=useDispatch()
const removeItem=(name)=>{
    const conf=window.confirm("Are You Sure")
    if(conf){
        dispatch(startRemoveItem(name))
    }
}
    return(
        <div>
            <table className='table table-striped table-dark table-hover mt-3'>
                <thead>
                    <tr>
                    <th>slNo</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th> </th>
                    </tr>
                </thead>
                <tbody>
                        {
                            lineItem.map((ele,i)=>{
                                return <tr key={i}>
                                    <td>{i} </td>
                                    <td>{ele.product} </td>
                                    <td>{ele.quantity} </td>  
                                    <td><button className='btn btn-sm btn-danger' onClick={()=>{
                                        removeItem(ele.product)
                                    }}>delete</button> </td>
                                </tr>
                            })
                        }
                    
                </tbody>
            </table>
            
        </div>
    )
}

export default LineItemTable