import React, { useEffect, useState } from 'react';
import '../App.css'
function EpisodeCards(props) {
    let { showid } = props
 const [seasonNumber,setSeasonNumber] = useState('')
 useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showid}/seasons`)
      .then((response) => response.json())
      .then((data) => {
        setSeasonNumber(data);
      })
  },);
   return (
       
       <div className='episode-container'>
      <h2>Network: {props.network.name}</h2>   
      <h3>Number of Seasons: {seasonNumber.length}</h3>
     <h2>Number of Episodes: {props.numberOfEpisodes}</h2>
       </div>
)


}
export default EpisodeCards