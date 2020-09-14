import React from 'react'
import LiveWellData from './LiveWellData'
import LiveWellDataItem from './LiveWellDataItem'

function LiveWell(){

    const styles = {
    width : "100%"
    }

    const fishArray = LiveWellData.map( fish =>
        <LiveWellDataItem key = {fish.id} name ={fish.fishType}
        catchesArray = {fish.catches} />)

    return(
        <table  className = "LiveWell" style={styles}>
        <caption>LiveWell</caption>
        <tr>
            <th>Fish Type</th>
            <th>Fisher</th>
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


export default LiveWell