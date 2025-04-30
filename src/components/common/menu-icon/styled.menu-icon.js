import styled from 'styled-components';

const MenuIconStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 40px;
  top: 40px;
  z-index: 1001;

  :first-child {
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0deg)')};
  }

  :nth-child(2) {
    opacity: ${({ open }) => (open ? '0' : '1')};
    //transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')}
  }

  :nth-child(3) {
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0deg)')};
  }

  div {
    display: none;
    width: 35px;
    height: 5px;
    background-color: ${({ open }) => (open ? 'white' : 'black')};
    margin: 3px 0;
    transform-origin: 2px;
    transition: all 0.5s ease-out;

    @media (max-width: 1111px) {
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
