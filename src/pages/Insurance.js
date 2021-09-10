import React from 'react'
import Trasrow from '../components/careeres/Trasrow'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Capabilities from '../components/industries/insurance/Capabilities'
import CaseStudy from '../components/industries/insurance/CaseStudy'
import Hero from '../components/industries/insurance/Hero'
import Solution from '../components/industries/insurance/Solution'
import Usecase from '../components/industries/insurance/Usecase'

const Insurance = () => {
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

export default Insurance
