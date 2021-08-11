import React,{useState,useEffect} from 'react';
import { Link,Route,withRouter } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Customers from './Customers';
import Account from './Account';
import Products from './Products';
import Billing from './Billing';
import PrivateRoute from './PrivateRoute';

const Navbar=(props)=>{
    const[toggle,setToggle]=useState(false)

    const handleToggle=()=>{
        setToggle(!toggle)
    }

    useEffect(()=>{
          if(localStorage.getItem('token')){
              handleToggle()
          }  
    },[])

    const logout=()=>{
        const confirmLogout=window.confirm("Are You Sure")
        if(confirmLogout){
            localStorage.removeItem('token')
            handleToggle()
            props.history.push('/')
        }
    }

    return(
        <div>
            <nav className='navbar navbar-expand-lg bg-dark navbar-dark fixed-top'>
                <div className='container'>
                    <a href='/' className='navbar-brand text-info' >Restaurant</a>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link'>Home</Link>
                        </li>
                        {
                            toggle ?<><li className='nav-item'>
                               <Link to='/customers' className='nav-link' >Customers</Link>  </li>
                               <li className='nav-item'><Link to='/' onClick={logout} className='nav-link'>Logout</Link> </li>
                               <li className='nav-item'><Link to='/account' className='nav-link'>Account</Link> </li>
                               <li className='nav-item'><Link to='/product' className='nav-link'>Product </Link> </li>
                               <li className='nav-item'><Link to='/billing' className='nav-link'>Billing </Link> </li>
                                </>:<>  <li className='nav-item'>
                            <Link to='/register' className='nav-link'>Register</Link>
                        </li>
                        <li className='nav-item'>
                                <Link to='/login' className='nav-link' >Login</Link>
                        </li> </>
                        }
                    </ul>
                </div>
            </nav>
            <Route path='/' component={Home} exact />
            <Route path='/register' component={Register} exact />
            <Route path='/login' render={(props)=>{
                return <Login {...props} handleToggle={handleToggle}  exact/>
            }} />
            <PrivateRoute path='/customers' component={Customers} exact />
            <PrivateRoute path='/account' component={Account} exact />
            <PrivateRoute path='/product' component={Products} exact />
            <PrivateRoute path='/billing' component={Billing} exact/>
            
        </div>
    )
}

export default withRouter(Navbar)
