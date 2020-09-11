import React from 'react'
import MenuItem from './MenuItem'
import fishPic from './fishIcon.jpg'

function MainMenu(){
    return(
        <main className = "MainMenu">       
            <img src= {fishPic}alt = "fishing pic" height = "100" width = "160"/>
            <MenuItem />
            <MenuItem />
            <MenuItem />
            
        </main>
    )
}

export default MainMenu