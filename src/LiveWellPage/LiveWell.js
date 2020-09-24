
import LiveWellDataItem from './LiveWellDataItem'
import React, {useContext} from 'react'
import {LiveWellDataContext} from './LiveWellData'

export default function LiveWell(props){

    const styles = {
    width : "100%"
    }

    const [liveWellData, setLiveWelldata] = useContext(LiveWellDataContext)

    const fishArray = liveWellData.map( fish =>
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
