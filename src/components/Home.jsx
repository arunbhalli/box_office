import React, { useState } from 'react';
import MainPageLayout from './MainPageLayout';

const Home = () => {
  const [myInput, setMyInput] = useState('');
  const onSearch = () => {
    fetch(`https://api.tvmaze.com/search/shows?q=${myInput}`)
      .then((r) => r.json())
      .then((result) => {
        console.log(result);
      });
  };
  const onInputChange = (event) => {
    setMyInput(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      onSearch();
    }
  };
  return (
    <MainPageLayout>
      <input
        value={myInput}
        onchange={onInputChange}
        onKeyDown={onKeyDown}
        type='text'
        autocomplete='off'
      />
      <button type='button' onClick={onSearch}>
        Search
      </button>
    </MainPageLayout>
  );
};

export default Home;
