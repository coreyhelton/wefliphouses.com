import React from 'react';
import styled from 'styled-components';
import InputBox from './InputBox';

const ContactForm = () => {
  return (
    <Container>
      <h3>Your Contact Information</h3>
      <InputBox label="Name: " type="text" />
      <InputBox label="Email: " type="email" />
      <InputBox label="Phone Number: " type="phone" />

      <h3>Property Infomation</h3>
      <InputBox label="Address: " type="text" />
      <InputBox label="City: " type="text" />
      <InputBox label="Zip Code: " type="text" />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  width: 100%;
`;

export default ContactForm;
