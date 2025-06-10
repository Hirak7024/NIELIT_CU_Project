import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Solutions from '../Components/Solutions'
import Quotes from '../Components/Quotes'
import Reviews from '../Components/Reviews'

export default function HomePage() {
    return (
        <div>
            <div className='banner-bg bg-[#F7F9FF]'>
                <Navbar />
                <Banner />
            </div>
            <Solutions/>
            <Quotes/>
            <Reviews/>
        </div>
    )
}
