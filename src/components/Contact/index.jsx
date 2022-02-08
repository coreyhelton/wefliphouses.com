/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Autocomplete,
  Box,
  Button,
  Container,
  TextField,
  ThemeProvider,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ApiClient from '../../Utilities/ApiClient';
import theme from '../../Utilities/Theme';

const schema = yup
  .object({
    firstName: yup.string().required('Please enter your first name.'),
    lastName: yup.string().required('Please enter your last name'),
    email: yup
      .string()
      .email('Please enter a valid email address')
      .required('Please enter a valid email address'),
    phone: yup
      .string()
      .matches(
        /^[1]?[-\s.]?[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
        'Please enter a valid 10 digit phone number'
      )
      .required('Please enter a valid 10 digit phone number'),
    address_line1: yup.string().required('Please enter a valid address'),
    address_line2: yup.string(),
    city: yup.string().required('Please enter the name of your city'),
    state: yup.string().nullable().required('Please enter your state'),
    zip_code: yup
      .number()
      .integer()
      .positive()
      .min(10000)
      .max(99999)
      .required(),
  })
  .required();

const states = [
  'AK',
  'AL',
  'AS',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'DC',
  'FM',
  'FL',
  'GA',
  'GU',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MH',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NC',
  'ND',
  'MP',
  'OH',
  'OK',
  'OR',
  'PW',
  'PA',
  'PR',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VI',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY',
];

const index = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // POST form data to express-mailman
  const sendFormData = (data) => {
    ApiClient.post('/form', data);
  };
  const onSubmit = (data) => {
    console.log(data);
    sendFormData(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          width: '500px',
          backgroundColor: 'white',
          borderRadius: '4px',
          margin: '30px',
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: 'flex',
              flexFlow: 'column wrap',
              gap: '2rem',
              margin: '30px',
            }}
          >
            <Box sx={{ display: 'flex', flexFlow: 'row nowrap', gap: '30px' }}>
              <Controller
                name="firstName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    variant="outlined"
                    color="primary"
                    label="First Name"
                    error={!!errors?.firstName}
                    helperText={errors?.firstName?.message}
                  />
                )}
              />
              <Controller
                name="lastName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    variant="outlined"
                    color="primary"
                    label="Last Name"
                    error={!!errors?.lastName}
                    helperText={errors?.lastName?.message}
                  />
                )}
              />
            </Box>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  color="primary"
                  label="Email"
                  error={!!errors?.email}
                  helperText={errors?.email?.message}
                />
              )}
            />
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  color="primary"
                  label="Phone Number"
                  error={!!errors?.phone}
                  helperText={errors?.phone?.message}
                />
              )}
              getOptionLabel={(state) => states[state]}
            />
            <Controller
              name="address_line1"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  color="primary"
                  label="Address Line 1"
                  error={!!errors?.address_line1}
                  helperText={errors?.address_line1?.message}
                />
              )}
            />
            <Controller
              name="address_line2"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  color="primary"
                  label="Address Line 2"
                  error={!!errors?.address_line2}
                  helperText={errors?.address_line2?.message}
                />
              )}
            />
            <Controller
              name="city"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  color="primary"
                  label="City"
                  error={!!errors?.city}
                  helperText={errors?.city?.message}
                />
              )}
            />
            <Controller
              name="state"
              control={control}
              defaultValue=""
              render={({ field: { ref, onChange, ...field } }) => (
                <Autocomplete
                  {...field}
                  selectOnFocus
                  clearOnBlur
                  handleHomeEndKeys
                  onChange={(e, v) => onChange(v)}
                  variant="outlined"
                  color="primary"
                  options={states}
                  isOptionEqualToValue={(option, value) =>
                    option.id === value.id
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      inputRef={ref}
                      label="State"
                      helperText={errors?.state?.message}
                      error={!!errors?.state}
                    />
                  )}
                />
              )}
            />
            <Controller
              name="zip_code"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  color="primary"
                  label="Zip Code"
                  error={!!errors?.zip_code}
                  helperText={errors?.zip_code?.message}
                />
              )}
            />
            <Button variant="contained" type="submit">
              Get an offer now!
            </Button>
          </Box>
        </form>
      </Container>
    </ThemeProvider>
  );
};

export default index;
