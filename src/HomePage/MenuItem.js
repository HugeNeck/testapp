import React from 'react';


function MenuItem(props){

    const styles = {
        backgroundColor: "red", 
        width: "200px",
        fontSize: "calc(10px + 1vmin)"
    }


    return(

        <div className = "MenuItem" >      
        <input type="button" onClick={props.value === "See All Fish In Well" ? () => props.onClick(true) : " "} 
        value={props.value} style={styles}></input>

        </div>
    )
}

export default MenuItem