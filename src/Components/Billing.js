import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {startPostBill} from '../actions/billAction';
import {startAddLineItems} from '../actions/lineItemAction';
import LineItemTable from './LineItemTable';



const Billing=(props)=>{
    const[date,setDate]=useState('')
    const[custSelect,setCustSelect]=useState('')
    const[prodSelect,setProdSelect]=useState('')
    const[count,setCount]=useState(1)

    const dispatch=useDispatch()

    const customer=useSelector(state=>state.customer)
    const product=useSelector(state=>state.product)
    console.log(customer)
    // console.log('bills',bills)
    const lineItem=useSelector((state)=>state.lineItem)
    console.log('LineItems', lineItem)
    const handleDate=(e)=>{
        setDate(e.target.value)
    }
    // console.log(date)
    const handleCustomer=(e)=>{
        setCustSelect(e.target.value)
    }
    // console.log(customer)
    const handleProduct=(e)=>{
        setProdSelect(e.target.value)
    }
    // console.log(product)
    const handleCount=()=>{
        setCount(count+1)  
    }
    const handleCountDec=()=>{
        if(count <= 0){
            alert('not Valid')
        }else{
        setCount(count-1)
        }
    }
    const addLineItems=()=>{
        const lineItems={
            product:prodSelect,
            quantity:count
        }
        dispatch(startAddLineItems(lineItems))
        setProdSelect('')
        setCount(1)

    }
    
    const generateBill=(e)=>{
        const formData={
            date:date,
            customer:custSelect,
            lineItems:lineItem
        }
        dispatch(startPostBill(formData))
        // console.log('Formdata',formData)
        setDate('')
        setCustSelect('')
        setProdSelect('')
        setCount(1)
    }

    return(
        <div className='mt-5 p-3 bg-secondary billing'>
        <div className='container'>
        <h1 className='display-4'>Billing</h1>
            <div className='row'>
                <div className='col-md-4'>
            <input type='date' className='form-control' value={date} onChange={handleDate} />
             <select className='form-control mt-5 form-select' value={custSelect} onChange={handleCustomer}>
                 <option>Select customer</option>
                 {
                     customer.map((ele)=>{
                         return <option key={ele._id} value={ele._id} >{ele.name} </option>
                     })
                 }
                 </select>   
            </div>
            <div className='col-md-6 d-flex justify-content-end '>
                <div className='card' style={{width:'200px',height:'100px'}}>
                 <div className='card-header'>
                 </div>
                 <div className='card-body'>
                 <h4>Wellcome To Billing Section</h4>
                 </div>

                </div>

            </div>
            </div>
            <hr/>
            <h4>Line Items</h4>
            <div className='row mt-3'>
                <div className='col-md-4'>
                 <select className='form-control' value={prodSelect} onChange={handleProduct}>
                     <option>Select Product</option>
                     {
                         product.map((prod)=>{
                             return <option key={prod._id} value={prod._id}>{prod.name} </option>
                         })
                     }
                 </select>
                </div>
                <div className='col-md-2'>
                     <button onClick={handleCountDec} className='btn btn-outline-info btn-sm'>-</button><span className='count ml-1 mr-1'>  {count}  </span>  <button className='btn btn-sm btn-outline-info' onClick={handleCount} >+</button>          
                         </div>
                         <div className='col-md-2'>
                           {
                               product.map((ele)=>{
                                    if(ele._id===prodSelect){
                                        return <p key={ele._id}> INR {ele.price}</p>
                                    }
                               })
                           }
                         </div>
                         <div className='col-md-2'>
                           {
                               product.map((ele)=>{
                                    if(ele._id===prodSelect){
                                        return <p key={ele._id}>INR {ele.price*count}</p>
                                    }
                               })
                           }
                         </div>
            </div>
           <div className='row'>
               <div className='col-md-6'>
               <button onClick={addLineItems} className='btn btn-primary mt-2'>Add LineItems</button>
               </div>
           </div>
           <div className='row'>
               <div className='col-md-6'>
               <LineItemTable lineItem={lineItem} />
               </div>
           
           </div>
            <button className='btn btn-info mt-3' onClick={generateBill} >Generate Bill</button>
        </div>
        </div>
    )
}

export default Billing