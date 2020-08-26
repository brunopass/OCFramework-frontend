import React, { useEffect } from 'react'
import OCFramework404 from '../../assets/OCFramework404.svg'
import './NotFound.css'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'

const NotFound = () =>{
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <div className="notFoundBody">
            <Navbar/>
            <div className="notFound">
                <Link to="/">    
                <img src={OCFramework404} className="notFoundImg"/>
                </Link>
            </div>
            <Footer/>
        </div>
    )
}

export default NotFound