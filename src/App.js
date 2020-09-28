import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/nav';
import CharacterListItem from './components/list-item';
import { getDataFromAPI } from './services/api';

export default function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getDataFromAPI().then(setCharacters);
  }, [])

  return (
    <>
      <Nav />
      <div className="App">
        <section>
          {characters.map((item) => (
            <CharacterListItem key={item.name} name={item.name}/>
          ))
          }
        </section>
      </div>
    </>
  );
}

