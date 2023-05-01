import React from 'react';
import { useForm } from 'react-hook-form';
import Logo from '../../assets/logo.png';

const FormLogin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div className='h-screen bg-gray-200 flex align-middle items-center content-center justify-center'>
            <div className='flex flex-col bg-white mx-auto w-1/3 h-auto p-6 border-b rounded-xl text-center shadow-2xl'>
                <img src={Logo} className="w-24 h-24  self-center" alt="Gambar Login" />
                <span className='font-bold text-xl mb-4 mt-4'>LOGIN</span>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='p-5 text-left'>
                        <label className='font-bold flex mb-2 '>Username</label>
                        <input type="text" name='username' className='border-0 border-b-2 w-full p-3 bg-gray-200 ' placeholder='Enter your username...' {...register("username", { required: true })} />
                        <span className='text-red-600 mt-1'>{errors.username?.type === 'required' && 'Username harus diisi!'}</span>
                    </div>
                    <div className='p-5 mt-[-26px] text-left'>
                        <label className='font-bold flex mb-2'>Password</label>
                        <input type="password" name='password' className='border-0 border-b-2 w-full p-3 bg-gray-200 ' placeholder='Enter your password...' {...register("password", { required: true, minLength: 8 })} />
                        <span className='text-red-600 mt-1'>{errors.password?.type === 'required' && 'Password harus diisi!'}</span>
                        <span className='text-red-600 mt-1'>{errors.password?.type === 'minLength' && 'Password minimal 8 karakter!'}</span>
                    </div>
                    <div className='p-5 grid grid-cols-2 mt-[-26px]'>
                        <div className='text-start'>
                            <input type="checkbox" name="remember-me" />&nbsp;Remember Me
                        </div>
                        <div className='text-blue-500'>
                            Forgot Your Password ?
                        </div>
                    </div>
                    <div>
                        <button type='submit' className='w-1/2 bg-blue-600 hover:bg-blue-800 p-3 rounded-xl text-white font-bold mb-4 float-center'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormLogin