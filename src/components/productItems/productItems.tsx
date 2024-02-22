'use client'
import React from 'react'
import { useDispatch } from 'react-redux';
import { add, setCartItems } from '@/redux/features/cart/CartSlice';
import { Product } from '@/config/env';
import { ProductProps } from '@/config/env';

const productItems = ({ allProducts }: ProductProps) => {

    const dispatch = useDispatch()

    const handleAdd = (item: Product): void => {
        dispatch(add(item))
    }

   

    return (
        <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,300px))] gap-14 py-8 justify-items-center px-4'>
            {allProducts.map((product) => (
                <div onClick={() => handleAdd(product)} key={product.id} className=' flex flex-col items-center justify-between gap-2 w-full p-6 shadow shadow-gray-300 hover:bg-slate-100 duration-300'>
                    <img src={product.image} className='h-36 ' />
                    <p className='text-center'>{product.title}</p>
                    <button className='px-6 py-2 bg-orange-400 text-white rounded-md'>Buy</button>
                </div>
            ))}
        </div>)
}

export default productItems