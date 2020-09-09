import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './Verification.css'
import Button from '../../components/Button/Button'
import OCFrameworkemail from '../../assets/OCFrameworkauth.svg'
import Axios from 'axios'
import url from '../../config'
import Loader from '../../components/Loader/Loader'
import OCFrameworklogo from '../../assets/OCFramework.png'
import TextInput from '../../components/Text/TextInput'

const Verification = () =>{
    useEffect(() => {
        window.scrollTo(0, 0)
        auth()
    }, [])

    const [verify,setVerify] = useState(2)
    const [email,setEmail] = useState('')

    const auth = () => {
        const token = window.location.pathname.split('/')[2]
        Axios.patch(`${url}/verify`, {
            auth: token
        })
        .then(ok => setVerify(0))
        .catch(err=>setVerify(1))
    }

    const sendEmail = () =>{
        Axios.post(`${url}/resend`, {
            email: email
        })
        .then(ok => alert('Email enviado'))
        .catch(err => alert('Error al enviar email'))
    }

    

    if(verify == 0){
    return(
        <div className="verification">
            <Navbar/>
                <div className="verificationMid">
                    <img src={OCFrameworkemail} className="verificationImg"/>
                    <div className="verificationText">
                        <h1 className="verificationTextH1">Cuenta Verificada!</h1>
                        <h3 className="verificationTextH3">Todo listo, continua tu camino.</h3>
                        <Button value="Iniciar Sesion" link="/login"/>
                    </div>
                </div>
            <Footer/>
        </div>
    )}
    else if(verify ==1){
        return(
            <div className="verification">
                <Navbar/>
                    <div className="verificationMid">
                        <img src={OCFrameworkemail} className="verificationImg"/>
                        <div className="verificationText">
                            <h1 className="verificationTextH1">Error al verificar cuenta :(</h1>
                            <h3 className="verificationTextH3">El link con el que estas intentando acceder ha caducado o es incorrecto,<br></br> revisalo e intenta de nuevo!</h3>
                            <div className="verificationTextButton">
                                <TextInput value="Correo Electrónico" placeholder="" onchange={setEmail.bind(this)}/>
                                <div>
                                <Button value="Reenviar correo" isOnlyClick={true} click={sendEmail}/>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                <Footer/>
            </div>
        ) 
    }else{
        return(
            <div className="loading">
                <div>
                    <Loader/>
                    <img src={OCFrameworklogo} className="logo"/>
                </div>
            </div>
        )
    }
}

export default Verification