import React from "react"
import Caruosel from "../../caruosel/Caruosel"
import DisCard from "../../cards/DisCard"
import ClearCard from "../../cards/ClearCard"
import One_get_one from "../../cards/One_get_one"
export default function Homepage(){
  return(
    <>
<section className="mb-16">
    <form className="max-w-lg mx-auto">
      <div className="flex">
        {/* Dropdown Button */}
        <div className="relative z-10">
          <button
            id="dropdown-button"
            data-dropdown-toggle="dropdown"
            type="button"
            className="flex-shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-gray-900 bg-gradient-to-r from-orange-500 to-purple-500 border border-transparent rounded-s-lg hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:text-white"
          >
            All categories
            <svg
              className="w-3 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {/* Dropdown Menu */}
          <div
            id="dropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-button"
            >
              {["Mockups", "Templates", "Design", "Logos"].map((item, idx) => (
                <li key={idx}>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Search Input with Gradient Border */}
        <div className="relative w-full">
          <div className="p-[2px] rounded-e-lg bg-gradient-to-r from-orange-500 to-purple-500">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full text-sm text-gray-900 rounded-e-lg border-none focus:ring-blue-500 focus:border-blue-500 dark:text-white"
              placeholder="Search Mockups, Logos, Design Templates..."
              required
            />
          </div>
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-gradient-to-r from-orange-500 to-purple-500 rounded-e-lg hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300  dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
        {/* hero section */}
       
      </div>
    </form>
    </section>
     {/* hero section */}
    <section className=" flex flex-row w-full h-full p-16 gap-5">
          <Caruosel/>
        </section>

    {/* discount */}
    <section className="w-full pb-10 px-10 md:pb-16 md:px-16 lg:px-20 lg:pb-20">
      <h2 className="px-16 my-10 text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 dark:text-white">Discount <span className="bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">off</span></h2>
       {/* card */}
       <div className="md:px-8 lg:p-0 gap-10">
       <DisCard/>
       </div>
    </section>
    {/* clearance sale */}
    <section className="w-full pb-10 px-10 md:pb-16 md:px-16 lg:px-20 lg:pb-20">
      <h2 className="px-16 my-10 text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 dark:text-white">Clearance <span className="bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">Sale</span></h2>
       {/* card */}
       <div className="md:px-8 lg:p-0 gap-10">
       <ClearCard/>
       </div>
    </section>

   {/* buy 1 get 1 */}
   <section className="w-full pb-10 px-10 md:pb-16 md:px-16 lg:px-20 lg:pb-20">
      <h2 className="px-16 my-10 text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 dark:text-white">Buy one <span className="bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">Get one</span></h2>
      <div >
        <img className="w-[100%] h-[80vh] p-5 md:p-10" src="/src/assets/ad_img2.jpg" alt="banner b1g1" />
      </div>
       {/* card */}
       <div className="md:px-8 my-5 lg:p-0 gap-10">
       <One_get_one/>
       </div>
    </section>

  </>
  )
}