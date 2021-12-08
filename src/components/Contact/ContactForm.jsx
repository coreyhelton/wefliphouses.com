/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import { Form, Button } from 'semantic-ui-react';
import AutoComplete from './AutoComplete';

const ContactForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    console.log('hi');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h3>Your Contact Information</h3>

        {/* FIRST NAME */}
        <Form.Input
          label="First Name"
          type="text"
          placeholder="First Name"
          {...register('firstName', {
            required: true,
            maxLength: 15,
            minLength: 2,
          })}
        />
        {errors.firstName && <p>Please check the first name</p>}

        {/* LAST NAME */}
        <Form.Input
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
        <Form.Input
          label="Email"
          type="email"
          placeholder="Email"
          {...register('email', {
            required: true,
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />

        <h3>About Your Property</h3>
        {/* ADDRESS FIELD 1 */}
        <Form.Field>
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <AutoComplete
                {...field}
                label="Address"
                type="text"
                placeholder="Address"
                fluid
              />
            )}
          />
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
