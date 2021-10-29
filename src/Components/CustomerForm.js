import React from 'react';
import { useFormik } from 'formik';


const CustomerForm=(props)=>{
    const {formSubmit,email:emaill,mobile:phone,name:nameA,handleEdit,toggle}=props

    const validate=values=>{
        const errors={};
        if(!values.name){
            errors.name='Required';
        }
        if(!values.email){
            errors.email='Required'
        }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email='Invalid email address'
        }
        if(!values.mobile){
            errors.mobile='Required'
        }
        return errors
    }

    const formik=useFormik({
        initialValues:{
            name:nameA?nameA:'' ,
            mobile:phone?phone:'',
            email:emaill?emaill:''
            
        },
        validate,
        onSubmit:values=>{
            formSubmit(values)
            if(toggle){
                handleEdit()
            }
        }
    })
    return(
        <div >
            <h3 className='display-4'>Add Customer</h3>
                <div>
                    <div className='card border-0 p-2 rounded'>
                        <div className='card-header bg-info'>
                            <div className='card-title'>Enter Customer Details</div>
                        </div>
                        <div className='card-body'>
                        <form onSubmit={formik.handleSubmit}>
                     <label className='form-label'>Name</label> 
                     <input type='text' name='name' id='id' className='form-control' value={formik.values.name} onChange={formik.handleChange} placeholder='Enter Customer Name'/>

                     {formik.errors.name && <div className='text-danger'>{formik.errors.name}</div>}
                     <label className='form-label'>Mobile</label>   
                     <input type='number' name='mobile' id='mobile' className='form-control' value={formik.values.mobile} onChange={formik.handleChange} placeholder='Enter Customer Mobile Number' />

                     {formik.errors.mobile && <div className='text-danger'>{formik.errors.mobile}</div>}
                     <label className='form-label'>Email</label>
                     <input type='email' name='email' id='email' className='form-control' value={formik.values.email} onChange={formik.handleChange} placeholder='Enter Customer Mail-id' />

                     {formik.errors.email && <div className='text-danger'>{formik.errors.email}</div>}
                     <input type='submit' value='Submit' className='btn btn-outline-info mt-3 btn-block' />
                    </form>
                        </div>
                    </div>
                </div>
    </div>
    )
}

export default CustomerForm