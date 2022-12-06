import React from "react";

function TestSample({cards, player, handleUpdate, handleDelete}){
console.log(cards, player)

function updateCard(e, card){
    e.preventDefault()
    handleUpdate(card)
}

function handleClick(e, card,player ){
    e.preventDefault()
    handleDelete(card, player)
}
    return (
        <div className="absolute">
            <h3>{player.name}</h3>
            <ul>
            {cards.map((card) => (
                    
                    <li key={card.id} className="inline">
                        Price: {card.price}, <br/>
                        Grade out of Ten: {card.grade}, <br/>
                        Numbered: {card.number}, <br/>
                        Signed: {card.signed}, <br/>
                        Jersey Patch: {card.jersey}<br/>
                        <button onClick={(e)=>handleClick(e, card.id, player)}>Delete Card</button>
                        <button onClick={(e)=>updateCard(e,card)}>Update Card</button><br/>
                        <br/>
                    </li>
                ))}  
            </ul>
        </div>
    )
}

export default TestSample;