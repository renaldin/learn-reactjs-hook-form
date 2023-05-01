import React from 'react'
import { useForm } from 'react-hook-form';

import Logo from './../../assets/logo.png'

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div class="h-screen bg-gray-100 flex align-middle content-center items-center justify-center">
            <div class="flex flex-col bg-white mx-auto w-1/4 h-auto p-6 border-b rounded-xl text-center shadow-md">
                <img src={Logo} alt="logo" class="w-32 h-32 self-center" />
                <span class="font-bold text-3xl mb-4">Login</span>
                <form class="mb-4" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input type="text" name='username' placeholder="username" class="mb-4 border-0 border-b-2 p-3 w-full" {...register("username", { required: true, minLength: 8 })} />
                        <span className='text-red-500 text-xs float-left mt-[-10px] mb-4 ml-2'>
                            {errors.username?.type === 'required' && "Username harus diisi"}
                            {errors.username?.type === 'minLength' && "Minimal 8 karakter"}
                        </span>
                    </div>
                    <div>
                        <input type="password" name='password' placeholder="password" class="mb-4 border-0 border-b-2 p-3 w-full" {...register("password", { pattern: /^[A-Za-z]+$/i, required: true, minLength: 8 })} />
                        <span className='text-red-500 text-xs float-left mt-[-10px] mb-4 ml-2'>
                            {errors.password?.type === 'required' && "Password harus diisi"}
                            {errors.password?.type === 'minLength' && "Minimal 8 karakter"}
                            {errors.password?.type === 'pattern' && "Syarat pengisian password: Huruf besar, huruf kecil, karakter"}
                        </span>
                    </div>
                    <div>
                        <button type="submit" class="w-full bg-blue-600 hover:bg-blue-800 p-3 rounded-md text-white font-bold mb-4 float-right">Masuk</button>
                    </div>
                </form>
                <span class=" text-xs">Tidak punya akun? Daftar<a href="#"> disini</a></span>
            </div>
        </div>
    )
}

export default Form