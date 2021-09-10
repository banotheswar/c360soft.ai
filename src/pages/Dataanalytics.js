import React from 'react'
import Trasrow from '../components/careeres/Trasrow'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Capabilities from '../components/services/dataanalytics/Capabilities'
import Hero from '../components/services/dataanalytics/Hero'
import Offering from '../components/services/dataanalytics/Offering'
import Strategy from '../components/services/dataanalytics/Strategy'

const Dataanalytics = () => {
    return (
        <div>
          <Header/>
          <Hero/>
          <Strategy/>
          <Capabilities/>
          <Offering/>
          <Trasrow/>
          <Footer/>  
        </div>
    )
}

export default Dataanalytics
