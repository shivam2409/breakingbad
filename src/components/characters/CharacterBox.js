import React from 'react';
import CharecterItem from './CharecterItem';

const CharacterBox = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <CharecterItem key={item.char_id} item={item}></CharecterItem>
      ))}
    </section>
  );
};

export default CharacterBox;
