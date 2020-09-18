import React, {useState} from 'react'
import LiveWellData from '../LiveWellPage/LiveWellData'

export default function Fishers(props){

           //for when it was class based
    // updateFisher(item){
    //     this.setState( () => {
    //         return {
    //             currentFisher: item}
    //         })
    //   }
   
    

    // render(){
        // const fisher = useState(props.setFisher)

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
            <div>      
             {unique.map(item =>
                    <span>
                    <input type="radio" id={item} name="fisher" 
                    // onClick={() => this.updateFisher(item)}/>
                    onClick={() => props.value.setFisher(item)}/>
                    <label for={item}>{item}</label>
                    <br></br>      
                    </span>
                 )}
            {/* <p>{this.state.currentFisher}</p> */}
            </div>
            ) 
    }   


function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

