import React from 'react'
import ContactInfo from '../components/aboutus/ContactInfo'
import Hero from '../components/aboutus/Hero'
import Leadership from '../components/aboutus/Leadership'
import Location from '../components/aboutus/Location'
import Vision from '../components/aboutus/Vision'
import Whatwedo from '../components/aboutus/Whatwedo'
import Trasrow from '../components/careeres/Trasrow'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Aboutus = () => {
    return (
        <>
        {/* commitments */}
          <Header/>
          <Hero/> 
          <Leadership/> 
          <Whatwedo/>
          <Vision />
          <Location/>
          <ContactInfo/>
          <Trasrow/>
          <Footer/>
        </>
    )
}

export default Aboutus
