import React from 'react'
import Trasrow from '../components/careeres/Trasrow'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Benifits from '../components/insights/machinelearning/Benifits'
import Hero from '../components/insights/machinelearning/Hero'
import Usecase from '../components/insights/machinelearning/Usecase'
import Whatmachine from '../components/insights/machinelearning/Whatmachine'

const MachineLearning = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Whatmachine/>
            <Benifits/>
            <Usecase/>
            <Trasrow/>
            <Footer/>
        </div>
    )
}

export default MachineLearning
