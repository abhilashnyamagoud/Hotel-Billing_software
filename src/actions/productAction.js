import axios from 'axios'

const tokenVal=JSON.parse(localStorage.getItem('token'))||[]

const postProduct=(n)=>{
    return{
        type:'POST_PRODUCT',
        payload:n
    }
}

export const startPostProduct=(formData)=>{
    return(dispatch)=>{
        axios.post('http://dct-billing-app.herokuapp.com/api/products',formData,{
            headers:{Authorization:`Bearer ${tokenVal.token}`}
        })
        .then((res)=>{
            const result=res.data
            // console.log(result,'result')
            if(result.hasOwnProperty('errors')){
                alert(result.errors)
            }else{
                dispatch(postProduct(result))
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
const getProduct=(n)=>{
    return{
        type:'GET_PRODUCT',
        payload:n
    }
}
export const startGetProduct=()=>{
    return(dispatch)=>{
        axios.get('http://dct-billing-app.herokuapp.com/api/products',{
            headers:{Authorization:`Bearer ${tokenVal.token}`}
        })
        .then((res)=>{
            const result=res.data
            // console.log(result)
            dispatch(getProduct(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
    const removeProduct=(n)=>{
        return{
            type:'REMOVE_PRODUCT',
            payload:n
        }
    }
export const startRemoveProduct=(id)=>{
    return(dispatch)=>{
        axios.delete(`http://dct-billing-app.herokuapp.com/api/products/${id}`,{
            headers:{Authorization:`Bearer ${tokenVal.token}`}
        })
        .then((res)=>{
            const result=res.data
            dispatch(removeProduct(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
        const editProduct=(n)=>{
            return {
                type:'EDIT_PRODUCT',
                payload:n
            }
        }
export const startEditProduct=(formData,_id)=>{
    return(dispatch)=>{
        axios.put(`http://dct-billing-app.herokuapp.com/api/products/${_id}`,formData,{
            headers:{Authorization:`Bearer ${tokenVal.token}`}
        })
        .then((res)=>{
            const result=res.data
            dispatch(editProduct(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}