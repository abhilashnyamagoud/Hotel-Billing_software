import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {startGetBills,startDeleteBill,startGetSingleBill} from '../actions/billAction';
import { Link } from 'react-router-dom';


const BillDisplay=(props)=>{
    const dispatch=useDispatch()
    const bill=useSelector((state)=>state.bill)
    const customer=useSelector(state=>state.customer)
    console.log('Customer',customer)
    const product=useSelector(state=>state.product)
    console.log('Bills',bill)

    const getBill=(id)=>{
        dispatch(startGetSingleBill(id))
    }

    const remove=(id)=>{
        const conf=window.confirm('Are You Sure')
        if(conf){
            dispatch(startDeleteBill(id))
        }
      
    }
    useEffect(()=>{
        dispatch(startGetBills())
    },[])

    let  arr=[]
    const displayName=(id)=>{
        arr=product.filter((ele)=>{
            return ele._id ===id
        })
        return arr[0]?.name
    }   

    let name=[]
    const custName=(id)=>{
        name =customer.filter((ele)=>{
            return ele._id===id
        })
        return name[0]?.name
        // console.log('name',name)
    }

    return(
        <div className='mt-5 p-2 container'>
            {
                bill.length===0 ?<h1 className='display-4'>Sorry, No Transactions Made </h1>:<>
                <div className='mt-3'>
            <h1 className='display-4'>All Bills</h1>
            </div>
            <div className='row'>
            {
                bill.map((ele)=>{
                    return <div key={ele._id} className='card mt-3 p-2 col-md-4'>
                        <div className='card-header bg-info'>
                        <div className='card-title'>
                        <h3>Customer Name: {custName(ele.customer)} </h3>
                            </div>
                        </div>
                        <div className='card-body'> 
                        <p>Date: {ele.date} </p>
                        <h4>Purchase Details</h4>
                        {
                            ele.lineItems.map((item)=>{
                                return <div key={item._id}> <li ><b> {displayName(item.product)} </b> - {item.price}RS * {item.quantity} ={item.subTotal}  </li>
                                </div>
                            })
                        }
                        <button onClick={()=>{
                                    remove(ele._id)
                                }} className='btn btn-danger btn-sm mt-2'>Delete</button>
                                <button className='btn btn-sm btn-success mt-2 ms-2' onClick={()=>{
                                    getBill(ele._id)
                                }}><Link to={`bills/${ele._id}`} className='text-dark'> Get Bill</Link> </button>
                            </div>
                        </div>
                })
            }
            </div> 

                </>
                
            }
            
        </div>
    )
}

export default BillDisplay