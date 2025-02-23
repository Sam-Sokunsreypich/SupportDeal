import React from "react";
import { useParams } from "react-router-dom";
import { getAllShops } from "../../data/shop";
import getAllProduct from '../../data/products.js'

export default function SingleShop() {
  const { shopId } = useParams();
  const shops = getAllShops();
  const shop = shops.find((s) => s.id === parseInt(shopId));

  const products = getAllProduct().filter((product) => product.shop === shop?.name);

  if (!shop) {
    return <h2 className="text-center text-red-500 text-xl">Shop not found!</h2>;
  }

  return (
    <div className=" mt-28 pb-10 px-10 md:pb-16 md:px-16 lg:px-20 lg:pb-20 grid gap-3 lg:gap-5">
      <div className="flex gap-6">
        <img src={shop.Image} alt={shop.name} className="w-64 h-64 object-cover rounded-full" />
        <div className="pl-1">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">{shop.name}</h1>
          <p className="text-gray-600">{shop.type}</p>
          <p className="text-gray-600">📍 {shop.Address}</p>
          <p className="text-gray-600">📞 {shop.phoneStore}</p>
          <p className="text-gray-600">
            🕒 Open: {shop.open} - {shop.close}
          </p>
        </div>
      </div>

      <h2 className="mt-6 text-2xl font-bold">Products Available</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {products.length > 0 ? (
          products
          .map((card) => (
            <div key={card.id} className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="relative">
              <img
                src={`${card.image}`}
                alt="Eden Mens Oversize T-Shirt"
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-0 w-[70px] text-center right-0 py-1 px-1.5 rounded-tr-2xl rounded-bl-2xl bg-gradient-to-r from-orange-500 to-purple-500 text-white text-sm  rounded">
                <p className=' lg:text-md text-wrap'>{`${card.type}`}</p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center mb-2">
                <div className="text-yellow-400 text-sm">
                  ★★★★☆
                </div>
              </div>
              <h2 className="text-lg font-semibold text-gray-800">{card.title}</h2>
              <p className="text-sm text-gray-500 mb-2">
                Shop: <span className="text-blue-500">{card.shop}</span>
              </p>
              <p className="text-sm text-gray-500">
                Expired date: <span className=" bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">{card.expired_date}</span>
              </p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <span className="text-gray-500 line-through mr-2 relative top-1">{card.bePrice}</span>
                  <span className="text-lg font-bold bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent ">{card.afterPrice}</span>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                  {/* <FontAwesomeIcon icon="fa-solid fa-heart " /> */}
                  </button>
                  <button className="p-2 bg-purple-600 rounded-full text-white hover:bg-purple-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 6h12M6 12h12M6 18h12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          ))
        ) : (
          <p className="text-gray-500">No products available in this shop.</p>
        )}
      </div>
    </div>
  );
}
