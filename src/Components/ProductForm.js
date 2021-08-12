import React,{useState} from 'react';

const ProductForm=(props)=>{
    const {formSubmit,_id,name:prodName,price:prodPrice,handleToggle,toggle}=props
    const [name,setName]=useState(prodName?prodName:'')
    const [price,setPrice]=useState(prodPrice?prodPrice:'')
    const[formErrors,setFormErrors]=useState({})
    const errors={}

    const handleName=e=>setName(e.target.value)
    const handlePrice=e=>setPrice(e.target.value)

    const validate=()=>{
        if(name.trim().length===0){
            errors.name='Field Required'
        }
        if(price.length===0){
            errors.price='Field Required'
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        validate()
        if(Object.keys(errors).length===0){
            setFormErrors({})
            const formData={
                name,
                price
            }
            formSubmit(formData)
            setName('')
            setPrice('')
            if(toggle){
                handleToggle()
            }

        }else{
            setFormErrors(errors)
        }
    }

    return(
        <div>
            <div className='conatiner mt-3'>
                <div className='card'>
                <div className='card-header bg-info'>
                                <div className='card-title'>Product</div>
                            </div>
                            <div className='card-body'>
                                <form onSubmit={handleSubmit}>
                                  <label className='form-label' >Product Name</label>  
                                  <input type='text' value={name} className='form-control form-control-lg' onChange={handleName} placeholder='Enter Product Name' />
                                  {
                                      formErrors.name && <span className='text-danger' >{formErrors.name} </span>
                                  }<br/>
                                  <label className='form-label'>Price</label>
                                  <input type='number' className='form-control form-control-lg' value={price} onChange={handlePrice} placeholder='Enter Price' />
                                  {
                                      formErrors.price && <span className='text-danger' >{formErrors.price} </span>
                                  }<br/>
                                  <input type='submit' value='Add Product' className='btn btn-primary mt-3 btn-lg' />
                                </form>
                            </div>

                </div>

            </div>

        </div>
    )
}

export default ProductForm