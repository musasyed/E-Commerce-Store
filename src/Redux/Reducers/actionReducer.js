import {BUY_ITEM} from "../ActionTypes/actionType"
import { DELETE_ITEM } from "../ActionTypes/actionType"

const initialState={
cartItems:[]
}

const actionReducer=(state=initialState,action)=>{
if(action.type===BUY_ITEM){

    const { id } = action.payload;
    const updatedCartItems = state.cartItems.map((item) =>
      item.id === id
        ? { ...item, Quantity: item.Quantity + 1 }
        : item
    );

    if (updatedCartItems.some((item) => item.id === id)) {
      return { ...state, cartItems: updatedCartItems };
    } else {
      return { ...state, cartItems: [...state.cartItems, { ...action.payload, Quantity: 1 }] };
    }


    // return{
    //     ...state,
    //     cartItems:[...state.cartItems,action.payload]
    // }
       
}
else if(action.type===DELETE_ITEM){
    const productID=action.payload;
    const newArray=state.cartItems.filter((item)=>{
        
        if(item.id!==productID){
            return true;
        }
        else{
            return false;
        };
    })
    return{
        ...state,
        cartItems:[...newArray],
    };
}
else{
    return state

}



}
export default actionReducer;