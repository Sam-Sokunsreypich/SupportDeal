import React from 'react'
import { Link, useParams } from 'react-router-dom';
import getAllProduct from '../../data/products.js'

export default function ProductDetail() {
    const { id } = useParams();
    const allProducts = getAllProduct();
    const product = allProducts.find((p) => p.id === parseInt(id));
  
    if (!product) {
      return <h2 className="text-center text-xl mt-20">Product Not Found</h2>;
    }
  return (
    <>
       <div className="max-w-4xl mx-auto mt-20 p-6  rounded-lg flex gap-10 md:justify-between">
      <div>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-96 object-cover rounded-lg"
      />
      </div>
      <div className='bg-white shadow-md p-5'>
      <h2 className="text-2xl font-bold mt-4">{product.title}</h2>
      <p className="text-gray-500 text-sm mt-2">Shop: {product.shop}</p>
      <p className="text-gray-500 text-sm">Expires on: {product.expired_date}</p>
      <div className="mt-4">
        <span className="text-gray-500 line-through mr-2">{product.bePrice}</span>
        <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
          {product.afterPrice}
        </span>
      </div>
      <Link to="/" className="inline-block mt-6 text-blue-500 hover:underline">
        Back to Products
      </Link>
      <div className="relative rounded-md my-5 ">
          <button
            type="button"
            className="border text-white shadow-sm bg-gradient-to-r from-orange-500 to-purple-500 hover:bg-gradient-to-r from-orangeColor to-purpleColor focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2 text-center "
          >
            add to cart
          </button>
          </div>
          <div className="relative  rounded-md my-5 ">
          <button
            type="button"
            className="border shadow-sm text-white bg-gradient-to-r from-orange-500 to-purple-500  hover:bg-gradient-to-r from-orangeColor to-purpleColor focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2 text-center "
          >
            buy now!
          </button>
          </div>
      </div>
    </div>
    </>
  )
}
