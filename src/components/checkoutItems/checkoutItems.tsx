import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/store';
import { decrease, increase, remove } from '@/redux/features/cart/CartSlice';
import { Product } from '@/config/env';

const checkoutItems = () => {
    const { cartItems } = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch()

    const handleRemoveFromCart = (item: Product): void => {
        dispatch(remove(item));
    };

    const handleAddToCart = (item: Product): void => {
        dispatch(increase(item));
    };

    const handleDecreaseCart = (item: Product): void => {
        dispatch(decrease(item));
    };
    return (
        <section>

            {cartItems.map((cart) => (
                <aside key={cart.id} className=" grid grid-cols-[max-content,auto] gap-4 xl:gap-10 bg-white items-center  border-[#EEEEEE] border-[1px] border-solid px-3 lg:px-6 py-4 mb-6 min-h-[160px] lg:min-h-[238px] ">
                    <img src={cart.image} alt="product" className="w-[120px]  xs:w-[140px] lg:w-[200px] h-[110px] xs:h-[130px] lg:h-[190px] self-center" />

                    <div className="flex flex-col gap-4 lg:gap-10  ">
                        <h6 className="text-[12px] sm:text-[14px] lg:text-[18px]">{cart?.title}</h6>

                        <div className="flex items-center justify-between">
                            <div className="  flex items-center text-[10px] md:text-[18px] border-solid border-[1px] border-gray-300 ">
                                <span className="border-solid border-r-[1px] border-gray-300 rounded-sm py-[6px] md:py-[2px] px-3 cursor-pointer" onClick={() => handleAddToCart(cart)}>+</span>
                                <span className="rounded-sm  py-[6px] md:py-[2px] min-w-[35px] text-center" >{cart.cartQuantity}</span>
                                <span className="border-solid border-l-[1px] border-gray-300 rounded-sm py-[6px] md:py-[2px] px-3 cursor-pointer" onClick={() => handleDecreaseCart(cart)}>-</span>
                            </div>
                            <span className=" cursor-pointer text-[10px] sm:text-[14px] xl:text-[16px]" >                        ${Math.floor(cart.price * cart.cartQuantity)}</span>
                            <span className="text-[#FF7F00] cursor-pointer text-[10px] sm:text-[14px] xl:text-[16px]" onClick={() => handleRemoveFromCart(cart)}>Remove Item</span>
                        </div>

                        <span className=" font-semibold text-[12px]  sm:text-[14px] md:text-[18px]">₹{cart.price}</span>
                    </div>

                </aside>

            ))}

        </section>)
}

export default checkoutItems