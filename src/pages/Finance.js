import React from 'react'
import Trasrow from '../components/careeres/Trasrow'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Capabilities from '../components/industries/Finance/Capabilities'
import Hero from '../components/industries/Finance/Hero'
import Solution from '../components/industries/Finance/Solution'
import UseCase from '../components/industries/Finance/UseCase'

const Finance = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Capabilities/>
            <Solution/>
            <UseCase/>
            <Trasrow/>
            <Footer/>
            
        </div>
    )
}

export default Finance
