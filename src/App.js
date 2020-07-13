import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { useEffect } from 'react';
import axios from 'axios';
import CharacterBox from './components/characters/CharacterBox';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      );
      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <div className='container'>
      <Header />
      <CharacterBox isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
