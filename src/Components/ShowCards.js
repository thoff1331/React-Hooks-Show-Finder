import React, { useState,useEffect } from "react";
import "../App.css";
import EpisodeCards from "./episodeCards";
function ShowCards(props) {
const [showEpisodes,setshowEpisodes] = useState([])
const [episodesMenu,setEpisodeMenu] = useState(false)
const [showid,setShowId] = useState('')

useEffect(() => {
  fetch(`https://api.tvmaze.com/shows/${showEpisodes}/episodes`)
    .then((response) => response.json())
    .then((data) => {
      setshowEpisodes(data);
    })
}, [showEpisodes]);

  const card = props.shows.map((show, index) => {
    return (
      <div className="card-container">
        <h1>{show.show.name}</h1>
        <h2> Aired: {show.show.premiered}</h2>
    { show.show.genres[0]  ? <h3>Genre: {show.show.genres[0]}</h3> : null }
        {show.show.image != null ? (
          <img src={show.show.image.medium} alt='show cover' />
        ) : (
          <h1>No Image To Display</h1>
        )}
        <p>
          {show.show.summary &&
            show.show.summary
              .replace("<p>", "")
              .replace("</p>", "")
              .replace("<b>", "")
              .replace("</b>", "")}
        </p>
        <>
        <button onClick={() => {setshowEpisodes(show.show.id);setEpisodeMenu(episodesMenu => !episodesMenu); setShowId(show.show.id) }}>{episodesMenu ?'Close': 'More Info'}</button>
       {episodesMenu && showid === show.show.id ? <EpisodeCards showid={showid} episodes={showEpisodes} numberOfEpisodes={showEpisodes.length} network={show.show.network} /> : null }
        </>
      </div>
    );
  });
  return <div className="cards-container">{card}</div>;
}

export default ShowCards;
