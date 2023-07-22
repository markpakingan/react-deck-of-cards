// DrawCard.js file


import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Draw.css";

const DrawCard = ({ deckID }) => {
  const [cardImage, setCardImage] = useState(null);
  const [cardCount, setCardCount] = useState(null);

  useEffect(() => {
    if (cardCount === null) {
      axios
        .get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`)
        .then((response) => {
          console.log(response.data.deckID);
          setCardCount(response.data.remaining);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [deckID, cardCount]);

  const fetchCard = () => {
    axios
      .get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
      .then((response) => {
        console.log(response.data.cards[0]);
        console.log("Cards remaining", response.data.remaining);
        setCardImage(response.data.cards[0].image);
        setCardCount(response.data.remaining);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      {cardCount !== null && cardCount > 0 && (
        <button onClick={fetchCard}>Draw Card</button>
      )}
      {cardImage && <img src={cardImage} alt="Drawn Card" />}
      {cardCount !== null && <p>Cards remaining: {cardCount}</p>}
    </div>
  );
};

export default DrawCard;
