import axios from "axios"

const tokenValue=JSON.parse(localStorage.getItem('token'))||[]

const postCust=(n)=>{
    return {
        type:'POST_CUST',
        payload:n
    }
}

export const startPostCust=(formData)=>{

    return(dispatch)=>{
        axios.post('http://dct-billing-app.herokuapp.com/api/customers',formData,{
            headers:{Authorization:`Bearer ${tokenValue.token}`}
        })
        .then((res)=>{
            const result=res.data
            if(result.hasOwnProperty('errors')){
                alert(result.errors)
            }else{
                dispatch(postCust(result))
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
    const getCust=(n)=>{
        return {
            type:'GET_CUST',
            payload:n
        }
    }
export const startGetCust=()=>{
    return(dispatch)=>{
        axios.get('http://dct-billing-app.herokuapp.com/api/customers',{
            headers:{Authorization:`Bearer ${tokenValue.token}` }
        })
        .then((res)=>{
            const result=res.data
            // console.log(result)
            dispatch(getCust(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
const removeCust=(n)=>{
    return {
        type:'REMOVE_CUST',
        payload:n
    }
}
export const startRemoveCust=(id)=>{
    return(dispatch)=>{
        axios.delete(`http://dct-billing-app.herokuapp.com/api/customers/${id}`,{
            headers:{Authorization:`Bearer ${tokenValue.token}`}
        })
        .then((res)=>{
            const result=res.data
            dispatch(removeCust(result._id))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
    const updateCust=(n)=>{
        return {
            type:'UPDATE_CUST',
            payload:n
        }
    }
export const startUpdateCust=(formData,_id)=>{
        return(dispatch)=>{
            axios.put(`http://dct-billing-app.herokuapp.com/api/customers/${_id}`,formData,{
                headers:{Authorization:`Bearer ${tokenValue.token}`}
            })
            .then((res)=>{
                const result=res.data
                // console.log(result)
                dispatch(updateCust(result))
            })
            .catch((err)=>{
                alert(err.message)
            })
        }
}