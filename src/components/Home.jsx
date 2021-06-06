import React, { useState } from 'react';
import MainPageLayout from './MainPageLayout';
import { apiGet } from '../modules/Movies';
import ShowGrid from './show/ShowGrid'
import ActorGrid from './actor/ActorGrid'
const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);
  const [searchOptions, setSearchOptions] = useState('shows');

  const isShowSearch = searchOptions === 'shows';

  const onSearch = () => {
    apiGet(`/search/${searchOptions}?q=${input}`).then((result) => {
      setResults(result);
    });
    const searchResult = renderResults();
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      onSearch();
    }
  };

  const onRadioChange = (event) => {
    setSearchOptions(event.target.value);
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No results found</div>;
    }
    if (results && results.length > 0) {
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }
    return null;
  };

  return (
    <MainPageLayout>
      <label>
        <input
          type='text'
          value={input}
          onChange={(event) => onInputChange(event)}
          onKeyDown={onKeyDown}
          placeholder='Search'
        />
      </label>
      <div>
        <label>
          Shows
          <input
            id='shows-search'
            type='radio'
            value='shows'
            onChange={(event) => onRadioChange(event)}
            checked={isShowSearch}
          />
        </label>
        <label>
          Actors
          <input
            id='actors-search'
            type='radio'
            value='people'
            onChange={(event) => onRadioChange(event)}
            checked={!isShowSearch}
          />
        </label>
      </div>
      <button type='button' onClick={() => onSearch()}>
        Search
      </button>
      {results && renderResults()}
    </MainPageLayout>
  );
};

export default Home;
