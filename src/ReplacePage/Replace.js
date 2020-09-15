import React, {Component} from 'react'
import LiveWellData from '../LiveWellPage/LiveWellData'

export default class Replace extends Component{
    render(){

        const fishRadioData = []

        for (let i=0; i < LiveWellData.length; i++){
            fishRadioData[i] = LiveWellData[i].fishType;
        }

        return(
            <form id = "inputForm" action= "">
            <input id= {fishRadioData[0]} name="fishType" type = "radio"/>
            <label for= {fishRadioData[0]}>{fishRadioData[0]}</label>      
            <input id={fishRadioData[1]} name="fishType" type = "radio"/>
            <label for= {fishRadioData[1]}>{fishRadioData[1]}</label>  
    
            <br></br>

            <text>Size of Fish in Inches:</text>
            <input classname= "fishLength" type = "text" 
            />
            <br></br>
            <text>Weight of Fish in Pounds:</text>
            <input classname= "fishWeight" type = "text" 
            />
            <br></br>
            <input type= "submit" value= "Submit"/>
            </form>  
        )
    }   
}
