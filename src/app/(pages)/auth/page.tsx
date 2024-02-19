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
        <div className='before:absolute before:inset-[1px] before:bg-[#060f17] before:rounded-2xl form-bg relative justify-self-center self-center rounded-2xl py-8  px-5   w-[360px] '>

            <form className='flex flex-col gap-4'>
                <legend className='text-white text-center text-2xl  z-30'>{formToggler ? 'Sign Up' : 'Login'}</legend>
                <FormInput svgData={formSvgData[0]} placeholder='Name' type='text' value={formData.username} onChange={(value) => handleInputChange('username', value)} />
                <FormInput svgData={formSvgData[0]} placeholder='Password' type='password' value={formData.password} onChange={(value) => handleInputChange('password', value)} />


                {!formToggler && <p className='text-white text-right text-xs  z-10'>Not Registered? <span className='cursor-pointer underline underline-offset-2' onClick={() => [setFormToggler(true), setFormData({ username: '', password: '' })]}>Sign Up</span></p>}
                <button className='submitBtn' onClick={handleSubmit}>
                    <section className='submitBtnOverlay'></section>
                    <span></span>
                    <h6>Submit</h6>
                </button>

            </form>
        </div>
    )
}

export default page