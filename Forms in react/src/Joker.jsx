import React, { useEffect, useState } from "react";

const Joker = () => {
  const getJoke = async () => {
    let response = await fetch(url);
    let jsonResponse = await response.json();
    // console.log(jsonResponse);
    // return jsonResponse;
    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
  };

  const url = "https://official-joke-api.appspot.com/random_joke";

  useEffect(() => {
    async function getFirstJoke() {
      let response = await fetch(url);
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    }
    getFirstJoke();
  }, []);

  const [joke, setJoke] = useState({});

  return (
    <div>
      <h4>Joker</h4>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getJoke}>New Joke</button>
    </div>
  );
};

export default Joker;
