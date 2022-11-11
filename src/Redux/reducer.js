export const reducer =(oldstate,action)=>{
    switch (action.type) {
        case 'ADD_PRODUCTS':
            
            return {
                   ...oldstate,
                   products:action.payload
            }

        case 'ADD_TO_CART' :
            return {
                ...oldstate,
                cart:[{...action.payload}, ...oldstate.cart]
            }

        case 'REMOVE_FROM_CART' :
            return {
                ...oldstate,
                cart :oldstate.cart.filter(
                    (cartProduct)=>cartProduct.id !== action.payload.id
                )
            }

        case 'CHANGE_CART_QTY':
            return {
                ...oldstate,
                cart: oldstate.cart.filter( (cartProduct) => 
                cartProduct.id === action.payload.id ? ( cartProduct.qty = action.payload.qty ) : cartProduct.qty)
            }
            
         
    
        default:
            return {
                oldstate
            }
    }
}