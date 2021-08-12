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
    const getBills=(n)=>{
        return {
            type:'GET_BILLS',
            payload:n
        }
    }
export const startGetBills=()=>{
    return(dispatch)=>{
        axios.get('http://dct-billing-app.herokuapp.com/api/bills',{
            headers:{Authorization:`Bearer ${tokenVal.token}`}
        })
        .then((res)=>{
            const result=res.data
            dispatch(getBills(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
    const deleteBill=(n)=>{
        return{
            type:'REMOVE_BILL',
            payload:n
        }
    }
export const startDeleteBill=(id)=>{
    return(dispatch)=>{
        axios.delete(`http://dct-billing-app.herokuapp.com/api/bills/${id}`,{
            headers:{Authorization:`Bearer ${tokenVal.token}`}
        })
        .then((res)=>{
            const result=res.data
            dispatch(deleteBill(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}   
    const getSingle=(n)=>{
        return{
            type:'GET_SINGLE_BILL',
            payload:n
        }
    }
export const startGetSingleBill=(id)=>{
    return(dispatch)=>{
        axios.get(`http://dct-billing-app.herokuapp.com/api/bills/${id}`,{
            headers:{Authorization:`Bearer ${tokenVal.token}`}
        })
        .then((res)=>{
            const result=res.data
            // console.log('hello',result)
            dispatch(getSingle(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}