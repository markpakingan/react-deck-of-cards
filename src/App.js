// App.js file


import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import NewDeck from './NewDeck';
import DrawCard from './DrawCard';

function App() {

  const [deckID, setDeckID] = useState(null);

  const handleDeckID = (newDeckID) => {
    setDeckID(newDeckID)
  }
  return (
    <div className="App">
      <NewDeck />
      <DrawCard />

      {/* {deckID ? 
      (<DrawCard deckID = {deckID} />):
      (<NewDeck handleDeckID={handleDeckID} />)
      }

      <DrawCard deckID={deckID}/> */}
    </div>
  );
}

export default App;
