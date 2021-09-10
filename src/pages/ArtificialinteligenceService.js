import React from 'react'
import Trasrow from '../components/careeres/Trasrow'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ArtificialInteligence from '../components/services/artificialinteligence/ArtificialInteligence'
import Capabilities from '../components/services/artificialinteligence/Capabilities'
import CaseStudy from '../components/services/artificialinteligence/CaseStudy'
import OurOfferes from '../components/services/artificialinteligence/OurOfferes'
import Stratergy from '../components/services/artificialinteligence/Stratergy'

const ArtificialinteligenceService = () => {
    return (
        <>
        <Header/>
           <ArtificialInteligence/> 
           <Stratergy/>
           <Capabilities/>
           <OurOfferes/>
           <CaseStudy/>
           <Trasrow/>
           <Footer/>
        </>
    )
}

export default ArtificialinteligenceService

