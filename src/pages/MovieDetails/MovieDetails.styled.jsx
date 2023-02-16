import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ButtonBack = styled.button`
  margin-top: 10px;
`;

export const BackLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const AddiionalBox = styled.div`
  box-shadow: 0px -5px 8px 0px rgba(34, 60, 80, 0.25),
    0px 5px 8px 0px rgba(34, 60, 80, 0.25);

  padding-top: 10px;
  padding-bottom: 10px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
