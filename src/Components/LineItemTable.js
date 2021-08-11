import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {startRemoveItem} from '../actions/lineItemAction'

const LineItemTable=(props)=>{
const{lineItem}=props

const product=useSelector((state)=>state.product)
console.log(product)
const dispatch=useDispatch()

const removeItem=(name)=>{
    const conf=window.confirm("Are You Sure")
    if(conf){
        dispatch(startRemoveItem(name))
    }
}
let name=[]
const displayName=(id)=>{
  name= product.filter((ele)=>{
        return ele._id===id
    })
    return name[0].name
}

    return(
        <div>
            <table className='table table-striped table-dark table-hover mt-3'>
                <thead>
                    <tr>
                    <th>slNo</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th> </th>
                    </tr>
                </thead>
                <tbody>
                        {
                            lineItem.map((ele,i)=>{
                                return <tr key={i}>
                                    <td>{i} </td>
                                    <td>{displayName(ele.product)} </td>
                                    <td>{ele.quantity} </td>  
                                    <td>{name[0].price} </td>
                                    <td>{name[0].price*ele.quantity} </td>
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
