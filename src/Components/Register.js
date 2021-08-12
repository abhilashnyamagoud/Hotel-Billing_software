import React from 'react';
import { useFormik } from 'formik';
import explore from '../img/explore.jpg'
import axios from 'axios'
import swal from 'sweetalert'


const Register=(props)=>{

    const validate=values=>{
        const errors={};
        if(!values.username){
            errors.username='Required';
        }
        if(!values.email){
            errors.email='Required'
        }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email='Invalid email address'
        }
        if(!values.password){
            errors.password='Required'
        }else if(values.password.length<4 && values.password.length>10 ){
            errors.password='Password Should Be min-4 max-10'
        }
        if(!values.businessName){
            errors.businessName='Required';
        }
        if(!values.address){
            errors.address='Required'
        }
        return errors
    }

    const formik=useFormik({
        initialValues:{
            username:'',
            email:'',
            password:'',
            businessName:'',
            address:''
        },
        validate,
        onSubmit:values=>{
            // console.log(values)
            axios.post('http://dct-billing-app.herokuapp.com/api/users/register',values)
            .then((res)=>{
                const result=res.data
               
                if(result.hasOwnProperty('errors')){
                    swal(result.errors)
                }else{
                    console.log(result)
                    swal("Great!", "You Registered In Successfully!", "success");
                    props.history.push('/login')
                }
                
            })
            .catch((err)=>{
                alert(err.message)
            })
        }
    })

    return(
        <div className='bg-light p-3 mt-5'>
             <div className='row'>
                <div className='col'>
                    <h4><a href='/register' className='text-danger'>Bangalore Restaurant /</a><a href='/register' className='text-secondary'> Register</a> </h4>
                </div>
            </div>
        <div className=' container'>
            <div className='row'>
            <div className='col-md-6'>
                <div className='card mt-3'>
                    <div className='card-header'>
                    <div className='card-title'>Register</div>
                    </div>
                    <div className='card-body'>
                        <form className='form' onSubmit={formik.handleSubmit}>
                        <label className='form-label'>UserName</label>
                        <input className='form-control' id='username' name='username' type='text' value={formik.values.username} onChange={formik.handleChange} placeholder='Enter your username' />
                        {formik.errors.username && <div className='text-danger'>{formik.errors.username}</div>}
                        <label className="form-label">Email</label>
                        <input className='form-control' id='email' name='email' type='email' value={formik.values.email} onChange={formik.handleChange} placeholder='Enter your Email' />
                        {formik.errors.email && <div className='text-danger'>{formik.errors.email}</div>}
                        <label className="form-label">Password</label>
                        <input type='password' className='form-control' id='password' name='password' value={formik.values.password} onChange={formik.handleChange} placeholder='Enter your password'/>
                        {formik.errors.password && <div className='text-danger'>{formik.errors.password}</div>}
                        <label className="form-label">businessName</label>
                        <input className='form-control' id='businessName' name='businessName' value={formik.values.businessName} onChange={formik.handleChange} placeholder='Enter your Business name' />
                        {formik.errors.businessName && <div className='text-danger'>{formik.errors.businessName}</div>}
                        <label className="form-label">Address</label>
                        <input type='text' className='form-control' id='address' name='address' value={formik.values.address} onChange={formik.handleChange} placeholder='Enter your Address' />
                        {formik.errors.address && <div className='text-danger'>{formik.errors.address}</div>}
                        <input type='submit' value='Register' className='btn btn-outline-success btn-block mt-3' />
                        </form>
                    </div>
                </div>
            </div>
            <div className='col-md-4 text-muted py-5' >
              <img src={explore} alt='App'className='img-fluid mb-3 rounded-circle'/>
                <h3>Order from App available</h3>
                <p className='lead'>For more-info Check-Our Website</p>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Register