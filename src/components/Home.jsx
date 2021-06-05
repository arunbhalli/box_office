import React, { useState } from 'react';
import MainPageLayout from './MainPageLayout';
import { apiGet } from '../modules/Movies';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);

  const onSearch = () => {
    apiGet(`/search/shows?q=${input}`).then((result) => {
      setResults(result);
      console.log(result);
    });
  };

  const onInputChange = (event) => {
    setInput(event.target.search.value);
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      onSearch();
    }
  };
  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No results found</div>;
    }
    if (results && results.length > 0) {
      return (
        <div>
          {results.map((item) => (
            <div key={item.show.id}>{item.show.name}</div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <MainPageLayout>
      <input
        type='text'
        name='search'
        onchange={onInputChange}
        onKeyDown={onKeyDown}
        placeholder='Search'
      />
      <button type='button' onClick={onSearch}>
        Search
      </button>
      {renderResults}
    </MainPageLayout>
  );
};

export default Home;
