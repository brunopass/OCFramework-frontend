import React, { Fragment } from 'react'
import Button from '../Button/Button'
import './Card.css'

const Premium = ['Acceso a herramientas BETA', 'Máximo 100 personas por sala', 'Máximo 10 Workspaces', 'Soporte personalizado']
const Incognite = ['Sin equipos, 1 persona', 'Sin correo, pin de acceso', 'Pago único']
const FREE = ['Máximo 10 personas por sala', 'Máximo 1 Workspace']

const CardList = ({list = []}) =>{
    return(
        <div className="priceCardList">
            {list.map((value,key)=>{
                return(
                    <li key={key} className="priceCardListItem">{value}</li>
                )
            })}
        </div>
    )
}

const Card = ({isPremium = false, isIncognite = false, isFree = false, precio}) =>{
    if(isPremium){
        return(
            <div className="normalCard">
                <h2 className="premiumCardH2">Premium</h2>
                
                <div className="priceCard">
                    <div className="priceCardNumber">
                        <h2 className="priceCardNumberH2Premium">{precio}</h2>
                        <label className="priceCardNumberLabelPremium">U$D</label>
                    </div>
                    <h6 className="priceCardNumberH6Premium">Por mes*</h6>
                </div>

                <CardList list={Premium}/>

                <Button value="Suscribirse" link="/pricing/premium"/>
            </div>
        )
    }else if(isIncognite){
        return(
            <div className="normalCard"> 
                <h2 className="CardH2">Incognite</h2>
                <div className="priceCard">
                <div className="priceCardNumber">
                        <h2 className="priceCardNumberH2">{precio}</h2>
                        <label className="priceCardNumberLabel">U$D</label>
                    </div>
                    <h6 className="priceCardNumberH6">Pago único</h6>
                </div>

                <CardList list={Incognite}/>

                <Button value="Comprar" link="/pricing/incognite" isBlueRounded={true}/>
            </div>
        )
    }else if(isFree){
        return(
            <div className="normalCard">
                <h2 className="CardH2">FREE</h2>

                <CardList list={FREE}/>

                <Button value="Crear Cuenta" link="/signup" isBlueRounded={true}/>
            </div>
        )
    }else{
        return(
            <div className="normalCard">
                <div className="normalCardSpace">
                    <h2 className="CardH2">Enterprise</h2>
                </div>
                <Button value="Contactarse" isBlueRounded={true} link="/pricing/enterprise"/>
            </div>
        )
    }
}

export default Card