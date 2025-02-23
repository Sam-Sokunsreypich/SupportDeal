import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import getAllProduct from "../data/products";
import { Link } from "react-router-dom";

export default function DisCard() {
  // const disCard = [
  // {id: 1, image:"/public/assets/20off/Camera.jpg",title:"Eden Mens oversize T Shirt ", shop:"Nika Store", expired_date:"2025-05-29", bePrice:"$20",afterPrice:"$16"},
  // {id: 2, image:"/public/assets/20off/chiken_burger.jpg",title:"Eden Mens oversize T Shirt ", shop:"Nika Store", expired_date:"2025-05-29", bePrice:"$20",afterPrice:"$16"},
  // {id: 3, image:"/public/assets/20off/shirt.avif",title:"Eden Mens oversize T Shirt ", shop:"Nika Store", expired_date:"2025-05-29", bePrice:"$20",afterPrice:"$16"},
  // {id: 4, image:"/public/assets/20off/IUNIK_Centella_Calming_Daily_Screen.jpg",title:"Eden Mens oversize T Shirt ", shop:"Nika Store", expired_date:"2025-05-29", bePrice:"$20",afterPrice:"$16"},
  // {id: 5, image:"/public/assets/20off/Macbook_Air_M2.jpg",title:"Eden Mens oversize T Shirt ", shop:"Nika Store", expired_date:"2025-05-29", bePrice:"$20",afterPrice:"$16"},
  // {id: 6, image:"/public/assets/20off/i-watch.jpg",title:"Eden Mens oversize T Shirt ", shop:"Nika Store", expired_date:"2025-05-29", bePrice:"$20",afterPrice:"$16"},
  // {id: 7, image:"/public/assets/20off/T-shirt-1.jpg",title:"Eden Mens oversize T Shirt ", shop:"Nika Store", expired_date:"2025-05-29", bePrice:"$20",afterPrice:"$16"},
  // {id: 8, image:"/public/assets/20off/set_oil_skin.webp",title:"Eden Mens oversize T Shirt ", shop:"Nika Store", expired_date:"2025-05-29", bePrice:"$20",afterPrice:"$16"}

  // ]
  const dis_20_off = getAllProduct().filter(
    (product) => product.type === "20off"
  );
  return (
    <>
      <div className=" grid gap-3 lg:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {dis_20_off.map((card) => (
          <Link to={`/product/${card.id}`} key={card.id}>
            <div
              key={card.id}
              className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
            >
              <div className="relative">
                <img
                  src={`${card.image}`}
                  alt="Eden Mens Oversize T-Shirt"
                  className="w-full h-52 object-cover"
                />
                <div className="absolute top-0 right-0 py-1 px-1.5 rounded-tr-2xl rounded-bl-2xl bg-gradient-to-r from-orange-500 to-purple-500 text-white text-sm  rounded">
                  <p>20%</p> <p> off</p>
                </div>
              </div>
              <div className="p-4">
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
                <p className="text-sm text-gray-500 mb-2">
                  Shop: <span className="text-blue-500">{card.shop}</span>
                </p>
                <p className="text-sm text-gray-500">
                  Expired date:{" "}
                  <span className=" bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
                    {card.expired_date}
                  </span>
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <span className="text-gray-500 line-through mr-2 relative top-1">
                      {card.bePrice}
                    </span>
                    <span className="text-lg font-bold bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent ">
                      {card.afterPrice}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-1 ">
                      <FontAwesomeIcon
                        icon={faHeart}
                        size="lg"
                        style={{ color: "#e07410" }}
                      />
                    </button>
                    <button className="p-1 ">
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
          </Link>
        ))}
      </div>
    </>
  );
}
