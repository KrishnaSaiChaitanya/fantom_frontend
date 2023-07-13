const INIT_STATE = {
    carts :[]
};


export const cartreducer = (state = INIT_STATE,action)=>{
    switch (action.type) {
        case "ADD_CART":
            
        const ItemIndex = state.carts.findIndex((item)=> item.id === action.payload.id);


            if(ItemIndex >= 0){
                state.carts[ItemIndex].quantity +=1
                return {
                    ...state,
                    carts:[...state.carts]
                }
            }else{
                const temp = {...action.payload,quantity:1}
                 return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }    
            case "RMV_CART":
                const data = state.carts.filter((el)=>el.id !== action.payload);          
                return {
                    ...state,
                    carts:data
                }


            case "RMV_ONE":
                const ItemIndex_dec = state.carts.findIndex((item)=> item.id === action.payload.id);
        
                if(state.carts[ItemIndex_dec].quantity >= 1){
                    const dltiteams = state.carts[ItemIndex_dec].quantity -= 1
                    console.log([...state.carts,dltiteams]);
    
                    return {
                        ...state,
                        carts:[...state.carts]
                    }
                }else if(state.carts[ItemIndex_dec].quantity === 1 ){
                    const data = state.carts.filter((el)=>el.id !== action.payload);
    
                    return {
                        ...state,
                        carts:data
                    }
                }
        
            default :
              return state       
    }
}