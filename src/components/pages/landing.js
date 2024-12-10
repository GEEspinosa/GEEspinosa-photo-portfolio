import React from 'react';
import styled from 'styled-components';


const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid 
  border-radious: 3px;
` 



function Landing() {
    return (
      <>
        <h1>Home</h1>
        <Button>Test</Button>
      </>
    )
  }

export default Landing;