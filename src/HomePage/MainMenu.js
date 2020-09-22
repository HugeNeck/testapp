import React, {useState, useEffect} from 'react'
import MenuItem from './MenuItem'
import fishPic from './fishIcon.jpg'
import Replace from '../ReplacePage/Replace'
import LiveWell from '../LiveWellPage/LiveWell'
import Fishers from '../FishersPage/Fishers'
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function MainMenu(props){
   
        // const fisher = useState(props.setFisher)

        const [isLoading, setIsLoading] = useState(true);

        useEffect(() =>{
            setTimeout( () => {
                setIsLoading(false)
            }, 1500)
         })

        return(
        <Router>
            <img src= {fishPic} alt = "fishing pic" id="menuPic" height = "100" width = "160"/>
            <main>     
                <nav> 
                <ul>
                <li><Link to="/Replace"><MenuItem value="Replace Biggest Fish"/> </Link></li>
                <li><Link to="/LiveWell"><MenuItem onClick={setIsLoading} value="See All Fish In Well"/> </Link></li>
                <li><Link to="/Fishers"><MenuItem value="See all Fishers"/></Link></li>
                </ul>
                </nav>

                <Switch>
                    <Route path="/Replace">
                       <Replace/>
                    </Route>
                    <Route path="/LiveWell">
                       <LiveWell isLoading = {isLoading}/>
                    </Route>
                    <Route path="/Fishers">
                       {/* <Fishers setFisher={props.setFisher}/> */}
                       <Fishers value={props}/>
                    </Route>
                </Switch>
            </main>
        </Router>
      
        )
}



export default MainMenu