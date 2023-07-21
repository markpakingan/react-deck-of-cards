// NewDeck.js file


import React, { useEffect, useState } from "react";
import axios from "axios";
import DrawCard from "./DrawCard";

const NewDeck = () => {
  const [deckID, setDeckID] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then((response) => {
        setDeckID(response.data.deck_id);
        console.log(response.data.deck_id, "Deck ID");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleClick = () => {
    setGameStarted(true);
  };

  return (
    <div>
      {!gameStarted ? (
        <button onClick={handleClick}>Start Game</button>
      ) : (
        deckID && <DrawCard deckID={deckID} />
      )}
    </div>
  );
};

export default NewDeck;
