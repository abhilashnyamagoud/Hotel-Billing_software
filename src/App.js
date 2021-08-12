import React,{useEffect} from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import { useDispatch } from 'react-redux';
import { startGetCust } from './actions/customerAction';
import { startGetProduct } from './actions/productAction';

const App=(props)=>{
  const dispatch=useDispatch()

  useEffect(()=>{
    if(localStorage.getItem('token')){
      dispatch(startGetCust())
    }
},[])

useEffect(()=>{
  if(localStorage.getItem('token')){
    dispatch(startGetProduct())
  }
},[])

  return(
    <div>
      <Navbar/>
    </div>
  )
}

export default App