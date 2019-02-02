import React  from 'react'
import {Switch, Route} from 'react-router-dom'
import Body from './body'
import About from './about'
import Services from './services'
import Contact from './contact'


    const Main= props =>{
        return(
            <div>
                <Switch>
                    <Route exact path='/' render={props=> <Body {...props}/>}/>
                    <Route exact path='/about' render={props=> <About {...props}/>}/>
                    <Route exact path='/services' render={props=> <Services {...props}/>}/>
                    <Route exact path='/contact' render={props=> <Contact {...props}/>}/>
                </Switch>
            </div>
            )
    }
    
export default Main    
