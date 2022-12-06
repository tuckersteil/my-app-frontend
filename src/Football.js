import React from "react";
import { useState, useEffect} from 'react';
import PlayerItem from "./PlayerItem";
import TestSample from "./TestSample";
import Form from "./Form";

function Football(){
  const [nflPlayers, setNflPlayers]= useState([])
  const [nflPlayer, setNflPlayer]= useState([])
  const [cards, setCards]= useState([])
  const [addPlayer, setAddPlayer] = useState({
    playerName: '',
    playerTeam: '',
  })
  const [updateInfo, setUpdateInfo] = useState({
    price: '',
    grade: '',
    number: '',
    signed: '',
    jersey: '',
  })

  useEffect(() => {
    fetch("http://localhost:9292/player/nfl")
      .then((r) => r.json())
      .then((players) => setNflPlayers(players));
  }, []);

  function handleChange(event){
    event.preventDefault()
    setAddPlayer({
      ...addPlayer, 
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event){
    console.log(addPlayer)
    event.preventDefault()
    const submitPlayer ={
      name: addPlayer.playerName,
      team: addPlayer.playerTeam,
      sport: "NFL"
    }
    console.log(submitPlayer)
    fetch("http://localhost:9292/testplayer/nfl", {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify(submitPlayer)
    })
    .then((r) => r.json())
    .then((newPlayer) => setNflPlayers(newPlayer));
    setAddPlayer({
        playerName: '',
        playerTeam: '',
      })
  }
  function showPlayerCards(player){
    console.log(player)
    setNflPlayer(player)
    fetch(`http://localhost:9292/test_cards/${player.id}`)
        .then((r) => r.json())
        .then((cards) => setCards(cards));
        console.log(cards)
  }

  function handleUpdate(card){
    console.log(card)
    setUpdateInfo(card)
  }

  function tryChange(event){
    setUpdateInfo({
        ...updateInfo, 
        [event.target.name]: event.target.value
      })
}
function clearUpdateCard(){
  setUpdateInfo({
      price: '',
      grade: '',
      number: '',
      signed: '',
      jersey: ''
  })
}

function handleDelete(card, player){
  console.log(card, player)
  fetch(`http://localhost:9292/cards/${card}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then((deletedReview) => doDelete(deletedReview, player));
}

function doDelete(deletedReview, player){
  showPlayerCards(player)
}

      return (
        <div>
            <form onSubmit={handleSubmit}> <h3>Add Player:</h3>
        <label> Player Name:
          <input
          type="text"
          name="playerName"
          value={addPlayer.playerName}
          onChange={handleChange}
          > 
          </input>
        </label>

        <label> Player Team:
          <input
          type="text"
          name="playerTeam"
          value={addPlayer.playerTeam}
          onChange={handleChange}
          > 
          </input>
        </label>

        <label> Player Sport:
          NFL
        </label>
        <button type="submit">Add Player</button>
      </form>
            <section className="cards">
                <ul>
                    {nflPlayers.map((player) => (
                    <PlayerItem key={player.id} player={player} showPlayerCards={showPlayerCards}/> 
                    ))}
                </ul>
            <TestSample cards={cards} player={nflPlayer} handleUpdate={handleUpdate} handleDelete={handleDelete}/>
            <Form player={nflPlayer} setCards={setCards} updateInfo={updateInfo} tryChange={tryChange} clearUpdateCard={clearUpdateCard}/>
            </section>
        </div>
  )
}

export default Football;




