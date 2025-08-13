import React from 'react'
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from '../features/api/apiSlice';
import cartReducer from '../features/api/cartSlice';

export const store = configureStore( {
  reducer: {
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
},

  middleware: (getDefultMiddleware) => getDefultMiddleware().concat(apiSlice.middleware)
})
setupListeners(store.dispatch);