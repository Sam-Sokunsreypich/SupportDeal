import React from 'react'
import{createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
const baseUrl = import.meta.env.VITE_BASE_URL;
export const apiSlice = createApi( {
   reducerPath: "apiSlide",
   baseQuery: fetchBaseQuery({baseUrl:`${baseUrl}`}),
   endpoints: (build) => ({
    
   })
})
