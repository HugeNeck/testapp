import React from 'react'
import LiveWellData from '../LiveWellPage/LiveWellData'

export default function Fishers(props){

           //for when it was class based
    // updateFisher(item){
    //     this.setState( () => {
    //         return {
    //             currentFisher: item}
    //         })
    //   }
   
    const styles = {
        color: "blue", 
        fontWeight: "bold"
    }


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
            <p style={styles}> Select Current Fisher:</p>
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

