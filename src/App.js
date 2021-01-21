import React, { useState, useEffect } from "react";
import ShowCards from "./ShowCards";
function App() {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${textInput}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        setError("fetch failed");
      });
  }, [textInput]);
  return (
    <div className="view-container">
      <div className="show-search">
        <input
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Search for a show"
        />
        <button onClick={(e) => setTextInput(textInput)}>Search</button>
      </div>
      {textInput === "" ? (
        <h1 className="no-data">What Would You Like To Watch...?</h1>
      ) : (
        <ShowCards shows={data} />
      )}
    </div>
  );
}

export default App;
