import React from 'react'
import './Text.css'

const TextInput = ({onchange,value, placeholder, isOnlyText = false, password=false, isError = false, error}) =>{
    if(isOnlyText){
        return(
            <input type="text" placeholder={placeholder} onChange={onchange} className="textInput"/>
        )
    }else if(password && isError){
        return(
            <div className="text">
                <h3 className="textH3">{value}</h3>
                <input type="password" placeholder={placeholder} onChange={e => onchange(e.target.value)} className="textInput"/>
                <div className="textInputError">
                    {error}
                </div>
            </div>
        )
    }else if(password){
        return(
            <div className="text">
                <h3 className="textH3">{value}</h3>
                <input type="password" placeholder={placeholder} onChange={e => onchange(e.target.value)} className="textInput"/>
            </div>
        )
    }else if(isError){
        return(
            <div className="text">
                <h3 className="textH3">{value}</h3>
                <input type="text" placeholder={placeholder} onChange={e => onchange(e.target.value)} className="textInput"/>
                <div className="textInputError">
                    {error}
                </div>
            </div>
        )
    }else{
        return(
            <div className="text">
                <h3 className="textH3">{value}</h3>
                <input type="text" placeholder={placeholder} onChange={e => onchange(e.target.value)} className="textInput"/>
            </div>
        )
    }
}

export default TextInput