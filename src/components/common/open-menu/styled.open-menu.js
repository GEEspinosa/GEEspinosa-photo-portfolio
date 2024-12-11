import styled from "styled-components";

const StyledOpenMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content; center;
    background: #0D0C1D;
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};


        // @media (max-width: 710px) {
        //     width: 100%
        
        // }

    &:hover {
        color: #0D0C1D
    }

`;

export {StyledOpenMenu};