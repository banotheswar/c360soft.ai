import React from 'react'
import Trasrow from '../components/careeres/Trasrow'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Capabilities from '../components/industries/healthcare/capabilities'
import Hero from '../components/industries/healthcare/Hero'
import Solution from '../components/industries/healthcare/Solution'
import Usecase from '../components/industries/healthcare/Usecase'

const Healthcare = () => {
    return (
        <div>
           <Header/>
           <Hero/>
           <Capabilities/> 
           <Solution/>
           <Usecase/>
           <Trasrow/>
           <Footer/>
        </div>
    )
}

export default Healthcare
