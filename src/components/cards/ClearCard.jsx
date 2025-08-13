import React from 'react'
import getAllProduct from '../data/products.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { addToCart } from '../../features/api/cartSlice.js';
export default function ClearCard({getAllProduct}) {
    
  const base_url = import.meta.env.VITE_BASE_URL;
    const clearCard = getAllProduct?.filter(products => products.store_category === "Clearence Sale") || [];

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
      <div className=" grid gap-3 mb-5 lg:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {clearCard
              .map((card) => (
                <div
              key={card.id}
              className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
            >
              <Link to={`/product/${card.id}`} key={card.id}>
              <div className="relative">
                <img
                loading="lazy"
                  src={`${base_url}/storage/${card.image}`}
                  alt="Eden Mens Oversize T-Shirt"
                  className="w-full h-48 object-cover"
                />
                  {card.discount > 0 && (
                <div className="absolute top-0 w-[70px] text-center right-0 py-1 px-1.5 rounded-tr-2xl rounded-bl-2xl bg-gradient-to-r from-orange-500 to-purple-500 text-white text-sm">
                  <div className="absolute top-0 w-[70px] text-center right-0 py-1 px-1.5 rounded-tr-2xl rounded-bl-2xl bg-gradient-to-r from-orange-500 to-purple-500 text-white text-sm">
                  <p className="lg:text-md text-wrap">Clearance</p>
                  <p className="lg:text-md text-wrap">Sale</p>
                </div>
                </div>
              )}
              </div>
              </Link>
             
              <div className="p-4">
                 <Link to={`/product/${card.id}`} key={card.id}>
                <div className="flex items-center mb-3">
                  <div className=" text-sm">
                    <FontAwesomeIcon
                      icon={faStarSolid}
                      style={{ color: "#FFD43B" }}
                    />
                    <FontAwesomeIcon
                      icon={faStarSolid}
                      style={{ color: "#FFD43B" }}
                    />
                    <FontAwesomeIcon
                      icon={faStarSolid}
                      style={{ color: "#FFD43B" }}
                    />
                    <FontAwesomeIcon
                      icon={faStarSolid}
                      style={{ color: "#FFD43B" }}
                    />
                    <FontAwesomeIcon
                      icon={faStarRegular}
                      style={{ color: "#FFD43B" }}
                    />
                  </div>
                </div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {card.title}
                </h2>
                <p className="text-md text-gray-500 mb-2">
                  {card.description}
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  Shop:{" "}
                  <span className="text-blue-500">{card.store_category}</span>
                </p>
                </Link>
                {/* <p className="text-sm text-gray-500">
                    Expired date: <span className=" bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">{card.expired_date}</span>
                  </p> */}
                <div className="flex justify-between items-center mt-4">
                  <Link to={`/product/${card.id}`} key={card.id}>
                    <div>
                    <span className="text-gray-500 line-through mr-2 relative top-1">
                      {card.price}
                    </span>
                    <span className="text-lg font-bold bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent ">
                      {card.after_dis_price}
                    </span>
                    </div>

                  </Link>
                  <div className="flex space-x-2">
                    <button className="p-1 ">
                      <FontAwesomeIcon
                        icon={faHeart}
                        size="lg"
                        style={{ color: "#e07410" }}
                      />
                    </button>
                    <div>
                      <button className="p-1 cursor-pointer" 
                    type="button"
                    onClick={(e) => {
                       e.stopPropagation(); 
                        handleAddToCart(card);
                        showToastMessage();
                      }}>
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        size="lg"
                        style={{ color: "#B197FC" }}
                      />
                      
                    </button>
                       <ToastContainer 
                       stacked
                        hideProgressBar
                        position="bottom-right"
                        style={{ width: "20vw" }}
                      />
                    </div>
                    
                  </div>
                </div>
              </div>
              
            </div>
              ))}
             </div>
    </>
  )
}
