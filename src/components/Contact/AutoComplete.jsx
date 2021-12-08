/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, Label, Input } from 'semantic-ui-react';

const resultRenderer = ({ text }) => {
  return <Label content={text} />;
};
const AutoComplete = (props) => {
  // setup for address autocomplete
  const [addresses, setAddresses] = useState([]);
  const apiKey = '56c4b6aede434605a66e85df333ee4fd';
  const fetchAddresses = async (input) => {
    const res = await axios.get(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(
        input
      )}&limit=5&apiKey=${apiKey}&filter=countrycode:us&format=json`
    );
    const addyArray = res.data.results;
    console.log(addyArray);
    setAddresses(
      addyArray.map((feature) => {
        return feature.formatted;
      })
    );
  };

  // Get Input from Search component and store in 'input'. This makes Search a controlled input.
  const [rawInput, setRawInput] = useState('');
  const handleSearchChange = (options, data) => {
    setRawInput(data.value);
  };

  const handleResultSelect = (e, data) => {
    setRawInput(data.result.text);
  };

  useEffect(() => {
    if (rawInput !== '') {
      fetchAddresses(rawInput);
      setAddresses([]); // ? Should this stay here or move above fetchAddresses()?
    } else {
      setAddresses([]);
    }
  }, [rawInput]);

  // console.log(addresses1);
  const [results, setResults] = useState([]);
  useEffect(() => {
    setResults(
      addresses.map((address, index) => {
        const line = { key: index, text: address };
        return line;
      })
    );
  }, [addresses]);

  return (
    <Search
      {...props}
      onSearchChange={handleSearchChange}
      results={results}
      value={rawInput}
      minCharacters={3}
      resultRenderer={resultRenderer}
      onResultSelect={handleResultSelect}
      label="Address"
      type="text"
      placeholder="Address"
      fluid
    />
  );
};

export default AutoComplete;

// TODO cleanup code
// TODO move autocomplete logic to contact form component. This will allow the autocompleted data, which is really part of the contact forms state to be handled easily.
// TODO setup autocomplete to fill out seperate parts of address based on result selection. Needs to allow overwriting autocompleted input manually.
