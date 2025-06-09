import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Solutions from '../Components/Solutions'

export default function HomePage() {
    return (
        <div>
            <div className='banner-bg bg-[#F7F9FF]'>
                <Navbar />
                <Banner />
            </div>
            <Solutions/>
        </div>
    )
}
