import React, {Component} from 'react'
import LiveWellData from '../LiveWellPage/LiveWellData'

export default class Fishers extends Component{

    constructor(){
        super();
        this.state = {
           currentFisher: "Not Picked"
        }
        
        // this.updateFisher = this.updateFisher.bind(this)
    }

    updateFisher(item){
      this.setState( () => {
          return {
              currentFisher: item}
          })
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
            <div>      
             {unique.map(item =>
                    <span>
                    <input type="radio" id={item} name="fisher" 
                    onClick={() => this.updateFisher(item)}/>
                    <label for={item}>{item}</label>
                    <br></br>      
                    </span>
                 )}
            <p>{this.state.currentFisher}</p>
            </div>
            ) 
    }   
}

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

