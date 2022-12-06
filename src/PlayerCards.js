import React from "react";
import { useState} from 'react';



function PlayerCards({playerCards, player, handleDelete, }){
    const [addNewPlayer, setaddNewPlayer] = useState({
        price: '',
        grade: '',
        number: '',
        signed: '',
        jersey: '',
      })
    const [updatePlayer, setUpdatePlayer] = useState({
        id: '',
        price: '',
        grade: '',
        number: '',
        signed: '',
        jersey: '',
      })
 console.log(playerCards, player, updatePlayer)
 
 


function handleClick(card, player){
    // console.log(card)
    fetch(`http://localhost:9292/cards/${card}`, {
        method: "DELETE",
      })
      .then((r) => r.json())
      .then((deletedReview) => handleDelete(deletedReview));
}


function handleUpdate(card){
    // console.log(card)
   let newStyle = document.getElementById("newStyle")
   newStyle.style={formStyleBlock}
   setUpdatePlayer({
    id: card.id,
    price: card.price,
    grade: card.grade,
    number: card.number,
    signed: card.signed,
    jersey: card.jersey
   })
}

function handleChange(event){
    setUpdatePlayer({
        ...updatePlayer, 
        [event.target.name]: event.target.value
      })
}
function handleNewChange(event){
    setaddNewPlayer({
        ...addNewPlayer, 
        [event.target.name]: event.target.value
      })
}
console.log(addNewPlayer)

function handlePlayerSubmit(event){
    event.preventDefault()
    const finalAddPlayer ={
        player_id: player.id,
        price: parseInt(addNewPlayer.price),
        grade: parseInt(addNewPlayer.grade),
        number: addNewPlayer.number,
        signed: addNewPlayer.signed,
        jersey: addNewPlayer.jersey
    }
    console.log(finalAddPlayer)
    fetch('http://localhost:9292/cards', {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(finalAddPlayer)
      })
      .then((r) => r.json())
      .then((newP) => handleDelete(newP));
      setaddNewPlayer({
        price: '',
        grade: '',
        number: '',
        signed: '',
        jersey: '',
      })
}
function handleUpdateSubmit(event){
    event.preventDefault()

    const finalUpdates ={
        id: updatePlayer.id,
        price: parseInt(updatePlayer.price),
        grade: parseInt(updatePlayer.grade),
        number: updatePlayer.number,
        signed: updatePlayer.signed,
        jersey: updatePlayer.jersey
    }
// console.log(finalUpdates)
fetch(`http://localhost:9292/cards/${finalUpdates.id}`, {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(finalUpdates)
      })
      .then((r) => r.json())
      .then((uppedPlayer) => handleDelete(uppedPlayer));
      setUpdatePlayer({
        id: '',
        price: '',
        grade: '',
        number: '',
        signed: '',
        jersey: '',
      })
      let oldStyle = document.getElementById("newStyle")
   oldStyle.style.display= "none"
}


const formStyle = {
display: "none"
}

const formStyleBlock = {
    display: "block"
}
    return (
        <div  className="absolute">
            

        <section >
            <ul>
                <h2>{player.name}</h2>
                <form style={formStyle}id="newStyle" onSubmit={handleUpdateSubmit}> 
                        <label > Price:
                            <input
                            type="text"
                            name="price"
                            value={updatePlayer.price}
                            onChange={handleChange}
                            > 
                            </input>
                        </label> <br/>
                        <label > Grade:
                            <input
                            type="text"
                            name="grade"
                            value={updatePlayer.grade}
                            onChange={handleChange}
                            > 
                            </input>
                        </label> <br/>
                        <label > Numbered:
                            <input
                            type="text"
                            name="number"
                            value={updatePlayer.number}
                            onChange={handleChange}
                            > 
                            </input>
                        </label> <br/>
                        <label > Signed:
                            <input
                            type="text"
                            name="signed"
                            value={updatePlayer.signed}
                            onChange={handleChange}
                            > 
                            </input>
                        </label> <br/>
                        <label > Jersey Patch:
                            <input
                            type="text"
                            name="jersey"
                            value={updatePlayer.jersey}
                            onChange={handleChange}
                            > 
                            </input>
                        </label> 
                        <button type="submit">Submit Updated Info</button>
                    </form><br/>

                {playerCards.map((card) => (
                    
                    <li key={card.id} className="inline">
                        Price: {card.price}, <br/>
                        Grade out of Ten: {card.grade}, <br/>
                        Numbered: {card.number}, <br/>
                        Signed: {card.signed}, <br/>
                        Jersey Patch: {card.jersey}<br/>
                        <button onClick={(e)=>handleClick(card.id, player)}>Delete Card</button>
                        <button onClick={(e)=>handleUpdate(card)}>Update Card</button>
                    </li>
                ))}  
            </ul>
        </section>
        <section >
            <form onSubmit={handlePlayerSubmit}> 
                <h3>Add Player Card:</h3>
                        <label > Player ID:
                            {player.id}
                        </label> <br/>
                        <label > Price:
                            <input
                            type="text"
                            name="price"
                            value={addNewPlayer.price}
                            onChange={handleNewChange}
                            > 
                            </input>
                        </label> <br/>
                        <label > Grade:
                            <input
                            type="text"
                            name="grade"
                            value={addNewPlayer.grade}
                            onChange={handleNewChange}
                            > 
                            </input>
                        </label> <br/>
                        <label > Numbered:
                            <input
                            type="text"
                            name="number"
                            value={addNewPlayer.number}
                            onChange={handleNewChange}
                            > 
                            </input>
                        </label> <br/>
                        <label > Signed:
                            <input
                            type="text"
                            name="signed"
                            value={addNewPlayer.signed}
                            onChange={handleNewChange}
                            > 
                            </input>
                        </label> <br/>
                        <label > Jersey Patch:
                            <input
                            type="text"
                            name="jersey"
                            value={addNewPlayer.jersey}
                            onChange={handleNewChange}
                            > 
                            </input>
                        </label> 
                        <button type="submit">Submit New Player Card</button>
            </form>
        </section>
        </div>
    )
}

export default PlayerCards;

