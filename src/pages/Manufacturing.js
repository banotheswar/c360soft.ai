import React from 'react'
import Trasrow from '../components/careeres/Trasrow'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Capabilities from '../components/industries/manufacturing/Capabilities'
import CaseStudy from '../components/industries/manufacturing/CaseStudy'
import Hero from '../components/industries/manufacturing/Hero'
import Solution from '../components/industries/manufacturing/Solution'
import Usecase from '../components/industries/manufacturing/Usecase'

const Manufacturing = () => {
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

export default Manufacturing
