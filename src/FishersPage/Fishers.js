import React, {useContext} from 'react'

import {LiveWellDataContext} from '../LiveWellPage/LiveWellData'

export default function Fishers(props){

    const [LiveWellData, setLiveWellData] = useContext(LiveWellDataContext)

           //for when it was class based
    // updateFisher(item){
    //     this.setState( () => {
    //         return {
    //             currentFisher: item}
    //         })
    //   }
   
    const styles = {
        color: "blue", 
        fontWeight: "bold",
    }

    const completedStyle = {
        fontStyle : "italic" 
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
                    <div className = "fisherRadio" key={item}>
                    <input type="radio" id={item} name="fisher" 
                    // onClick={() => this.updateFisher(item)}/>
                    onChange={() => props.value.setFisher(item)}  
                    value = {item} 
                    />
                    <label htmlFor={item}  
                    style ={(item === props.value.selectedFisher) ? completedStyle: null}
                    >{item}</label>
                    <br></br>      
                    </div>
                 )}
            {/* <p>{this.state.currentFisher}</p> */}
            </div>
            ) 
    }   


function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

