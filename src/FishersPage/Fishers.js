import React from 'react'
import LiveWellData from '../LiveWellPage/LiveWellData'


function Fishers(){


    let fisherArray = []

     LiveWellData.map( fish => 
           fish.catches.map(       
                catches => 
                fisherArray.push(catches.fisher)
            )  
        )

        function onlyUnique(value, index, self) { 
            return self.indexOf(value) === index;
        }

        const unique = fisherArray.filter( onlyUnique
            )
    return(       
        <ul>
         {unique.map(item => <li>{item}</li>)}
        </ul>
    ) 
}


export default Fishers