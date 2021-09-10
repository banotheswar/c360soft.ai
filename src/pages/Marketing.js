import React from 'react'
import Trasrow from '../components/careeres/Trasrow'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Capabilities from '../components/industries/marketing/Capabilities'
import Hero from '../components/industries/marketing/Hero'
import Offering from '../components/industries/marketing/Offering'
import Solution from '../components/industries/marketing/Solution'

const Marketing = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Capabilities/>
            <Solution/>
            <Offering/>
            <Trasrow/>
            <Footer/>
        </div>
    )
}

export default Marketing
