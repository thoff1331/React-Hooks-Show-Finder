import React, { useEffect, useState } from 'react';
import '../App.css'
function EpisodeCards(props) {
    let { showid }= props
 const [seasonNumber,setSeasonNumber] = useState('')
 useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showid}/seasons`)
      .then((response) => response.json())
      .then((data) => {
        setSeasonNumber(data);
      })
  }, [seasonNumber]);
   console.log(seasonNumber)
   return (
       
       <div className='episode-container'>
     <h6>Number of Episodes: {props.numberOfEpisodes}</h6>
     <h5>Number of Seasons:{seasonNumber.length}</h5>
       </div>
)


}
export default EpisodeCards