import React from 'react'
import Trasrow from '../components/careeres/Trasrow'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Capabilities from '../components/services/productdevelopment/Capabilities'
import Hero from '../components/services/productdevelopment/Hero'
import Offering from '../components/services/productdevelopment/Offering'
import Strategy from '../components/services/productdevelopment/Strategy'
import Usecase from '../components/services/productdevelopment/Usecase'

const ProductDevelopment = () => {
    return (
        <div>
            <Header/>
            <Hero/>
            <Strategy/>
            <Capabilities/>
            <Offering/>
            <Usecase/>
            <Trasrow/>
            <Footer/>
        </div>
    )
}

export default ProductDevelopment
