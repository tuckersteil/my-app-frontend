import React from "react";
import { useState} from 'react';

function Form({player, setCards, updateInfo, tryChange, clearUpdateCard}){
   
    const [addNewPlayer, setaddNewPlayer] = useState({
        price: '',
        grade: '',
        number: '',
        signed: '',
        jersey: '',
      })


      function handleNewChange(event){
        setaddNewPlayer({
            ...addNewPlayer, 
            [event.target.name]: event.target.value
          })
    }
  

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
        fetch(`http://localhost:9292/cards_test/${player.id}`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(finalAddPlayer)
            })
            .then((r) => r.json())
            .then((newP) => setCards(newP));
            setaddNewPlayer({
                price: '',
                grade: '',
                number: '',
                signed: '',
                jersey: '',
              })
    }
    
    
function fixData(event){
    event.preventDefault()
    console.log(updateInfo.player_id)
    console.log(updateInfo.id)
    console.log(updateInfo)

    fetch(`http://localhost:9292/update_card/${updateInfo.id}`, {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(updateInfo)
        })
            .then((r) => r.json())
            .then((updatedP) => setCards(updatedP));
            clearUpdateCard()
}


    return (
        <div>
            <form onSubmit={handlePlayerSubmit} > 
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
            <form onSubmit={fixData}> 
                <h3>Update Player Card:</h3>
                        <label > Player ID:
                            {player.id}
                        </label> <br/>
                        <label > Price:
                            <input
                            type="text"
                            name="price"
                            value={updateInfo.price}
                            onChange={(e)=> tryChange(e) }
                            > 
                            </input>
                        </label> <br/>
                        <label > Grade:
                            <input
                            type="text"
                            name="grade"
                            value={updateInfo.grade}
                            onChange={(e)=> tryChange(e) }
                            > 
                            </input>
                        </label> <br/>
                        <label > Numbered:
                            <input
                            type="text"
                            name="number"
                            value={updateInfo.number}
                            onChange={(e)=> tryChange(e) }
                            > 
                            </input>
                        </label> <br/>
                        <label > Signed:
                            <input
                            type="text"
                            name="signed"
                            value={updateInfo.signed}
                            onChange={(e)=> tryChange(e) }
                            > 
                            </input>
                        </label> <br/>
                        <label > Jersey Patch:
                            <input
                            type="text"
                            name="jersey"
                            value={updateInfo.jersey}
                            onChange={(e)=> tryChange(e) }
                            > 
                            </input>
                        </label> 
                        <button type="submit">Submit Updated Info</button>
                    </form><br/>
        </div>
    )
}

export default Form;