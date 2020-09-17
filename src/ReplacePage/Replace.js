import React, {Component} from 'react'
import LiveWellData from '../LiveWellPage/LiveWellData'

export default class Replace extends Component{
    render(){

        // const fishRadioData = []

        // for (let i=0; i < LiveWellData.length; i++){
        //     fishRadioData[i] = LiveWellData[i].fishType;
        // }


                return(
                    <form id = "inputForm" action= "">


                        {/* {fishRadioData.map(fishType => 
                            <span>
                            <input id= {fishType} name="fishType" type = "radio"/>
                            <label for= {fishType}>{fishType}</label>
                            </span>
                        )} */}

                        {LiveWellData.map(fish => 
                            <span>
                            <input id= {fish.fishType} name="fishType" type = "radio"/>
                            <label for= {fish.fishType}>{fish.fishType}</label>
                            </span>
                        )}    

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
                )}
    
}
