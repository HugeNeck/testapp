import React, {Component} from 'react'
import LiveWellData from '../LiveWellPage/LiveWellData'

export default class Replace extends Component{

    constructor(){
        super();
        this.state = {
            fishData : LiveWellData
        }
    }
    
    render(){
                return(
                    <form id = "inputForm" action="">
                        <label id = "inputLabel" for= "fishType">Choose a Fish</label>
                            <select id= "fishType" name="fishType">
                                {this.state.fishData.map(fish => 
                                <option value={fish.fishType}>{fish.fishType}</option>                
                                )}    
                          </select>
                    <br></br>
                    <text>Size of Fish in Inches:</text>
                    <input classname= "fishLength" type = "text" 
                    />
                    <br></br>
                    <text>Weight of Fish in Pounds:</text>
                    <input classname= "fishWeight" type = "text" 
                    />
                    <br></br>
                    <text>Take or Upload Picture:</text>
                    <input classname= "fishPic" type = "image" alt = 'no pic'
                    />
                    <br></br>
                    <input className = "submitButton" type= "submit" value= "Submit"/>
                    </form>  
                )}
    
}
