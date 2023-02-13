import { NavLink } from 'react-router-dom';
import { HeaderApp } from './AppBar.styled';

export const AppBar = () => {
  return (
    <>
      <HeaderApp>
        <nav>
          <NavLink to="/">Home</NavLink>
        </nav>
        <nav>
          <NavLink to="movies">Movies</NavLink>
        </nav>
      </HeaderApp>
    </>
  );
};
