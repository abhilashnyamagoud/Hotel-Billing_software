import axios from "axios";

const tokenVal=JSON.parse(localStorage.getItem('token'))||[]


const postBill=(n)=>{
    return{
        type:'POST_BILL',
        payload:n
    }
}

export const startPostBill=(formData)=>{
    return(dispatch)=>{
        axios.post('http://dct-billing-app.herokuapp.com/api/bills',formData,{
            headers:{Authorization:`Bearer ${tokenVal.token}`}
        })
        .then((res)=>{
            const result=res.data
            console.log('value', result)
            if(result.hasOwnProperty('errors')){
                // console.log(result.errors)
            }else{
                dispatch(postBill(result))
            }
           
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}