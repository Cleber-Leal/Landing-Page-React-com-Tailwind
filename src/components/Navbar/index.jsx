import React, { useState } from 'react'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const active = () => setNav(!nav)
    return (
        <div className='flex justify-between items-center h-24 max-w-[1024px] mx-auto px-4 text-white'>
            <h1 className=' w-full text-3xl font-bold text-[#0021df] cursor-pointer'>
                <a href="">En<span className='text-white'>cre</span></a>
            </h1>
            <nav className='hidden md:flex'>
                <ul className='flex lg:gap-8'>
                    <li className='p-4 border-b border-transparent hover:border-gray-200 ease-in-out duration-300'>
                        <a href="#">Home</a>
                    </li>
                    <li className='p-4 border-b border-transparent hover:border-gray-200 ease-in-out duration-300'>
                        <a href="#">About</a>
                    </li>
                    <li className='p-4 border-b border-transparent hover:border-gray-200 ease-in-out duration-300'>
                        <a href="">Products</a>
                    </li>
                    <li className='py-3 px-6 border border-[#0021df] bg-transparent text-[#0021df]  self-center rounded-lg hover:bg-white ease-in-out duration-300'>
                        <a href="#contact" className='p-3'>Contact</a>
                    </li>
                </ul>
            </nav>
            <div onClick={() => active()} className='block md:hidden'>
                {!nav ?
                    <AiOutlineMenu size={24} />
                    :
                    <AiOutlineClose AiOutlineClose size={24} />}
            </div>
            <nav className={nav ? 'fixed left-0 top-0 w-[60%] h-full bg-[#000300] ease-in-out duration-500 ' : 'fixed left-[-100%]'}>
                <h1 className=' w-full my-7 mx-5 text-3xl font-bold text-[#0021df]' >En<span className='text-white'>cre</span></h1>
                <ul className=' uppercase p-4'>
                    <li className='p-4 border-b border-gray-600 cursor-pointer'>
                        <a href="#">Home</a>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <a href="#">About</a>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <a href="">Products</a>
                    </li>
                    <li className='p-4'>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar