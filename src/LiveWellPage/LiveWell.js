import LiveWellData from './LiveWellData'
import LiveWellDataItem from './LiveWellDataItem'
import React, {Component} from 'react'

export default class LiveWell extends Component{
    render(){
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
}
