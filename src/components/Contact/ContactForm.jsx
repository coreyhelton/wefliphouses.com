/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'semantic-ui-react';
import AutoComplete from './AutoComplete';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const rawAddressInput = watch('address');
  // useEffect(() => {

  // }, [rawAddressInput]);

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h3>Your Contact Information</h3>
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            type="text"
            {...register('firstName', {
              required: true,
              maxLength: 15,
              minLength: 2,
            })}
          />
          {errors.firstName && <p>Please check the first name</p>}
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            type="text"
            {...register('lastName', {
              required: true,
              maxLength: 15,
              minLength: 2,
            })}
          />
          {errors.lastName && <p>Please check the last name</p>}
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email"
            type="email"
            {...register('email', {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.email && <p>Please enter a valid email address.</p>}
        </Form.Field>
        <h3>About Your Property</h3>
        <Form.Field>
          <label>Address</label>
          <input
            placeholder="Address"
            type="text"
            {...register('address', {
              required: true,
            })}
          />
          <AutoComplete rawAddressInput={rawAddressInput} />
          {errors.email && <p>Please enter a valid address.</p>}
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
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
// TODO create component to display autocomplete address, should take in object and generate elements forEach...
