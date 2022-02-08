/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
// import { Form, Button, Search, Label } from 'semantic-ui-react';
import styled from '@emotion/styled';
import axios from 'axios';
import { Input, Button, Autocomplete, TextField } from '@mui/material';
import { IoArrowForward } from 'react-icons/io5';

const resultRenderer = ({ text }) => {
  return <p>{text}</p>;
};

const ContactForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
    },
  });

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
  const [rawInput, setRawInput] = useState('');
  const handleSearchChange = (options, data) => {
    setRawInput(data.value);
  };
  useEffect(() => {
    if (rawInput !== '') {
      fetchAddresses(rawInput);
      setAddresses([]); // ? Should this stay here or move above fetchAddresses()?
    } else {
      setAddresses([]);
    }
  }, [rawInput]);
  const [results, setResults] = useState([]);
  useEffect(() => {
    setResults(
      addresses.map((address, index) => {
        const line = { key: index, text: address };
        return line;
      })
    );
  }, [addresses]);

  const handleResultSelect = (e, data) => {
    setRawInput(data.result.text);
  };

  const onSubmit = (data) => {
    console.log(data);
    console.log('form submitted...');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Your Contact Information</h3>

        {/* FIRST NAME */}
        <Input
          label="First Name"
          type="text"
          placeholder="First Name"
          {...register('firstName', {
            required: true,
            maxLength: 15,
            minLength: 1,
          })}
        />

        {/* LAST NAME */}
        <Input
          label="Last Name"
          type="text"
          placeholder="Last Name"
          {...register('lastName', {
            required: true,
            maxLength: 15,
            minLength: 2,
          })}
        />

        {/* EMAIL */}
        <Input
          label="Email"
          type="email"
          placeholder="Email"
          {...register('email', {
            required: true,
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        {/* PHONE NUMBER */}
        <Input
          label="Phone Number"
          type="tel"
          {...register('tel', {
            required: true,
          })}
        />

        <h3>About Your Property</h3>
        {/* ADDRESS LINE 1 */}

        <Autocomplete
          {...register('address', {
            required: true,
          })}
          freeSolo
          onSearchChange={handleSearchChange}
          options={results}
          value={rawInput}
          minCharacters={3}
          resultRenderer={resultRenderer}
          onResultSelect={handleResultSelect}
          placeholder="Address"
          renderInput={(params) => <Input {...params} label="Address" />}
        />

        {/* CITY */}
        <Input
          label="city"
          type="text"
          placeholder="city"
          {...register('city', {
            required: true,
          })}
        />
        {/* STATE */}
        <Input
          label="State"
          type="text"
          placeholder="State"
          {...register('state', {
            required: true,
          })}
        />
        {/* ZIP CODE */}
        <Input
          label="Zip Code"
          type="number"
          placeholder="Zip Code"
          {...register('zipcode', {
            required: true,
            pattern: /^\d{5}(?:[-\s]\d{4})?$/,
          })}
        />
        <Button variant="contained" endIcon={<IoArrowForward />}>
          Send
        </Button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  width: 100%;
`;

export default ContactForm;

// TODO finish up this contact form --> https://www.freecodecamp.org/news/add-form-validation-in-react-app-with-react-hook-form/
// TODO fix A11y issues with form
