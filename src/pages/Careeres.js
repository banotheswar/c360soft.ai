import React from 'react'
import Hero from '../components/careeres/Hero'
import Lifeat from '../components/careeres/Lifeat'
import MissionRow from '../components/careeres/MissionRow'
import Positions from '../components/careeres/Positions'
import StayConnected from '../components/careeres/StayConnected'
import Trasrow from '../components/careeres/Trasrow'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Careeres = () => {
    return (
        <>
        <Header/>
          <Hero/> 
          <Positions/> 
          <Lifeat/>
          <MissionRow/>
          <StayConnected/>
          <Trasrow/>
          <Footer/>
        </>
    )
}

export default Careeres
