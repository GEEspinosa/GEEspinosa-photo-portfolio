import styled from 'styled-components';

const GalleryMenuIconStyled = styled.div`


    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  :first-child {
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(45deg)')};
  }

  :nth-child(2) {
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(-45deg)')};
  }

  div {
 
    width: 20px;
    height: 4px;
    background-color: red;
    margin: 3px 0;
  
    transform-origin: 11px;
    transition: all 0.5s ease-out;
  }
`;

export { GalleryMenuIconStyled };