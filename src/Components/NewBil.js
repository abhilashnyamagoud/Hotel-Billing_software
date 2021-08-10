
import React,{useState} from 'react';
import { useSelector } from 'react-redux';

const Billing=(props)=>{
const [date,setDate]=useState('')
const[custSelect,setCustSelect]=useState('')
const[prod,setProd]=useState('')
const[count,setCount]=useState(1)

const customer=useSelector((state)=>{
    return state.customer
})
const product=useSelector((state)=>{
    return state.product
})
const handleCountDec=()=>{
    if(count <= 0){
        alert('not Valid')
    }else{
    setCount(count-1)
    }
}
const handleCount=()=>{
    setCount(count+1)  
}

    const handleDate=e=>setDate(e.target.value)
    const handleCust=e=>setCustSelect(e.target.value)
    const handleProd=e=>setProd(e.target.value)
    return(
        <div className='mt-5 p-3'>
             <div className='row'>
                <div className='col'>
                    <h4><a href='/billing' className='text-danger'>Bangalore Restaurant /</a><a href='/billing' className='text-secondary'> Billing</a> </h4>
                </div>
            </div>
            <div className='container'>
                <form>
                <div className='row'>
                    <div className='col-md-4'>
                        <h1 className='display-4'>Billing</h1>
                        
                            <label className='form-label'>Select Date</label>
                            <input type='date' className='form-control' value={date} onChange={handleDate} />
                            <label className='form-label mt-3'>Select Customers</label>
                             <select value={custSelect} onChange={handleCust} className='form-select' >
                                 <option> Select Customers</option>
                                 {
                                     customer.map((ele)=>{
                                         return <option key={ele._id} value={ele.name} >{ele.name} </option>
                                     })
                                 }
                                 </select>  
                                 <hr/>      
                    </div>
                </div>
                <div className='row'>
                <label className='form-label'>Line Items </label>
                    <div className='col-md-4'>
                        <select value={prod} onChange={handleProd} className='form-select'>
                                   <option>Select Product </option> 
                                   {
                                       product.map((ele)=>{
                                           return <option value={ele.name} key={ele._id}>{ele.name} </option>
                                       })
                                   }
                        </select>
                    </div>
                    <div className='col-md-2'>
                     <button onClick={handleCountDec} className='btn btn-outline-info btn-sm'>-</button><span className='count ml-1 mr-1'>  {count}  </span>  <button className='btn btn-sm btn-outline-info' onClick={handleCount} >+</button>          
                         </div>
                </div>
                </form>
            </div>
        </div>
    )
}
export default Billing