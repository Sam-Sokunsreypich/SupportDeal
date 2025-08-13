import React from 'react'
import ClearCard from '../../components/cards/ClearCard'
import DisCard from '../../components/cards/DisCard'
import { useGetProductQuery } from '../../features/auth/addProductApi';
import One_get_one from '../../components/cards/One_get_one';
import ProductSkeleton from '../../components/skeleton/ProductSkeleton';

export default function Deal() {

  const { data: products = [], isLoading, error } = useGetProductQuery();
if (isLoading || products.length === 0) {
  return (
    <div className="mt-28 grid grid-cols-4 gap-5 mx-16">
      {[...Array(5)].map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
    </div>
  );
}

  return (
    <>
      <section className='mt-28 pb-10 px-10 md:pb-16 md:px-16 lg:px-20 lg:pb-20'>
      
      <ClearCard getAllProduct={products}/>
      <DisCard getAllProduct={products}/>
      <One_get_one getAllProduct={products}/>
      </section>
    </>
  )
}
