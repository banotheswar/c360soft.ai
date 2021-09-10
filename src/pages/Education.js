import React from 'react'
import Trasrow from '../components/careeres/Trasrow'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Capabilities from '../components/industries/education/Capabilities'
import CaseStudy from '../components/industries/education/CaseStudy'
import Hero from '../components/industries/education/Hero'
import Solution from '../components/industries/education/Solution'
import Usecase from '../components/industries/education/Usecase'

const Education = () => {
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

export default Education
