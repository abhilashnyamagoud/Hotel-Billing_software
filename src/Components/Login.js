import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';

const Login=(props)=>{
    const {handleToggle}=props
    const validate=values=>{
        const errors={};
        if(!values.email){
            errors.email='Required'
        }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email='Invalid email address'
        }
        if(!values.password){
            errors.password='Required'
        }
        return errors
    }

    const formik=useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validate,
        onSubmit:values=>{
        //  console.log(values)
        axios.post('http://dct-billing-app.herokuapp.com/api/users/login',values)
        .then((res=>{
            const result=res.data
            if(result.hasOwnProperty('errors')){
                alert(result.errors)
            }else{
                localStorage.setItem('token',JSON.stringify(result))
                handleToggle()
                props.history.push('/')
                window.location.reload()
            }
        }))
        }
    })

    return(
        <div className='mt-5 p-3 bg-light'>
        <div className='row'>
           <div className='col'>
               <h4><a href='/login' className='text-danger'>Bangalore Restaurant / </a><a href='/login' className='text-secondary'>Login</a> </h4>
           </div>
           </div>
       <div className='container'>
       <h1 className='display-3'>Login</h1>
       <div className='row'>
           <div className='col-md-6'>
           <div className='card'>
               <div className='card-header'>
                   <div className='card-title'>Login To Account</div>
               </div>
               <div className='card-body'>
                   <form onSubmit={formik.handleSubmit}>
                   <label className='form-label'>Email</label>
                   <input type='email' name='email' id='email' className='form-control' value={formik.values.email} onChange={formik.handleChange} placeholder='Enter your Email' />
                   {formik.errors.email && <div className='text-danger text-center'>{formik.errors.email}</div>}
                   <label className='form-label mt-3'>Password</label>
                   <input type='password' name='password' id='password' className='form-control' value={formik.values.password} onChange={formik.handleChange} placeholder='Enter your Password' />
                   {formik.errors.password && <div className='text-danger text-center'>{formik.errors.password}</div>}
                   <input type='submit' value='Login' className='btn btn-outline-success btn-block mt-4' />
                   </form>
               </div>
               </div>   
           </div>
       </div>
       </div>
   </div>
    )
}

export default Login