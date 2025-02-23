import React from 'react'

export default function AboutUs() {
  return (
    <>
     <section className='mt-28  pb-10 px-10 md:pb-16 md:px-16 lg:px-20 lg:pb-20'>
      <div className='flex justify-between gap-5'>
      <div>
        <h2 className='text-3xl text-center mb-3 font-bold text-gray-700 '>About Us</h2>
      <h3 className='text-2xl text-center mb-3 font-bold bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent'>Welcome to our SUPPORT DEAL!</h3>
      <p className="text-gray-600 text-lg mb-6">
          We are dedicated to providing high-quality
          products with a seamless shopping experience. Our mission is to bring you
          the best deals while ensuring top-notch customer service.
        </p>

        <p className='mt-5'>let's shopping with us!</p>
        <div className="relative ">
          <button
            type="button"
            className= "mt-5 px-5 py-3 bg-white rounded-md  bg-gradient-to-r from-orange-500 to-purple-500 text-gray-50 hover:bg-gradient-to-r from-orangeColor to-purpleColor focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium text-sm text-center "
          >
            Register
          </button>
          </div>
      </div>
        <img src="https://www.philomathresearch.com/blog/wp-content/uploads/2023/02/online-shopping-1024x683.jpg" 
        className='w-lg'
        alt="" />
        
      </div>

     <div className="mx-5 flex flex-col items-center p-6">
     
       
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="p-4 rounded-lg shadow-md bg-gray-50">
            <h2 className="text-xl font-semibold bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">Our Mission</h2>
            <p className="text-gray-600 mt-2">
              To deliver top-quality products with excellent customer service.
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-gray-50">
            <h2 className="text-xl font-semibold bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">Our Vision</h2>
            <p className="text-gray-600 mt-2">
              To be the leading eCommerce store known for reliability and affordability.
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md bg-gray-50">
            <h2 className="text-xl font-semibold bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">Our Values</h2>
            <p className="text-gray-600 mt-2">
              Integrity, quality, and customer satisfaction above all else.
            </p>
          </div>
        </div>
      
    </div>
      </section> 
      <section className='mx-20'>

       
        <div>
          <h3 className='text-center text-2xl mb-5 font-bold bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent'>Advisor</h3>
          <div className='flex items-center justify-center gap-5'>
          <img className='rounded-full w-64 h-64' src="" alt="" />
          <div >
          <h2 className='px-3 py-2 text-white bg-gradient-to-r from-orange-500 to-purple-500  rounded-tl-2xl rounded-br-2xl'>Chhim Bunchhun </h2>
          <p className='px-5 py-3'>Advisor</p>
          <p className='px-5'>Instructor of RUPP</p>
          </div>
          </div>
        </div>
       
       
        <div className='mb-10'>
          <h3 className='text-center text-2xl mb-5 font-bold bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent'>Member</h3>
          <div className='flex items-center justify-center gap-5'>
          <img className='rounded-full  w-64 h-64' src="./assets/profile/image.png" alt="" />
          <div >
          <h2 className='px-3 py-2 text-white bg-gradient-to-r from-orange-500 to-purple-500  rounded-tl-2xl rounded-br-2xl'>Sam Sokunsreypich </h2>
          <p className='px-5 py-3'>Member</p>
          <p className='px-5'>Secound year of ITE G10 of RUPP</p>
          </div>
          </div>
        </div>
      </section>
    </>
  )
}
