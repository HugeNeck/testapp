import React from 'react'

function LiveWellDataItem(props){
    console.log(props)
    return(props.catchesArray.map(function(item){
        return(
            <tr>  
            <td>{props.name}</td>
            <td>{item.fisher}</td>
            <td>{item.fish1}</td>
            <td>{item.fish2}</td>
            <td>{item.fish3}</td>
            <td>{item.fish4}</td>
            <td>{item.fish5}</td>
            </tr>  
        )
    }))
}    

export default LiveWellDataItem