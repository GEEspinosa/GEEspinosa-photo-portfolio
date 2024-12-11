import styled from "styled-components";

const MenuIconStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 14px;
    position: absolute;
    z-index: 1;
    
        div {  
            display: none;
            width: 35px;
            height: 5px;
            background-color: ${({open}) => open ? 'white' : 'black'};
            margin: 3px 0;


                @media (max-width: 710px ){
                    display: block;
                    
                }
        }
`;

export {
    MenuIconStyled
};