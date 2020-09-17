import React, {Component} from 'react'
import LiveWellData from '../LiveWellPage/LiveWellData'

export default class Fishers extends Component{

    constructor(){
        super();
        this.state = {
            currentFisher : 'Not Picked'
        }
    }

    render(){
    let fisherArray = []

     LiveWellData.map( fish => 
           fish.catches.map(       
                catches => 
                fisherArray.push(catches.fisher)
            )  
        )

        const unique = fisherArray.filter( onlyUnique
            )
    return(     
        <ul>
         {unique.map(item => <li>{item}</li>)}
        </ul>
    ) 
    }
}

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}