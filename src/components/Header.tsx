import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => (
  <StyledHeader>
    SALAD-A-TRON 5000
  </StyledHeader>
);

const StyledHeader = styled.header`
  background: green;
  padding: 16px 0;
  color: white;
`;

export default Header;
