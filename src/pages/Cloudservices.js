import React from 'react'
import Trasrow from '../components/careeres/Trasrow'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Capabilities from '../components/services/cloudservices/Capabilities'
import Hero from '../components/services/cloudservices/Hero'
import Offering from '../components/services/cloudservices/Offering'
import Strategy from '../components/services/cloudservices/Strategy'
import UseCase from '../components/services/cloudservices/UseCase'

const Cloudservices = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Strategy/>
            <Capabilities/>
            <Offering/>
            <UseCase/>
            <Trasrow/>
            <Footer/>
        </div>
    )
}

export default Cloudservices
