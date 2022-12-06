import React from "react";
import { useState, useEffect} from 'react';
import PlayerItem from "./PlayerItem";

import TestSample from "./TestSample";
import Form from "./Form";

function Basketball(){
  const [nbaPlayers, setNbaPlayers]= useState([])
  const [nbaPlayer, setNbaPlayer]= useState([])
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
      fetch("http://localhost:9292/player/nba")
        .then((r) => r.json())
        .then((players) => setNbaPlayers(players));
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
        sport: "NBA"
      }
      console.log(submitPlayer)
      fetch("http://localhost:9292/testplayer", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(submitPlayer)
      })
      .then((r) => r.json())
      .then((newPlayer) => setNbaPlayers(newPlayer));
      setAddPlayer({
          playerName: '',
          playerTeam: '',
        })
    }

    function showPlayerCards(player){
      console.log(player)
      setNbaPlayer(player)
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
        console.log(updateInfo)
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

  return(
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
  NBA
</label>
<button type="submit">Add Player</button>
</form>
    <section className="cards">
        <ul>
            {nbaPlayers.map((player) => (
            <PlayerItem key={player.id} player={player} showPlayerCards={showPlayerCards}/> 
            ))}
        </ul>
    <TestSample cards={cards} player={nbaPlayer} handleUpdate={handleUpdate} handleDelete={handleDelete}/>
    <Form player={nbaPlayer} setCards={setCards} updateInfo={updateInfo} tryChange={tryChange} clearUpdateCard={clearUpdateCard}/>
    </section>
</div>
  )
}
export default Basketball;
// function Basketball(){
//   const [nbaPlayers, setNbaPlayers]= useState([])
//   const [nbaPlayer, setNbaPlayer]= useState([])
//   const [playerCards, setPlayerCards] = useState([])
//   const [addPlayer, setAddPlayer] = useState({
//         playerName: '',
//         playerTeam: '',
//       })

//   useEffect(() => {
//     fetch("http://localhost:9292/player/nba")
//       .then((r) => r.json())
//       .then((players) => setNbaPlayers(players));
//   }, []);

//   function showPlayerCards(player){
//     console.log(player)
//     setNbaPlayer(player)
//   }

//   useEffect(() => {
//     fetch(`http://localhost:9292/player_cards/${nbaPlayer.id}`)
//       .then((r) => r.json())
//       .then((players_cards) => setPlayerCards(players_cards));
//   }, [nbaPlayer]);
   
//   function handleDelete(card){
//     console.log(nbaPlayer)
//     console.log(card)
//     fetch(`http://localhost:9292/player_cards/${nbaPlayer.id}`)
//       .then((r) => r.json())
//       .then((players_cards) => setPlayerCards(players_cards));
//       console.log(playerCards)
//   }

//   function handleSubmit(event){
//     console.log(addPlayer)
//     event.preventDefault()
//     const submitPlayer ={
//       name: addPlayer.playerName,
//       team: addPlayer.playerTeam,
//       sport: "NBA"
//     }
//     console.log(submitPlayer)
//     fetch("http://localhost:9292/players", {
//       method: "POST",
//       headers: {
//       "Content-Type": "application/json",
//       },
//       body: JSON.stringify(submitPlayer)
//     })
//     .then((r) => r.json())
//     .then((newPlayer) => onAddReview(newPlayer));
//   }

//   function onAddReview(newPlayer){
//     console.log(newPlayer)
//     setAddPlayer({
//       playerName: '',
//       playerTeam: '',
//     })
//     setNbaPlayers([...nbaPlayers, newPlayer])
//   }

//   function handleChange(event){
//     event.preventDefault()
//     setAddPlayer({
//       ...addPlayer, 
//       [event.target.name]: event.target.value
//     })
//   }


//     return (
//       <div>
//       <form onSubmit={handleSubmit}> <h3>Add Player:</h3>
//         <label> Player Name:
//           <input
//           type="text"
//           name="playerName"
//           value={addPlayer.playerName}
//           onChange={handleChange}
//           > 
//           </input>
//         </label>

//         <label> Player Team:
//           <input
//           type="text"
//           name="playerTeam"
//           value={addPlayer.playerTeam}
//           onChange={handleChange}
//           > 
//           </input>
//         </label>

//         <label> Player Sport:
//           NBA
//         </label>
//         <button type="submit">Add Player</button>
//       </form>
      
//       <section className="cards">
//         <ul>
//           {nbaPlayers.map((player) => (
//           <PlayerItem key={player.id} player={player} showPlayerCards={showPlayerCards}/> 
//       ))}
//       </ul>
//       <PlayerCards playerCards={playerCards} player={nbaPlayer} handleDelete={handleDelete} />
//     </section>
//     </div>
//     )
// }

// export default Basketball;