import React from 'react'
import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full py-16 text-white'>
            <div className='max-w-[1024px] mx-auto grid lg:grid-cols-3 p-4'>
                <div>
                    <h1 className=' w-full text-3xl font-bold text-[#0021df]'>En<span className='text-white'>cre</span></h1>
                    <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fuga incidunt quo voluptates esse odio distinctio ea obcaecati harum tempore.</p>
                    <div>
                        <ul className='flex gap-4 w-full py-4'>
                            <li>
                                <a href="#">
                                    <FaFacebookSquare size={30} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FaInstagram size={30} />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <FaTwitterSquare size={30} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-between my-8 lg:col-span-2'>
                    <div>
                        <h6 className='font-medium text-gray-400'>Solutions</h6>
                        <ul>
                            <li className='py-2 text-sm'>
                                <a href="#">Analytics</a>
                            </li>
                            <li className='py-2 text-sm'>
                                <a href="#">Marketing</a>
                            </li>
                            <li className='py-2 text-sm'>
                                <a href="#">Commerce</a>
                            </li>
                            <li className='py-2 text-sm'>
                                <a href="#">Insights</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-gray-400'>Suport</h6>
                        <ul>
                            <li className='py-2 text-sm'>
                                <a href="#">Princing</a>
                            </li>
                            <li className='py-2 text-sm'>
                                <a href="#">Documentation</a>
                            </li>
                            <li className='py-2 text-sm'>
                                <a href="#">Guides</a>
                            </li>
                            <li className='py-2 text-sm'>
                                <a href="#">API Status</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-gray-400'>Company</h6>
                        <ul>
                            <li className='py-2 text-sm'>
                                <a href="#">About</a>
                            </li>
                            <li className='py-2 text-sm'>
                                <a href="#">Blog</a>
                            </li>
                            <li className='py-2 text-sm'>
                                <a href="#">Jobs</a>
                            </li>
                            <li className='py-2 text-sm'>
                                <a href="#">Careers</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer