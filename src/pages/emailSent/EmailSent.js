import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import OCFrameworkemail from '../../assets/OCFrameworkemail.svg'
import Footer from '../../components/Footer/Footer'
import './EmailSent.css'
import Button from '../../components/Button/Button'

const EmailSent = () =>{

    const resend = () =>{

    }

    return(
        <div className="emailSent">
            <Navbar/>
            <div className="emailSentMid">
                <img src={OCFrameworkemail} className="OCFrameworkemail"/>
                <div className="emailSentMidText">
                    <h2 className="emailSentMidTextH2">Revisa tu correo!</h2>
                    <h3 className="emailSentMidTextH3">Tienes problemas para encontrar el correo que te enviamos?
                    revisa la papelera de SPAM y otros, También puedes</h3>
                    <Button value="Reenviar Correo" isOnlyClick={true} click={resend}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default EmailSent