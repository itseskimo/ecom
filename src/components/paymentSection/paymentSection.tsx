import React from 'react'

const paymentSection = () => {
    return (
        <section className="bg-white p-5 flex flex-col gap-4 lg:gap-7 h-max sticky top-0">
            <h6 className="font-semibold text-[14px] sm:text-[16px] lg:text-[20px]">Cart Summary</h6>
            <div className="grid grid-cols-2 gap-4 lg:gap-7 text-[12px] sm:text-[14px] lg:text-[16px]">

                <span>Items in cart</span>
                <span className="justify-self-end">df</span>

                <span>Price</span>
                <span className="justify-self-end">df</span>

                <span className="text-[#05AD34]">Discount</span>
                {/* <span className="justify-self-end text-[#05AD34]">{(cartTotalDiscount - cartTotalAmount).toFixed(2)}</span> */}
                <span className="justify-self-end text-[#05AD34]">df</span>

                <span>Delivery Charges</span>
                <span className="justify-self-end">33</span>
            </div>


            <div className='flex items-center relative  w-full text-[12px] sm:text-[14px] lg:text-[16px]'>
                <span className="bg-[#FF7F00] absolute right-0 cursor-pointer py-[10px] px-4 text-white">Apply</span>
                <input className='border-solid border-[1px] border-gray-300 outline-none  py-[10px] pl-4 pr-10 w-full text-[#4C5864] placeholder:text-[13px] placeholder:text-[#AFB9BB]' placeholder='Apply coupon code' />
            </div>

            <span className="text-[#FF7F00]  cursor-pointer">Available Coupons</span>

            <div className="text-[#05AD34] flex items-center justify-between text-[12px] sm:text-[14px] lg:text-[16px]">
                <span className=" font-semibold ">You Saved</span>
                <span className=" font-semibold ">fd</span>
            </div>

            <div className="flex items-center justify-between text-[12px] sm:text-[14px] lg:text-[16px]">
                <span className="text-[#1C1C1C] font-semibold ">Total Amount</span>
                <span className="text-[#1C1C1C] font-semibold ">df</span>
            </div>

            <button className="bg-[#FF7F00] text-white px-9 py-[6px] rounded-[4px]">Checkout</button>

        </section>)
}

export default paymentSection