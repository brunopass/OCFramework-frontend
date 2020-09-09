import React from 'react'
import './Loader.css'
const Loader = ({isRipple = false}) =>{
    if(isRipple){
        return(
            <div className="lds-ripple"><div></div><div></div></div>
        )
    }else{
        return(
            <div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        )
    }
}

export default Loader