import React, {useEffect, useState, useContext} from 'react'
import { LiveWellDataContext } from '../LiveWellPage/LiveWellData'

export default function Replace(){
    // constructor(){
    //     super();
    //     this.state = {
    //         weatherData : {},
    //         fishData : LiveWellData,
    //         fishLength : 0,
    //         fishWeight : 0,
    //         fishType : "none"    
    //     }
    //     this.handleChange = this.handleChange.bind(this)
    // }

    const [weatherData, setWeatherData] = useState({})
    const [fishLength, setFishLength] = useState(0)
    const [fishWeight, setFishWeight] = useState(0)

    const [liveWellData, setLiveWellData] = useContext(LiveWellDataContext)

    function handleChange(event){
            setFishLength(event.fishLength)
            setFishWeight(event.fishWeight) 
    }



    //function to add fish to database
    function handleSubmit(newFish){
    }

    useEffect( () =>{
        fetch("http://api.openweathermap.org/data/2.5/weather?q=ottawa,ca&APPID=7e943c97096a9784391a981c4d878b22&mode=json&units=metric%22")
        .then(response => response.json())
        .then(data => {
            setWeatherData({
                weatherData : data.weather[0]
            })
        })
    })

    // componentDidMount(){
    //     fetch("http://api.openweathermap.org/data/2.5/weather?q=ottawa,ca&APPID=7e943c97096a9784391a981c4d878b22&mode=json&units=metric%22")
    //     .then(response => response.json())
    //     .then(data => {
    //         setWeatherData({
    //             weatherData : data.weather[0]
    //         })
    //     })
    // }
                return(
                    <form id = "inputForm" onSubmit={handleSubmit}>
                        <label id = "inputLabel" htmlFor= "fishType">Choose a Fish</label>
                            <select onChange={handleChange} value= {liveWellData.fishType} id= "fishType" name="fishType">
                                {liveWellData.map(fish => 
                                <option key={fish.fishType} value={fish.fishType}>{fish.fishType}</option>                
                                )}    
                          </select>
                    <br></br>
                    <span>Size of Fish in Inches:</span>
                    <input className= "fishLength" name= "fishLength" type = "text" placeholder="0"
                    onChange={handleChange} value = {fishLength}
                    />
                    <br></br>
                    <span>Weight of Fish in Pounds:</span>
                    <input className= "fishWeight" name= "fishWeight" type = "text" placeholder="0"
                    onChange={handleChange} value = {fishWeight}
                    />
                    <br></br>
                    <span>Take or Upload Picture:</span>
                    <input className= "fishPic" type = "image" alt = 'no pic'
                    />
                    <br></br>
                    <input className = "submitButton" type= "submit" value= "Submit"/>               
                    <div className = "weather">
                    Current Weather:
                    {weatherData.description }
                    </div>
                    </form>  
                )
    }
