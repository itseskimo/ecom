import React from 'react'
import Navbar from '@/components/navbar/navbar'
import { getProducts } from '@/config/actions/actions'

const Home = async() => {
const allProducts = await getProducts()
console.log(allProducts)
  return (
    <div>
      <Navbar />
      
      
    </div>
  )
}

export default Home