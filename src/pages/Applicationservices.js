import React from 'react'
import Trasrow from '../components/careeres/Trasrow'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Capabilities from '../components/services/applicationservice/Capabilities'
import CaseStudy from '../components/services/applicationservice/CaseStudy'
import Hero from '../components/services/applicationservice/Hero'
import Projects from '../components/services/applicationservice/Projects'
import Strategy from '../components/services/applicationservice/Strategy'
import Usecase from '../components/services/applicationservice/Usecase'

const Applicationservices = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Strategy/>
            <Capabilities/>
            <CaseStudy/>
            <Projects/>
            <Usecase/>
            <Trasrow/>
            <Footer/>
        </div>
    )
}

export default Applicationservices
