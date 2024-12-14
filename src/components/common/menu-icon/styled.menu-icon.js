import styled from "styled-components";

const MenuIconStyled = styled.div`
    display: flex;
    flex-direction: column;
    
    padding-top: 14px;
    position: absolute;
    z-index: 1;
    
    
    


    :first-child {
        transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'}
    }

    :nth-child(2) {
        opacity: ${({open}) => open ? '0' : '1'}
        //transform: ${({open}) => open ? 'translateX(20px)' : 'translateX(0)'}
    }

    :nth-child(3) {
        transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'}
    }

    
        div {  
            display: none;
            width: 35px;
            height: 5px;
            background-color: ${({open}) => open ? 'white' : 'black'};
            margin: 3px 0;
            //position: relative;
            transform-origin: 1.5px;
            transition: all 0.5s ease-out;
            


            
            
                @media (max-width: 710px ){
                    display: block;
                    
                    
                    
                    
                }
        }
`;

export {
    MenuIconStyled
};