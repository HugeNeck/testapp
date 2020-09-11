import React from 'react';

function Footer(){

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours<12) timeOfDay = 'morning'
    else if (hours >=12 && hours <17) timeOfDay = 'afternoon'
    else timeOfDay = 'evening'

    return(
<footer className = "Footer">
    <h3>Good {timeOfDay} Fake Copyright 2020 Joel Villeneuve</h3>
</footer>
    )
}

export default Footer