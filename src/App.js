import React, { useState, useEffect } from "react";
import ShowCards from "./Components/ShowCards";
function App() {
  const [data, setData] = useState([]);
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${textInput}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
  }, [textInput]);
  return (
    <div className="view-container">
      <div className="show-search">
        <input
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Search for a show"
        />
       
      </div>
      {textInput === "" || data.length === 0 ? (
        <h1 className="no-data">What Would You Like To Watch...?</h1>
      ) : (
        <ShowCards shows={data} />
      )}
    </div>
  );
}

export default App;
