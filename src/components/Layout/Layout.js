import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
