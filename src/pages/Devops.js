import React from 'react'
import Trasrow from '../components/careeres/Trasrow'
import Footer from '../components/Footer'
import Header1 from '../components/Header1'
import Capabilities from '../components/services/devops/Capabilities'
import Casestudy from '../components/services/devops/Casestudy'
import Hero from '../components/services/devops/Hero'
import Offering from '../components/services/devops/Offering'
import Strategy from '../components/services/devops/Strategy'

const Devops = () => {
    return (
        <div>
            <Header1/>
            <Hero/>
            <Strategy/>
            <Capabilities/>
            <Offering/>
            <Casestudy/>
            <Trasrow/>
            <Footer/>
        </div>
    )
}

export default Devops
