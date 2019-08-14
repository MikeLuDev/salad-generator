import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => (
  <StyledHeader>
    My header, bitch.
  </StyledHeader>
);

const StyledHeader = styled.header`
  background: green;
  padding: 16px 0;
`;

export default Header;
