import React from 'react'
import { apiSlice } from '../api/apiSlice'

export const addProductApi = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        createProduct: builder.mutation({
            query:(body) => {
                return{
                    url: "/api/products",
                    method: "POST",
                    body,
                    header: {
                        "Content-Type" : "application/json",
                    }
                }
            }
        }),
        getProduct: builder.query({
            query:() => {
                return{
                    url:"/api/products",
                    method: "GET",
                    header:{
                        "Content-Type": "application/json",
                    }
                }
            }
        }),
        getProductById: builder.query({
            query:(product_id) => {
                return{
                    url:`/api/products/${product_id}`,
                    method: "GET",
                    header:{
                        "Content-Type": "application/json",
                    }
                }
            }
        })
    })
})


export const {useCreateProductMutation,useGetProductQuery, useGetProductByIdQuery} = addProductApi;