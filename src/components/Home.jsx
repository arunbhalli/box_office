import React, { useState } from 'react';
import MainPageLayout from './MainPageLayout';
import { apiGet } from '../modules/Movies';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchOptions, setSearchOptions] = useState('shows');

  const isShowSearch = searchOptions === 'shows';
  const onSearch = () => {
    apiGet(`/search/${searchOptions}?q=${input}`).then((result) => {
      setResults(result);
    });
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
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
      return results[0].show
        ? results.map((item) => <div key={item.show.id}>{item.show.name}</div>)
        : results.map((item) => (
            <div key={item.person.id}>{item.show.name}</div>
          ));
    }
    return null;
  };

  const onRadioChange = (event) => {
    setSearchOptions(event.target.value);
  };
  console.log(searchOptions);

  return (
    <MainPageLayout>
      <input
        type='text'
        value={input}
        onchange={onInputChange}
        onKeyDown={onKeyDown}
        placeholder='Search'
      />
      <div>
        <label>
          Shows
          <input
            id='shows-search'
            type='radio'
            value='shows'
            onChange={onRadioChange}
            checked={isShowSearch}
          />
        </label>
        <label>
          Actors
          <input
            id='actors-search'
            type='radio'
            value='people'
            onChange={onRadioChange}
            checked={!isShowSearch}
          />
        </label>
      </div>
      <button type='button' onClick={onSearch}>
        Search
      </button>
      {renderResults}
    </MainPageLayout>
  );
};

export default Home;
