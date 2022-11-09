import { GET_DATA } from "./actionTypes";

const initState ={
    data:[] || '',
    cart:[] || ''

}

export const reducer =(store=initState,action)=>{
    switch (action.type) {
        case GET_DATA:
            return {
                ...store,data:[...store.data,action.payload]
            }
            
            
    
        default:
            break;
    }
}