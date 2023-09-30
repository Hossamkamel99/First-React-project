import React from 'react'
import boyImg from '../../assets/images/avataaars.svg'
import Star from '../Star/Star'
import { Helmet } from 'react-helmet'

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className='home vh-100 d-flex align-items-center justify-content-center text-white'>
                <div className="text-center">
                    <img src={boyImg} alt='boy' className='w-75' />
                    <div className='my-5'>
                        <h2 className=''>START FRAMEWORK</h2>
                        <Star></Star>
                        <p>Graphic Artist - Web Designer - Illustrator</p>
                    </div>
                </div>
            </div>
        </>
    )
}