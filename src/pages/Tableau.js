import React from 'react'
import Trasrow from '../components/careeres/Trasrow'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/insights/tableau/Hero'
import Strategy from '../components/insights/tableau/Strategy'
import Usecase from '../components/insights/tableau/Usecase'

const Tableau = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Strategy/>
            <Usecase/>
            <Trasrow/>
            <Footer/>

        </div>
    )
}

export default Tableau
