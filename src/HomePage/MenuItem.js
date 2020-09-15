import React from 'react';


function MenuItem(props){

    const styles = {
        fontsize:30,
        backgroundColor: "red"
    }


    return(

        <div className = "MenuItem" >  
            
        <input type="button" value={props.value} style={styles}></input>
     
        </div>
    )
}

export default MenuItem