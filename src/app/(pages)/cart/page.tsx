'use client'
import React from 'react'
import PaymentSection from '@/components/paymentSection/paymentSection'
import CheckoutItems from '@/components/checkoutItems/checkoutItems'
import Navbar from '@/components/navbar/navbar'

const page = () => {
    return (
        <>
        <Navbar/>
        <main className="grid grid-cols-1 md:grid-cols-[1.2fr,0.8fr] gap-6 lg:gap-10 px-3 lg:px-10 py-5 lg:py-16 ">
            <CheckoutItems />
            <PaymentSection />
        </main>
        </>
    )
}

export default page