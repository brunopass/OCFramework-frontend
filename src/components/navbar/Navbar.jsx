import React from 'react'
import Logo from '../../assets/OCFrameworkwhite.png'
import './Navbar.css'
import Button from '../Button/Button'
import Linker from '../Linker/Linker'
import { Link } from 'react-router-dom'

const Navbar = ({full = true, dashboard = false}) =>{

    const links = [{value: 'Precios', link: '/pricing'},{value: 'Sobre Nosotros', link: '/us'}]
    if(full){
        return(
            <div className="navbar">
                <div className="navbarHolder">
                    <Link to="/">
                        <img src={Logo} className="logo"/>
                    </Link>
                    <div className="navbarRight">
                        <div className="navbarLinkers">
                            {links.map((value, key)=>{
                                return(
                                    <Linker value={value.value} link={value.link} key={key}/>
                                )
                            })}
                        </div>   
                        <Button isRounded={true} value="Iniciar Sesión" link="/login"/>
                    </div>
                </div>
            </div>
        )
    }else if(dashboard){
        return(
            <div className="navbarHolder">
                <Link to="/">
                        <img src={Logo} className="logo"/>
                    </Link>
                <div className="navbarRight">
                    <div className="navbarLinkers">
                        <Linker value="cerrar sesion" link="/logout" />
                    </div>   
                </div>
            </div>
        )
    }else{
        return(
            <div className="navbarHolder">
                <Link to="/">
                        <img src={Logo} className="logo"/>
                    </Link>
                <div className="navbarRight">
                    <div className="navbarLinkers">
                        {links.map((value, key)=>{
                            return(
                                <Linker value={value.value} link={value.link} key={key}/>
                            )
                        })}
                    </div>   
                </div>
            </div>
        )
    }
}

export default Navbar