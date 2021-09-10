import React from 'react'
import Trasrow from '../components/careeres/Trasrow'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Capabilities from '../components/industries/retails/Capabilities'
import CaseStudy from '../components/industries/retails/CaseStudy'
import Hero from '../components/industries/retails/Hero'
import Solution from '../components/industries/retails/Solution'
import Usecase from '../components/industries/retails/Usecase'

const Retail = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Capabilities/>
            <Solution/>
            <Usecase/>
            <CaseStudy/>
            <Trasrow/>
            <Footer/>
        </div>
    )
}

export default Retail
