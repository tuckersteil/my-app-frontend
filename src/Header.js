import React from "react";

function Header(){
    return (
        <div className="header">
            <h1 className="title">UncleTucks's Sports Cards </h1>
        </div>
       
    )
}


export default Header;

// import React from "react";
// import { useState, useEffect} from 'react';
// import PlayerItem from "./PlayerItem";
// import PlayerCards from "./PlayerCards";
// function PlayerList(){
//   const [players, setPlayers] = useState([]);
//   // const [playerCards, setPlayerCards] = useState([]);
//   // const [cardsArr, setCardsArr]= useState([])
//   const [playerId, setPlayerId] = useState([]);
//   const [addPlayer, setAddPlayer] = useState({
//     playerName: '',
//     playerTeam: '',
//     playerSport: ''
//   })

//   useEffect(() => {
//     fetch("http://localhost:9292/players")
//       .then((r) => r.json())
//       .then((players) => setPlayers(players));
//   }, []);

//     function showAllCards(id){
//       setPlayerId(id)
//     }

    // function handleSubmit(event){
    //   console.log(addPlayer)

    //   const submitPlayer ={
    //     name: addPlayer.playerName,
    //     team: addPlayer.playerTeam,
    //     sport: addPlayer.playerSport
    //   }
    //   fetch("http://localhost:9292/players", {
    //     method: "POST",
    //     headers: {
    //     "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(submitPlayer)
    //   });
    // }

    // function handleChange(event){
    //   setAddPlayer({
    //     ...addPlayer, 
    //     [event.target.name]: event.target.value
    //   })
    // }


   

//     return (
//       <div>
//         <form onSubmit={handleSubmit}> <h3>Add Player:</h3>
//           <label> Player Name:
//             <input
//             type="text"
//             name="playerName"
//             value={addPlayer.playerName}
//             onChange={handleChange}
//             > 
//             </input>
//           </label>

//           <label> Player Team:
//             <input
//             type="text"
//             name="playerTeam"
//             value={addPlayer.playerTeam}
//             onChange={handleChange}
//             > 
//             </input>
//           </label>

//           <label> Player Sport:
//             <input
//             type="text"
//             name="playerSport"
//             value={addPlayer.playerSport}
//             onChange={handleChange}
//             > 
//             </input>
//           </label>
//           <button type="submit">Add Player</button>
//         </form>
        
//         <section className="cards">
//           <ul>
//             {players.map((player) => (
//             <PlayerItem key={player.id} player={player} showAllCards={showAllCards}/> 
//         ))}
//         </ul>
//         <PlayerCards  playerId={playerId} />
//       </section>
//       </div>
        
//     )
// }

// export default PlayerList;