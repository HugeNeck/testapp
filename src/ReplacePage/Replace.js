import React, {Component} from 'react'
import LiveWellData from '../LiveWellPage/LiveWellData'


export default class Replace extends Component{

    constructor(){
        super();
        this.state = {
            weatherData : {
            }
        }
    }

    componentDidMount(){
        fetch("http://api.openweathermap.org/data/2.5/weather?q=ottawa,ca&APPID=7e943c97096a9784391a981c4d878b22&mode=json&units=metric%22")
        .then(response => response.json())
        .then(data => {
            this.setState({
                weatherData : data.weather[0]
            })
        })
    }
    
    render(){
                return(
                    <form id = "inputForm" action="">
                        <label id = "inputLabel" for= "fishType">Choose a Fish</label>
                            <select id= "fishType" name="fishType">
                                {LiveWellData.map(fish => 
                                <option value={fish.fishType}>{fish.fishType}</option>                
                                )}    
                          </select>
                    <br></br>
                    <span>Size of Fish in Inches:</span>
                    <input className= "fishLength" type = "text" 
                    />
                    <br></br>
                    <span>Weight of Fish in Pounds:</span>
                    <input className= "fishWeight" type = "text" 
                    />
                    <br></br>
                    <span>Take or Upload Picture:</span>
                    <input className= "fishPic" type = "image" alt = 'no pic'
                    />
                    <br></br>
                    <input className = "submitButton" type= "submit" value= "Submit"/>
                    <div> 
                    {this.state.weatherData.description}
                    </div>
                    </form>  
                )
    }
}
