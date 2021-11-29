import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import HighlightBox from '../HighlightBox';
import ContactForm from './ContactForm';

const Contact = () => {
  const handleClick = () => {
    console.log('hi');
  };

  return (
    <Container>
      <h1>Do you want to sell a house fast?</h1>
      <p>
        We&apos;ll connect you with a local real estate professional to buy your
        home quickly and hassle-free. You could have your house sold in days,
        regardless of the condition or your financial situation. We&apos;ll send
        our investor to come view your home, and give you a no-obligation cash
        offer.
      </p>
      <HighlightBox text="We Buy Houses! No fees. No Obligations. No Repairs. No Agents. No Hassles." />
      <ContactForm />
      <Button
        className="btn"
        type="submit"
        click={handleClick}
        label="Get An Offer Now!"
      />
    </Container>
  );
};

const Container = styled.div`
  margin: 2rem;
  font-family: 'Varela Round', sans-serif;
  text-align: center;
  h1 {
    align: center;
  }

  button {
    margin: 0 auto;
  }
`;
export default Contact;
