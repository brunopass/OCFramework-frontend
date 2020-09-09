import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './2FA.css'
import TextInput from '../../components/Text/TextInput'
import Button from '../../components/Button/Button'
import Axios from 'axios'
import url from '../../config'

const TwoFA = ({}) =>{

    const [accessCode, setAccessCode] = useState('')
    const resendAccessCode = () => {

    }
    
    const sendAccessCode = () => {
        Axios.post(`${url}/2fa`,{
            code:accessCode
        },{withCredentials:true})
        .then(()=>{
            document.cookie = 'auth=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
            alert('hola')
        })
        .catch(err=>{})
    }
    return (
        <div className="tfa">
            <Navbar full={false}/>
            <div className="tfaBody">
                <h1 className="tfaH1">Valida tu identidad</h1>
                <h3 className="tfaH3">Te enviamos un email con tu codigo de autenticacion, si no te llega en menos de 5 minutos, haz <u onClick={resendAccessCode}>click aqui</u></h3>
                <div className="tfaBodyText">
                    <TextInput value="Codigo de autenticacion" placeholder="- - - - -" onchange={setAccessCode.bind(this)}/>
                    <Button value="Continuar" isOnlyClick={true} click={sendAccessCode}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default TwoFA