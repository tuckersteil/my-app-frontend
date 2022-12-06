import React from "react";
import { useState, useEffect} from 'react';
import PlayerItem from "./PlayerItem";
import TestSample from "./TestSample";
import Form from "./Form";
function AllPlayers(){
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState([]);
  const [playerCards, setPlayerCards] = useState([])
  const [addPlayer, setAddPlayer] = useState({
        playerName: '',
        playerTeam: '',
        playerSport: ''
      })
  
      const [updateInfo, setUpdateInfo] = useState({
        price: '',
        grade: '',
        number: '',
        signed: '',
        jersey: '',
      })

  useEffect(() => {
    fetch("http://localhost:9292/players")
      .then((r) => r.json())
      .then((players) => setPlayers(players));
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
      sport: addPlayer.playerSport
    }
    console.log(submitPlayer)
    fetch("http://localhost:9292/players", {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify(submitPlayer)
    })
    .then((r) => r.json())
    .then((newPlayer) => setPlayers(newPlayer));
    setAddPlayer({
        playerName: '',
        playerTeam: '',
        playerSport: ''
      })
  }

  function showPlayerCards(player){
    console.log(player)
    setPlayer(player)
    fetch(`http://localhost:9292/test_cards/${player.id}`)
        .then((r) => r.json())
        .then((cards) => setPlayerCards(cards));
        
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
        <input
          type="text"
          name="playerSport"
          value={addPlayer.playerSport}
          onChange={handleChange}
          > 
        </input>
      </label>
      <button type="submit">Add Player</button>
    </form>
          <section className="cards">
              <ul>
                  {players.map((player) => (
                  <PlayerItem key={player.id} player={player} showPlayerCards={showPlayerCards}/> 
                  ))}
              </ul>
          <TestSample cards={playerCards} player={player} handleUpdate={handleUpdate} handleDelete={handleDelete}/>
          <Form player={player} setCards={setPlayerCards} updateInfo={updateInfo} tryChange={tryChange} clearUpdateCard={clearUpdateCard}/>
          </section>
    </div>
  )
}

export default AllPlayers;

// function showPlayerCards(player){
//   console.log(player)
//   setPlayer(player)
// }

// useEffect(() => {
//   fetch(`http://localhost:9292/player_cards/${player.id}`)
//     .then((r) => r.json())
//     .then((players_cards) => setPlayerCards(players_cards));
// }, [player]);


// function handleDelete(card){
//   console.log(player)
//   console.log(card)
//   fetch(`http://localhost:9292/player_cards/${player.id}`)
//     .then((r) => r.json())
//     .then((players_cards) => setPlayerCards(players_cards));
//     console.log(playerCards)
// }


// function handleSubmit(event){
//   console.log(addPlayer)
//   event.preventDefault()
//   const submitPlayer ={
//     name: addPlayer.playerName,
//     team: addPlayer.playerTeam,
//     sport: addPlayer.playerSport
//   }
//   console.log(submitPlayer)
//   fetch("http://localhost:9292/players", {
//     method: "POST",
//     headers: {
//     "Content-Type": "application/json",
//     },
//     body: JSON.stringify(submitPlayer)
//   })
//   .then((r) => r.json())
//   .then((newPlayer) => onAddReview(newPlayer));
// }

// function onAddReview(newPlayer){
//   console.log(newPlayer)
//   setAddPlayer({
//     playerName: '',
//     playerTeam: '',
//     playerSport: ''
//   })
//   setPlayers([...players, newPlayer])
// }
// function handleChange(event){
//   event.preventDefault()
//   setAddPlayer({
//     ...addPlayer, 
//     [event.target.name]: event.target.value
//   })
// }


// return (
//   <div>
//     <form onSubmit={handleSubmit}> <h3>Add Player:</h3>
//       <label> Player Name:
//         <input
//         type="text"
//         name="playerName"
//         value={addPlayer.playerName}
//         onChange={handleChange}
//         > 
//         </input>
//       </label>

//       <label> Player Team:
//         <input
//         type="text"
//         name="playerTeam"
//         value={addPlayer.playerTeam}
//         onChange={handleChange}
//         > 
//         </input>
//       </label>

//       <label> Player Sport:
//         <input
//         type="text"
//         name="playerSport"
//         value={addPlayer.playerSport}
//         onChange={handleChange}
//         > 
//         </input>
//       </label>
//       <button type="submit">Add Player</button>
//     </form>
    
//     <section className="cards">
//       <ul>
//         {players.map((player) => (
//         <PlayerItem key={player.id} player={player} showPlayerCards={showPlayerCards}/> 
//     ))}
//     </ul>
//     <PlayerCards playerCards={playerCards} player={player} handleDelete={handleDelete} />
//   </section>
//   </div>
    
// )