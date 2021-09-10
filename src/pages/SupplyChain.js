import React from 'react'
import Trasrow from '../components/careeres/Trasrow'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Capabilities from '../components/industries/supplychain&logistics/Capabilities'
import Hero from '../components/industries/supplychain&logistics/Hero'
import Solution from '../components/industries/supplychain&logistics/Solution'
import Usecase from '../components/industries/supplychain&logistics/Usecase'

const SupplyChain = () => {
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

export default SupplyChain
