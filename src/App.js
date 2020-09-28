import React from 'react';
import './App.css';
import Nav from './components/nav';
import CharacterListItem from './components/list-item';
import data from './data.json';

export default function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <section>
          {data.results.map((item) => (
            <CharacterListItem key={item.name} name={item.name}/>
          ))
          }
        </section>
      </div>
    </>
  );
}

