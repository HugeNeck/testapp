import React, {Component} from 'react'
import LiveWellData from '../LiveWellPage/LiveWellData'


export default class Replace extends Component{

    constructor(){
        super();
        this.state = {
            weatherData : {},
            fishData : LiveWellData,
            fishLength : 0,
            fishWeight : 0    
        }
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
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
                        <label id = "inputLabel" htmlFor= "fishType">Choose a Fish</label>
                            <select id= "fishType" name="fishType">
                                {this.state.fishData.map(fish => 
                                <option key={fish.fishType} value={fish.fishType}>{fish.fishType}</option>                
                                )}    
                          </select>
                    <br></br>
                    <span>Size of Fish in Inches:</span>
                    <input className= "fishLength" name= "fishLength" type = "text" placeholder={this.state.fishLength}
                    onChange={this.changeLength}
                    />
                    <br></br>
                    <span>Weight of Fish in Pounds:</span>
                    <input className= "fishWeight" name= "fishWeight" type = "text" placeholder={this.state.fishWeight}
                    onChange={this.changeWeight}
                    />
                    <br></br>
                    <span>Take or Upload Picture:</span>
                    <input className= "fishPic" type = "image" alt = 'no pic'
                    />
                    <br></br>
                    <input className = "submitButton" type= "submit" value= "Submit"/>
                    
                    <div className = "weather">
                    Current Weather:
                    {this.state.weatherData.description }
                    </div>
                    </form>  
                )
    }
}
