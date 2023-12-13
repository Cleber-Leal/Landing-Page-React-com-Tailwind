import React from 'react'
import Typed from 'react-typed';

function Main() {
    return (
        <div className='text-white '>
            <div className='text-center max-w-[800px] mt-[-96px] mx-auto px-2 h-screen flex flex-col justify-center items-center'>
                <p className=' font-bold text-[#0021df] p-2 '>GROWING WITH DATA ANALYTICS</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:p-6'>Growing your business.</h1>
                <div className='flex gap-4 my-3' >
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Increase with</p>
                    <Typed
                        className='md:text-5xl sm:text-4xl text-xl font-bold'
                        strings={['SEO', 'CTA', 'CRM']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500 my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sapiente  optio aperiam.</p>
            <button className='bg-[#0021df] py-3 rounded-md w-[150px] my-4 font-medium'>Get Start</button>
            </div>
        </div>
    )
}

export default Main