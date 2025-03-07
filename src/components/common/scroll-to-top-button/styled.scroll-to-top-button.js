import styled from "styled-components";

const ScrollToTopButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background-color: white;
    color: black;
    border: 2px solid #555555;
    font-size: 16px;
    padding: 16px 32px;
    margin: 4px 2px;

    transition-duration: 0.4s;
    cursor: pointer;

    @media (max-width: 802){
      position: absolute
      font-size: 16px;
      padding: 10% 20%;
      margin: 4px 2px;
    }
  }

  :hover {
    background-color: #555555;
    color: white;
  }
`

export {ScrollToTopButtonStyled};