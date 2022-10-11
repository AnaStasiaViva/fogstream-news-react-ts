import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Modal } from 'components/Modal';
import { Topline } from './Topline';
import { Header } from './Header';
import { Footer } from './Footer';
import { NavAndSearch } from './NavAndSearch';
import css from 'assets/styles/global.module.scss';

export function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch {
      window.scrollTo(0, 0);
    }
  }, [pathname])

  return (
    <>
      <Topline />
      <Header />
      <NavAndSearch />
      <main className={css.content}>
        <Outlet />
      </main>
      <Footer />
      <Modal />
    </>
  );
}
