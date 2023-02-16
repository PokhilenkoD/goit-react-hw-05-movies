import { HeaderApp, Link } from './AppBar.styled';

export const AppBar = () => {
  return (
    <>
      <HeaderApp>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <nav>
          <Link to="movies">Movies</Link>
        </nav>
      </HeaderApp>
    </>
  );
};
