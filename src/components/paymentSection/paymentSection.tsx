'use client'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/store';
import { useEffect } from 'react';
import { getTotals } from '@/redux/features/cart/CartSlice';

const paymentSection = () => {
    const { cartItems, cartTotalAmount } = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getTotals());
    }, [cartItems, dispatch]);

    return (
        <section className="bg-white p-5 flex flex-col gap-4 lg:gap-7 h-max sticky top-20">
            <h6 className="font-semibold text-[14px] sm:text-[16px] lg:text-[20px]">Cart Summary</h6>
            <div className="grid grid-cols-2 gap-4 lg:gap-7 text-[12px] sm:text-[14px] lg:text-[16px]">

                <span>Items in cart</span>
                <span className="justify-self-end">{cartItems.length}</span>

               
            </div>


           

            <div className="flex items-center justify-between text-[12px] sm:text-[14px] lg:text-[16px]">
                <span className="text-[#1C1C1C] font-semibold ">Total Amount</span>
                <span className="text-[#1C1C1C] font-semibold ">{cartTotalAmount}</span>
            </div>

            <button className="bg-[#FF7F00] text-white px-9 py-[6px] rounded-[4px]">Checkout</button>

        </section>)
}

export default paymentSection