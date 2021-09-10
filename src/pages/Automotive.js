import React from 'react'
import Trasrow from '../components/careeres/Trasrow'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Capabilities from '../components/industries/automobiles/Capabilities'
import CaseStudy from '../components/industries/automobiles/CaseStudy'
import Offering from '../components/industries/automobiles/Offering'
import Solution from '../components/industries/automobiles/Solution'

const Automotive = () => {
    return (
        <div>
            <Header/>
            <Capabilities/>
            <Solution/>
            <Offering/>
            <CaseStudy/>
            <Trasrow/>
            <Footer/>
        </div>
    )
}

export default Automotive
