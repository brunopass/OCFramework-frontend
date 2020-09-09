import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Landing from './pages/Landing/Landing.jsx'
import LogIn from './pages/login/Login.jsx'
import NotFound from './pages/404/NotFound.jsx'
import SignUp from './pages/signup/SignUp.jsx'
import Recover from './pages/recovery/Recovery.jsx'
import EmailSent from './pages/emailSent/EmailSent.jsx'
import Privacity from './pages/privacity/Privacity.jsx'
import Prices from './pages/prices/Prices.jsx'
import IncogniteSignUp from './pages/Incognite/IncogniteSignUp.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'
import Verification from './pages/verification/Verification.jsx'
import TwoFA from './pages/2fa/2FA.jsx'


const Router = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing}/>
                <Route exact path="/login" component={LogIn}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/recover" component={Recover}/>
                <Route exact path="/privacity" component={Privacity}/>
                <Route exact path="/pricing" component={Prices}/>
                <Route exact path="/signup/sent" component={EmailSent}/>
                <Route exact path="/verify/:id" component={Verification}/>
                <Route exact path="/incognite" component={IncogniteSignUp}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/2fa" component={TwoFA}/>
                <Route path='/404' component={NotFound} />
                <Redirect from='*' to='/404' />
            </Switch>
        </BrowserRouter>
    )
}

export default Router