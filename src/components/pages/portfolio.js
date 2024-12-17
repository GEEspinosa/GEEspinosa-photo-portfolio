import React from "react";
import styled from "styled-components";
import imageData from "../../assets/image-data";


const Test = styled.div`
  box-sizing: border-box;

  .row {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
  
    justify-content: space-evenly;
  }

  .column {
  
    flex: 25%;
    max-width: 40%;
   
    padding: 10px;
  }

  .column img {
    margin-top: 14px;
    vertical-align: middle;
  }
`;

function Portfolio() {
  return (
    <>
      <Test>
       
        
        
      </Test>
    </>
  );
}

export default Portfolio;
