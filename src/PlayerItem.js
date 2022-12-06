import React from "react";




function PlayerItem({player, showPlayerCards}){

    console.log(player)
 

    function handleClick(){
        console.log(player)
       showPlayerCards(player)
     
    }

    return (
        
        <section className="card" onClick={handleClick}>
            <h3>Player Name: {player.name}</h3>
            <h4>Current Team: {player.team}</h4>
            <h4>Sport: {player.sport}</h4>
        </section>
        
        
        
    )
}

export default PlayerItem;