import { Container } from 'assets/css/common';
import Loading from 'components/loading';
import React from 'react';
import { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import logo from '../assets/images/favicon.png';
import Footer from '../components/footer';
import Header from '../components/header';
import useTimeout from './useTimeout';

const Layout = ({ children }) => {
  const [hasTimeElapsed, setHasTimeElapsed] = useState(true);

  useTimeout(() => {
    setHasTimeElapsed(!hasTimeElapsed);
  }, 2000);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Dev+ Mission is support the early stage developer go through the right career path</title>
          <link rel="icon" href={logo} />
        </Helmet>
      </HelmetProvider>

      {hasTimeElapsed ? <Loading /> :
        <>
          <Header />
          <Container className='container-fluid'>
            {children}
          </Container>
          <Footer />
        </>
      }
    </>
  )
}

export default Layout;