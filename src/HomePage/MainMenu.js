import React from 'react'
import MenuItem from './MenuItem'
import fishPic from './fishIcon.jpg'

import Replace from '../ReplacePage/Replace'
import LiveWell from '../LiveWellPage/LiveWell'
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function MainMenu(){
   
        return(

        <Router>
            <main className = "MainMenu">
            <img src= {fishPic} alt = "fishing pic" height = "100" width = "160"/>
                <nav> 
                <ul>
                <li><Link to="/Replace"><MenuItem value="Replace Biggest Fish"/> </Link></li>
                <li><Link to="/LiveWell"><MenuItem value="See All Fish In Well"/> </Link></li>
                <li><Link to="/Fishers"><MenuItem value="See all Fishers"/></Link></li>
                </ul>
                </nav>

            {/* <MenuItem value ="Replace Biggest Fish"/>
            <MenuItem value="See all Fish In Well"/>    
            <MenuItem value="See all Fishers"/>  */}

                <Switch>
                    <Route path="/Replace">
                       <Replace/>
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