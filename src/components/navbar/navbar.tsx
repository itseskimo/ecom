import React from 'react'

const navbar = () => {
    return (
        <nav className='flex items-center justify-between bg-white shadow shadow-black p-4'>
            <ul>
                <li className='font-bold text-2xl cursor-pointer'>Amazon</li>
            </ul>

            <div className="flex items-center relative w-[40%]">
                <svg
                    className="absolute  w-10 right-[1px]  px-2 cursor-pointer"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M18.9397 19.5002L14.5967 15.1572M14.5967 15.1572C15.3395 14.4143 15.9288 13.5324 16.3309 12.5618C16.7329 11.5911 16.9399 10.5508 16.9399 9.50021C16.9399 8.4496 16.7329 7.40929 16.3309 6.43866C15.9288 5.46803 15.3395 4.58609 14.5967 3.84321C13.8538 3.10032 12.9718 2.51103 12.0012 2.10898C11.0306 1.70693 9.99026 1.5 8.93966 1.5C7.88906 1.5 6.84874 1.70693 5.87811 2.10898C4.90748 2.51103 4.02555 3.10032 3.28266 3.84321C1.78233 5.34354 0.939453 7.37842 0.939453 9.50021C0.939453 11.622 1.78233 13.6569 3.28266 15.1572C4.78299 16.6575 6.81787 17.5004 8.93966 17.5004C11.0614 17.5004 13.0963 16.6575 14.5967 15.1572Z"
                        stroke="#1C1C1C"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                <input
                    id="search"
                    type="text"
                    className="border-solid border-[1px] border-gray-300 outline-none  py-[10px] pl-3 lg:pl-4 pr-10 w-full text-[#4C5864] placeholder:text-[12px] lg:placeholder:text-[14px] placeholder:text-[#4C5864]"
                    placeholder="Search for products, brands and more"
                />
            </div>

            <ul className='flex items-center gap-5'>
                <li className='cursor-pointer'>Hello Guest</li>
                <li className='cursor-pointer'>Your Basket</li>
            </ul>
        </nav>
        )
}

export default navbar