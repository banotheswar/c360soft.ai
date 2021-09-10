import React from 'react'
import Trasrow from '../components/careeres/Trasrow'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Benfits from '../components/insights/fullstackdevelopment/Benfits'
import Hero from '../components/insights/fullstackdevelopment/Hero'
import Strategy from '../components/insights/fullstackdevelopment/Strategy'
import Usecase from '../components/insights/fullstackdevelopment/Usecase'

const Fullstackdevelopment = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Strategy/>
            <Benfits/>
            <Usecase/>
            <Trasrow/>
            <Footer/>
        </div>
    )
}

export default Fullstackdevelopment
