import styled from 'styled-components';

const FooterContainer = styled.footer`
  height: 40px;
  //background: #f7f7f7;
  color: #999;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  user-select: none;
  flex-shrink: 0;
  /* optional: add a subtle top border */
  //border-top: 1px solid #ddd;
`;

function Footer() {
  return (
    <FooterContainer>
      © 2025 Gabriel E. Espinosa
    </FooterContainer>
  );
}

export default Footer