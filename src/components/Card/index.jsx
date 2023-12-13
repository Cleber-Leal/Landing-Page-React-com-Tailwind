import React from 'react'

const Card = ({ src, alt, active, price}) => {
    return (
        <div className={active ?
            'w-full border border-t-0 shadow-xl flex bg-gray-100 flex-col justify-center items-center p-4  md:my-0 rounded-lg hover:scale-105 duration-300 '
            :
            'w-full border border-t-0 shadow-xl flex  flex-col justify-center items-center p-4  md:my-0 rounded-lg hover:scale-105 duration-300 '}>
            <img className='w-20 mx-auto mt-[-3rem] bg-white ' src={src} alt={alt} />
            <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
            <p className='text-center text-4xl font-bold'>R${price}</p>
            <div className='text-center font-medium w-full' >
                <p className='py-2 border-b mx-8 mt-8'>500 GB</p>
                <p className='py-2 border-b mx-8'>Lorem ipsum</p>
                <p className='py-2 border-b mx-8'>Lorem, ipsum.</p>
            </div>
            <button className={active ? 'text-[#0021df] bg-black py-3 rounded-md w-[150px] my-4 ml-4 font-medium' : 'bg-[#0021df] py-3 rounded-md w-[150px] my-4 ml-4 font-medium cursor-pointer '}>Start Trial</button>

        </div>
    )
}

export default Card