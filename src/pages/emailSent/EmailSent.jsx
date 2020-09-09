import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import OCFrameworkemail from '../../assets/OCFrameworkemail.svg'
import Footer from '../../components/Footer/Footer'
import './EmailSent.css'
import Button from '../../components/Button/Button'
import Axios from 'axios'
import url from '../../config'
import OCFrameworklogo from '../../assets/OCFramework.png'
import Loader from '../../components/Loader/Loader'

const EmailSent = () =>{

    const getCookie = cname => {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

      const[sent,setSent] = useState(false)

    const resend = () =>{
        const email = getCookie('email')
        document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        Axios.post(`${url}/resend`, {
            email: email
        })
        .then(ok =>{
          alert('Email enviado')
        })
        .catch(err => alert('Error al enviar email'))
    }

    setTimeout(()=>{
      setSent(true)
    }, 500)

    if(!sent){
      return(
        <div className="loading">
                <div>
                    <Loader/>
                    <img src={OCFrameworklogo} className="logo"/>
                </div>
            </div>
      )
    }else{
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
}

export default EmailSent