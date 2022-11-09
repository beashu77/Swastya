import { GET_DATA } from "./actionTypes"

const getData =(dispatch)=>{
    fetch ('https://fakestoreapi.com/products').then((res)=>res.json()).then((res)=>dispatch({
        type:GET_DATA,
        payload:res
    }))
}

export {getData}