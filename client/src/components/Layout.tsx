import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }); }, [pathname]);
  return null;
}

export function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main><Outlet /></main>
      <Footer />
    </>
  );
}
