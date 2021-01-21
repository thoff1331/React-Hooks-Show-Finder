import React from "react";
import "./App.css";
function ShowCards(props) {
  const card = props.shows.map((show, index) => {
    return (
      <div className="card-container">
        <h1>{show.show.name}</h1>
        <h2> Since: {show.show.premiered}</h2>
        <h3>Genre: {show.show.genres[0]}</h3>
        {show.show.image != null ? (
          <img src={show.show.image.medium} />
        ) : (
          <h1>No Image To Display</h1>
        )}
        <p>
          {show.show.summary &&
            show.show.summary
              .replace("<p>", "")
              .replace("</p>", "")
              .replace("<b>", "")
              .replace("<b>", "")}
        </p>
      </div>
    );
  });
  return <div className="cards-container">{card}</div>;
}

export default ShowCards;
