import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../../features/api/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cart() {
  const itemList = useSelector((state) => state.cart?.itemList || []);
  console.log("itemList", itemList);

  // const cartItem = useMemo(() => {
  //   return itemList.filter((item) => item.quantity > 0);
  // }, [itemList]);

  const cartItems = useSelector((state) =>
    state.cart.itemList.filter((item) => item.quantity > 0)
  );
  console.log("cartItems", cartItems);

 const base_url = import.meta.env.VITE_BASE_URL;

  const subTotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);

 const dispatch = useDispatch();

const handleIncrease = (id) => {
  dispatch(increaseQuantity(id));
};

const handleDecrease = (id) => {
  dispatch(decreaseQuantity(id));
};

const handleRemove = (id) => {
  dispatch(removeFromCart(id));
}

const clearCart = () => {
  dispatch(clearCart());
}

const showToastMessage = () => {
    toast.success("Product Deleted Successfully !", {
      // position: "top-right",
      // className:"mt-18"
    });
  }


  return (
    <>
      <div className="mt-28 ">
        <h2 className="px-16 my-10 text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold flex justify-center bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent ">
          Products Cart
        </h2>
      </div>
      <div className="bg-slate-50 py-8">
        <div className="container mx-auto px-8 ">
          {/* <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1> */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                cartItems.map((item) => (
                 
                    <div key={item.id}>
                      <div className="shadow-sm ">
                        <div className="bg-white rounded-lg p-6 mb-4">
                          <table className="w-full">
                            <thead>
                              <tr>
                                <th className="text-left font-semibold">Product</th>
                                <th className="text-left font-semibold">item</th>
                                <th className="text-left font-semibold">
                                  Quantity
                                </th>
                                <th className="text-left font-semibold">Total</th>
                                <th className="text-left font-semibold"></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="py-4">
                                  <div className="flex items-center">
                                    <img
                                      className="h-16 w-16 mr-4"
                                      src={`${base_url}/storage/${item.image}`}
                                      alt="Product image"
                                    />
                                    <span className="font-semibold">
                                      {item.title}
                                    </span>
                                  </div>
                                </td>
                                <td className="py-4">${item.price}</td>
                                <td className="py-4">
                                  <div className="flex items-center">
                                    <button onClick={()=>handleDecrease(item.id)} className="border rounded-md py-2 px-4 mr-2">
                                      -
                                    </button>
                                    <span className="text-center w-8">
                                      {item.quantity}
                                    </span>
                                    <button onClick={()=>handleIncrease(item.id)} className="border rounded-md py-2 px-4 ml-2">
                                      +
                                    </button>
                                  </div>
                                </td>
                                <td className="py-4">${(item.price* item.quantity).toFixed(2)}</td>
                              
                                 <td onClick={()=>{
                                handleRemove(item.id);
                                showToastMessage()
                                }}
                                className="cursor-pointer"
                                >
                                  <FontAwesomeIcon icon={faTrash} style={{ color: "#c92626" }} />
                               </td>
                               
                             
                              </tr>
                              {/* <!-- More product rows --> */}
                            </tbody>
                          </table>
                          
                        </div>
                      </div>
                    </div>
                 
                ))
              )}
            </div>

            <div className="md:w-1/4 sticky shadow-sm top-24 h-fit">
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${subTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Taxes</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">${subTotal.toFixed(2)}</span>
                </div>
                <button className="bg-gradient-to-r from-orange-500 to-purple-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer 
                                                      stacked
                                                       hideProgressBar
                                                       position="bottom-right"
                                                       style={{ width: "20vw" }}
                                                     />
    </>
  );
}
