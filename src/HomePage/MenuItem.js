import React from 'react';

function MenuItem(){

    const styles = {
        fontsize:30,
        backgroundColor: "red"
    }


    return(


        <div className = "MenuItem" >       
            
            <input type="button" value="Placeholder text" style={styles}></input>


            {/* <input type="button" value="Replace Biggest Fish"></input>

            <input type="button" value="See all Fish In Well"></input>

            <input type="button" value="See all Fishers"></input> */}
     
        </div>
    )
}

export default MenuItem