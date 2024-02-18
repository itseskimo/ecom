import React from 'react'
import Navbar from '@/components/navbar/navbar'
import { getProducts } from '@/config/actions/actions'
import ProductItems from '@/components/productItems/productItems'

const Home = async () => {
  const allProducts = await getProducts()

  return (
    <div>
      <Navbar />
      <ProductItems allProducts={allProducts}/>
    </div>
  )
}

export default Home