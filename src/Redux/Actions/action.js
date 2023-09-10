import {BUY_ITEM} from "../ActionTypes/actionType";
import { DELETE_ITEM } from "../ActionTypes/actionType";

const addToCart=(productId,productName,productQuantity,productprice)=>{

return {
    type:BUY_ITEM,
    payload:{
        id:productId,
        Name:productName,
        Quantity:productQuantity,
        price:productprice
    }
}

}

// Remove Item Action
const removeItem=(productId)=>{

return{
    type:DELETE_ITEM,
    payload:productId

}

}

export{addToCart,removeItem}