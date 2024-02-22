'use client'
import { RootState, useAppDispatch, AppDispatch } from '@/redux/store';
import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { authValidation } from '@/config/validation/authValidation';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthInfo } from '@/config/env';
import { resetSuccess, registerUser } from '../../../redux/features/auth/AuthSlice';

const page = () => {

    const router = useRouter()

    const dispatch: AppDispatch = useAppDispatch();
    const { userInfo } = useSelector((state: RootState) => state.auth);

    const formOptions = { resolver: yupResolver(authValidation) };
    const {
        register,
        reset,
        handleSubmit,
        formState,
        formState: { errors },
    } = useForm<AuthInfo>(formOptions);



    const onSubmit = async (data: AuthInfo) => {
        dispatch(registerUser(data))
    };


    useEffect(() => {
        if (userInfo?.message) {
            router.push('/sign-in')
            alert(userInfo?.message)
            dispatch(resetSuccess())
        }
    }, [userInfo])


    return (
        <div className=' flex items-center justify-center h-screen'>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6 rounded-2xl py-8  px-5   w-[360px] border-[1px] border-solid border-black'>
                <legend className=' text-center text-2xl '>{'Sign Up'}</legend>


                <div className='relative'>
                    <input placeholder='Name' {...register("username", { required: true })} className={`placeholder:text-[#444445] rounded-md text-[12px] sm:text-[14px] md:text-[16px] border-[1px] border-solid ${errors?.username?.message ? 'border-red-500 placeholder:text-red-500' : 'border-[#C8CACD] '} w-full  px-4 py-2 sm:py-3 outline-none `} />
                    {errors && errors?.username && (
                        <span className="text-red-500 text-[10px] sm:text-xs absolute left-0 bottom-[-20px]">
                            {errors?.username?.message}
                        </span>
                    )}
                </div>

                <div className='relative'>
                    <input placeholder='Password' {...register("password", { required: true })} className={`placeholder:text-[#444445] rounded-md text-[12px] sm:text-[14px] md:text-[16px] border-[1px] border-solid ${errors?.password?.message ? 'border-red-500 placeholder:text-red-500' : 'border-[#C8CACD] '} w-full  px-4 py-2 sm:py-3 outline-none `} />
                    {errors && errors?.password && (
                        <span className="text-red-500 text-[10px] sm:text-xs absolute left-0 bottom-[-20px]">
                            {errors?.password?.message}
                        </span>
                    )}
                </div>


                <button className='bg-orange-400 py-2 rounded-sm text-white'>Submit</button>

            </form>
        </div>
    )
}

export default page