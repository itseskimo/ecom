'use client'
import FormInput from '@/components/forminput/forminput';
import { SyntheticEvent, useState } from 'react';
import { RootState, useAppDispatch, AppDispatch } from '@/redux/store';
import { register } from '@/redux/features/auth/authSlice';
import { useSelector } from 'react-redux';
import { formSvgData } from '@/config/data';

const page = () => {

    const dispatch: AppDispatch = useAppDispatch();
    const { userInfo } = useSelector((state: RootState) => state.auth);

    const [formToggler, setFormToggler] = useState(false)

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });


    const handleInputChange = (fieldName: string, value: string) => {

        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: value,
        }));
    };

    function handleSubmit(e: SyntheticEvent) {
        e.preventDefault()
        dispatch(register({ username: formData.username, password: formData.password }));
    }




    return (
        <div className=' flex items-center justify-center h-screen'>

            <form className='flex flex-col gap-4 rounded-2xl py-8  px-5   w-[360px] border-[1px] border-solid border-black'>
                <legend className=' text-center text-2xl '>{formToggler ? 'Sign Up' : 'Login'}</legend>
                <FormInput svgData={formSvgData[0]} placeholder='Name' type='text' value={formData.username} onChange={(value) => handleInputChange('username', value)} />
                <FormInput svgData={formSvgData[1]} placeholder='Password' type='password' value={formData.password} onChange={(value) => handleInputChange('password', value)} />

                {!formToggler && <p className=' text-right text-xs'>Not Registered? <span className='cursor-pointer underline underline-offset-2' onClick={() => [setFormToggler(true), setFormData({ username: '', password: '' })]}>Sign Up</span></p>}
                <button className='bg-orange-400 py-2 rounded-sm text-white' onClick={handleSubmit}>Submit</button>

            </form>
        </div>
    )
}

export default page