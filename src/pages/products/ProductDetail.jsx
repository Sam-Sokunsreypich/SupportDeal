import React from 'react'
import { Link, useParams } from 'react-router-dom';
import getAllProduct from '../../components/data/products';
import { useGetProductByIdQuery } from '../../features/auth/addProductApi';
import ProductSkeleton from '../../components/skeleton/ProductSkeleton';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/api/cartSlice';
import { toast, ToastContainer } from 'react-toastify';

export default function ProductDetail() {
    const { id } = useParams();
    console.log('id', id)
    // const allProducts = getAllProduct();
    // const product = allProducts.find((p) => p.id === parseInt(id));
   const { data: product, isLoading, error } = useGetProductByIdQuery(id);
  
   console.log('product', product)
    const base_url = import.meta.env.VITE_BASE_URL;
    if (!product) {
       return        <div className='flex justify-center mt-28 mb-10'>
       <ProductSkeleton/>
       </div>
      
    }

      const dispatch = useDispatch();
    
      const handleAddToCart = (product) =>{
        dispatch(addToCart(product))
        console.log('product', product)
      }
      
      const showToastMessage = () => {
        toast.success("Add to Cart Successfully !");
      }
    

  return (
    <>
       <div className="max-w-4xl mx-auto mt-20 p-6  rounded-lg flex gap-10 md:justify-between">
      <div>
      <img
        src={`${base_url}/storage/${product.image}`}
        alt={product.title}
        className="w-full h-96 object-cover rounded-lg"
      />
      </div>
      <div className='bg-white shadow-md p-5'>
      <h2 className="text-2xl font-bold mt-4">{product.title}</h2>
      <p className="text-gray-500 text-sm mt-2">{product.description}</p>
      {/* <p className="text-gray-500 text-sm">Expires on: {product.expired_date}</p> */}
      <div className="mt-4">
        <span className="text-gray-500 line-through mr-2">{product.price}</span>
        <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
          {product.after_dis_price}
        </span>
      </div>
      <Link to="/" className="inline-block mt-6 text-blue-500 hover:underline">
        Back to Products
      </Link>
      <div className="relative rounded-md my-5 ">
          <button
            type="button"
            className="border cursor-pointer text-white shadow-sm bg-gradient-to-r from-orange-500 to-purple-500 hover:bg-gradient-to-r from-orangeColor to-purpleColor focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2 text-center "
            onClick={()=>{
              handleAddToCart(product);
              showToastMessage()
            }}
          >
            add to cart
          </button>
          <ToastContainer 
                                 stacked
                                  hideProgressBar
                                  position="bottom-right"
                                  style={{ width: "20vw" }}
                                />
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
