import React from 'react'
import Navbar from '@/components/navbar/navbar'
import { getProducts } from '@/config/actions/actions'
import ProductItems from '@/components/productItems/productItems'
import { getServerSession } from "next-auth/next"
// import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { authOptions } from '@/app/lib/auth'

const Home = async () => {
  const allProducts = await getProducts()
  const session = await getServerSession(authOptions);

  
  return (
    <div>
      <Navbar session={session}/>
      <ProductItems allProducts={allProducts}/>
    </div>
  )
}

export default Home