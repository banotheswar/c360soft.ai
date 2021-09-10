import React from 'react'
import Trasrow from '../components/careeres/Trasrow'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Capabilities from '../components/industries/telicommunication/Capabilities'
import CaseStudy from '../components/industries/telicommunication/CaseStudy'
import Hero from '../components/industries/telicommunication/Hero'
import Solution from '../components/industries/telicommunication/Solution'
import Usecase from '../components/industries/telicommunication/Usecase'

const Telicommunication = () => {
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

export default Telicommunication
