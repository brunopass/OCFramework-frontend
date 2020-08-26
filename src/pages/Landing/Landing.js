import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import OCFback from '../../assets/OCFback.png'
import OCFrameworkwhite from '../../assets/OCFrameworkwhite.png'
import OCFrameworkworld from '../../assets/OCFrameworkworld.svg'
import OCFramworkhttp from '../../assets/OCFrameworkhttp.svg'
import './Landing.css'
import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import Card from '../../components/card/Card'

const Landing = () =>{
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <div className="landing">
            <Navbar/>
            <div className="landingTop">
                <img src={OCFback} className="OCFback"/>
                <div className="landingRight">
                    <div className="landingRightLogo">
                        <img src={OCFrameworkwhite} className="logo"/>
                        <div className="beta">BETA</div>
                    </div>

                    <div className="landingRightText">
                        <h1 className="landingRightTextH1">Discreto y Seguro.</h1>
                        <h3 className="landingRightTextH3">OSINT collab framework</h3>
                    </div>

                    <div className="landingRightButton"> 
                        <Button value="Crear Cuenta" link="/signup"/>
                        <Button value="Continuar en Incógnito" link="/incognite" isRounded={true}/>
                    </div>
                </div>
            </div>

            <div className="landingMid">
                <div className="landingMidHolder">
                    <div className="landingMidHolderText">
                        <h3 className="landingMidHolderTextH3">Trabaja con tu equipo en tiempo real</h3>
                        <h2 className="landingMidHolderTextH2">Crea workspaces <br></br>
                        Especializados.</h2>
                        <Button value="Empezar Ahora" link="/signup"/>
                    </div>
                    <img src={OCFrameworkworld} className="OCFrameworkworld"/>
                </div>
            </div>

            <div className="landingBottom">
                <div className="landingBottomHolder">
                    <img src={OCFramworkhttp} className="OCFrameworkworld"/>
                    <div className="landingBottomText">
                        <h3 className="landingBottomTextH3">Seguridad ante todo</h3>
                        <h2 className="landingBottomTextH2">Genera una Lista<br></br>de IPs Seguras.</h2>
                        <Button value="Empezar Ahora" link="/signup"/>
                    </div>
                </div>
            </div>

            <Footer/>

        </div>
    )
}

export default Landing