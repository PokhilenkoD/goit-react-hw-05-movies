import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderApp = styled.header`
  padding: 20px;

  font-size: 20px;
  box-shadow: 0px 5px 8px 0px rgba(34, 60, 80, 0.25);

  display: flex;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  &.active {
    color: red;
  }
`;
