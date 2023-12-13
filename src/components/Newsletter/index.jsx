import React from 'react'

const Newsletter = () => {
    return (
        <div className='w-full py-16 text-white p-4' id='contact'>
            <div className='max-w-[1024px] grid lg:grid-cols-3  mx-auto'>
                <div className='lg:col-span-2'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl py-2 font-bold'>Lorem ipsum dolor sit veritatis!</h1>

                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className=''>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 w-full rounded-md text-black outline-none' type="text" placeholder='Enter your email' />
                        <button className='bg-[#0021df] py-3 rounded-md w-[150px] my-4 md:ml-4 font-medium ml-0 '>Notify Me!</button>
                    </div>
                    <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing <span className='text-[#0021df] font-medium'>Privacy Policy.</span></p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter