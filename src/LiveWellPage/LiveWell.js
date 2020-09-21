import LiveWellData from './LiveWellData'
import LiveWellDataItem from './LiveWellDataItem'
import React from 'react'

export default function LiveWell(props){

    const styles = {
    width : "100%"
    }

    const fishArray = LiveWellData.map( fish =>
        <LiveWellDataItem key = {fish.id} name ={fish.fishType}
        catchesArray = {fish.catches} />)

    if(props.isLoading === true){
        return( 
            <h1>Loading...</h1>
        )
    } else {
        return(
            <table  className = "LiveWell" style={styles}>
            <caption>LiveWell</caption>
            <tr>
                <th>Fish Type</th>
                <th>Fisher</th>
                <th>Pic</th>
                <th>Biggest Fish!</th>
                <th>Second</th>
                <th>Third</th>
                <th>Fourth</th>
                <th>Fifth</th>
            </tr>     
            {fishArray}
            </table>
        )
    }
}

// link to weather information
// http://api.openweathermap.org/data/2.5/weather?q=ottawa,ca&APPID=7e943c97096a9784391a981c4d878b22&mode=xml&units=metric%22