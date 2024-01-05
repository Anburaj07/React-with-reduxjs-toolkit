import { createSlice } from "@reduxjs/toolkit";

//actions,reducer
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        products:[]
    },
    reducers:{
        addProduct:(state,action)=>{
            state.products.push(action.payload);
        },
        clearCart:(state)=>{
            state.products.length=0;
        }
    }
})

export const {addProduct,clearCart}=cartSlice.actions;
export default cartSlice.reducer