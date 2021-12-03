import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';
import colors from '../colors';

const AutoComplete = ({ rawAddressInput }) => {
  // setup for address autocomplete
  const [addresses, setAddresses] = useState([]);
  const apiKey = '56c4b6aede434605a66e85df333ee4fd';
  const fetchAddresses = async (input) => {
    const { data } = await axios.get(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(
        input
      )}&limit=5&apiKey=${apiKey}`
    );
    setAddresses(data.features);
  };

  function getAddy() {
    if (rawAddressInput !== '') {
      fetchAddresses(rawAddressInput);
    } else {
      setAddresses([]);
    }
  }

  useEffect(() => {
    getAddy();
  }, [rawAddressInput]);

  return (
    <List name="dropdown">
      {addresses.map((address) => (
        <ListItem key={address.properties.formatted}>
          {address.properties.formatted}
        </ListItem>
      ))}
    </List>
  );
};

AutoComplete.propTypes = {
  rawAddressInput: PropTypes.string,
};

AutoComplete.defaultProps = {
  rawAddressInput: '',
};

const List = styled.ul`
  background: blue;
  padding: 10px;
`;

const ListItem = styled.li`
  background: green;
  list-style-type: none;
  border: 1px ${colors.black} solid;
`;

export default AutoComplete;
