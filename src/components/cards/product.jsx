import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/api/cartSlice';
import { useGetProductQuery } from '../../features/auth/addProductApi';

//   const base_url = import.meta.env.VITE_BASE_URL;

//   const dispatch = useDispatch();

//   const handleAddToCart = (product) =>{
//     dispatch(addToCart(product))
//     console.log('product', product)
//   }

//  const { data: products = [], isLoading, error } = useGetProductQuery();

//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Something went wrong!</p>;

export default function product(products) {
  return (
    <>
      <div className="pb-10 px-10 md:pb-16 md:px-16 lg:px-20 lg:pb-20 grid gap-3 lg:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {products.map((card) => (
          
            <div
              key={card.id}
              className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
            >
              <Link to={`/product/${card.id}`} key={card.id}>
              <div className="relative">
                <img
                  src={`${base_url}/storage/${card.image}`}
                  alt="Eden Mens Oversize T-Shirt"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 w-[70px] text-center right-0 py-1 px-1.5 rounded-tr-2xl rounded-bl-2xl bg-gradient-to-r from-orange-500 to-purple-500 text-white text-sm  rounded">
                  <p className=" lg:text-md text-wrap">{`${card.discount} %`}</p>
                </div>
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
                <h2 className="text-lg font-semibold text-gray-800">
                  {card.discription}
                </h2>
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
                    <button className="p-1" 
                    type="button"
                    onClick={(e) => {
                        e.stopPropagation(); // prevent outer click
                        handleAddToCart(card);
                      }}>
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        size="lg"
                        style={{ color: "#B197FC" }}
                      />
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
          
        ))}
      </div>
    </>
  )
}
