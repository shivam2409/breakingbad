import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { useEffect } from 'react';
import axios from 'axios';
import CharacterBox from './components/characters/CharacterBox';
import Search from './components/UI/Search';

const App = ({ getQuery }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterBox isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
