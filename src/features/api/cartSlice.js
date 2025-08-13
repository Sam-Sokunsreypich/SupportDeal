import { createSlice } from '@reduxjs/toolkit';
import React from 'react'

const initialState = { itemList: [], quantity: 0 , totalQuantity: 0};

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const product = action.payload;
            console.log('product', product)
            // const existing = state.itemList.find((item) => item.id === product.id);
            const existingItem = state.itemList.find(item => item.id === action.payload.id);

                if (existingItem) {
                existingItem.quantity++;
                } else {
                state.itemList.push({
                    ...action.payload,
                    quantity: 1,
                    totalPrice: action.payload.price,
                });
                console.log('state.itemList', state.itemList)
                }
             state.totalQuantity++;
        },
        removeFromCart: (state, action) => {
            state.itemList = state.itemList.filter(item => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.itemList = [];
        },
        increaseQuantity: (state, action) => {
    const item = state.itemList.find(i => i.id === action.payload);
    if (item) item.quantity += 1;
  },
  decreaseQuantity: (state, action) => {
    const item = state.itemList.find(i => i.id === action.payload);
    if (item && item.quantity > 0) item.quantity -= 1;
  },
        
    }
})

export const {addToCart,removeFromCart,clearCart,increaseQuantity,decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;
