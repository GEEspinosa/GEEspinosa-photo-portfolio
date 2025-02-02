import styled from 'styled-components';

const MenuIconStyled = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  right: 14px;
  top: 40px;
  z-index: 1000;

  :first-child {
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
  }

  :nth-child(2) {
    opacity: ${({ open }) => (open ? '0' : '1')};
    //transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')}
  }

  :nth-child(3) {
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
  }

  div {
    display: none;
    width: 35px;
    height: 5px;
    background-color: ${({ open }) => (open ? 'white' : 'black')};
    margin: 3px 0;
    //position: relative;
    transform-origin: 2px;
    transition: all 0.5s ease-out;

    @media (max-width: 710px) {
      display: block;

      
    }

    @media (max-width: 430px) {
      width: 30px;
      height: 4px;
      transform-origin: 1px;
    }
  }
`;

export { MenuIconStyled };
