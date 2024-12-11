import styled from "styled-components";

const MenuIconStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 14px;

        div {  
            display: none;
            width: 35px;
            height: 5px;
            background-color: black;
            margin: 3px 0;

                @media (max-width: 710px ){
                    display: block;
                }
        }
`;

export {
    MenuIconStyled
};