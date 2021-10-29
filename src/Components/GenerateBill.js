import React from 'react'
import { useSelector} from 'react-redux'

const GenerateBill=(props)=>{
    const id=props.match.params.id;

    const bill=useSelector(state=>state.bill)
    console.log('bill',bill)
    const products = useSelector(state => state.product)
    const customer=useSelector(state=>state.customer)

    const singleBill=bill.filter((ele)=>{
       return  ele._id ===id
    })
    console.log(singleBill)

    let arr=[]
    const displayname =(id)=>{
        arr = products.filter((product)=>{
            return product._id === id
        })
        return arr[0]?.name;
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
        <div className='mt-5 card container'>
            <div className='card-header'>
                <div className='card-title'>
                <h1 className='display-5'>Invoice-Details</h1>
                </div>
            </div>
            <div className='card-body'>
            {
                singleBill.map((ele)=>{
                    return <div key={ele._id}> 
                    <p>Customer Name: {custName(ele.customer)} </p>
                    <p>Date:{ele.date}</p>
                    <p>Purchase Details </p>
                    {
                        ele.lineItems.map((item)=>{
                            return <div key={item._id}>
                                <p>Product Name: {displayname(item.product)} </p>
                                <p>Product Price: {item.price}INR </p>
                                <p>Product Quantity: {item.quantity} </p>
                                <h4>Total Bill- {item.subTotal} </h4>
                             </div>
                        })
                    }
                         <button className='btn btn-lg btn-info' onClick={()=>{
                        window.print()
                    }}>Generate Bill</button>

                     </div>
                })
            }  

            </div>

        </div>
    )
}

export default GenerateBill
