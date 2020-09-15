import React from 'react'
import MenuItem from './MenuItem'
import fishPic from './fishIcon.jpg'

import LiveWell from '../LiveWellPage/LiveWell'
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function MainMenu(){
   
        return(

        <Router>
            <main className = "MainMenu">
            <img src= {fishPic} alt = "fishing pic" height = "100" width = "160"/>
                <nav> 
                <ul>
                <li><Link to="/Replace"> Replace Biggest Fish</Link></li>
                <li><Link to="/LiveWell">See all Fish In Well </Link></li>
                <li><Link to="/Fishers">See all Fishers</Link></li>
                </ul>
                </nav>

            {/* <MenuItem value ="Replace Biggest Fish"/>
            <MenuItem value="See all Fish In Well"/>    
            <MenuItem value="See all Fishers"/>  */}

                <Switch>
                    <Route path="/Replace">
                       
                    </Route>
                    <Route path="/LiveWell">
                       <LiveWell/>
                    </Route>
                    <Route path="/Replace">
                       
                    </Route>

                </Switch>

            </main>
        </Router>

        )
    }

export default MainMenu