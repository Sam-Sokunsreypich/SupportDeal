import React from 'react'
import { getAllShops } from '../../data/shop'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Shops() {
  const navigate = useNavigate;
  const shops = getAllShops();

  const handleShopClick = (shopId) => {
    navigate(`/shop/${shopId}`);
  }
  return (
    <>
     <section className='mt-28'>
     <div >
     <h2 className='px-16 my-10 text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold flex justify-center bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent '>Shops</h2> 
    </div>
    <div className="pb-10 px-10 md:pb-16 md:px-16 lg:px-20 lg:pb-20 grid gap-3 lg:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {
          shops.map(shop => (
            <div 
            key={shop.id}
            onClick={() => handleShopClick(shop.id)} 
            className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <Link to ={`/shop/${shop.id}`}>
              <button>
              <div >
                <img src={`${shop.Image}`}
                className='w-full h-48 object-cover'
                alt="" />
              </div>
              <div className='p-4'>
                <h3 className="text-lg font-semibold  bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">{shop.name}</h3>
                <p className="mb-1">Type: <span className='text-gray-400'>{shop.type}</span></p>
                <p>Phone:  <span className='text-gray-400'>{shop.phoneStore}</span></p>
                <p>Open At:  <span className='text-gray-400'>{shop.open}</span></p>
                <p className='mb-1'>Close At:  <span className='text-gray-400'>{shop.close}</span></p>
                <p>Address:  <span className='text-gray-400'>{shop.Address}</span></p>
              </div>
              </button>
              </Link>
            </div>
          ))
        }
    </div>
      </section> 
    </>
  )
}
