import axios from "axios"

const tokenValue=JSON.parse(localStorage.getItem('token'))||[]
const getUser=(n)=>{
    return {
        type:'GET_USER',
        payload:n
    }
}

export const startGetUser=()=>{
    
    return(dispatch)=>{
        axios.get('http://dct-billing-app.herokuapp.com/api/users/account',{
            headers:{Authorization:`Bearer ${tokenValue.token} ` }
        })
        .then((res)=>{
            const result=res.data
            // console.log(result)
            dispatch(getUser(result))
        })
        .catch((err)=>{
            alert(err.message)
        })
    }

}