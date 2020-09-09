import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Card from '../../components/card/Card'
import './Prices.css'

const Prices = () =>{
    useEffect(()=>{
        window.scroll(0,0)
    }, [])
    return (
        <div className="pricing">
            <Navbar/>

            <div className="pricingMid">
                <h1 className="pricingMidH1">Elija el plan que mejor se le ajuste</h1>
                <div className="pricingCards">
                    <Card isFree={true}/>
                    <Card isPremium={true} precio="$9,99"/>
                    <Card isIncognite={true} precio="$4,99"/>
                    <Card/>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Prices