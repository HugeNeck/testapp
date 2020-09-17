import React from 'react';

export default function Header(props){

        return(
            <header className = "Header" >
                <h3>Fish in the Well!</h3>
                <h3>current Fisher:{props.currentFisher}</h3>      
            </header>
                )
    }
