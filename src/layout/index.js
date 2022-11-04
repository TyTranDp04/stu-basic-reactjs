import { Container } from 'assets/css/common';
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import logo from '../assets/images/favicon.png';
import Footer from '../components/footer';
import Header from '../components/header';

const Layout = ({ children }) => {

  return (<>
    <HelmetProvider>
      <Helmet>
        <title>Dev+ Mission is support the early stage developer go through the right career path</title>
        <link rel="icon" href={logo} />
      </Helmet>
    </HelmetProvider>

    <Header />
    <Container className='container-fluid'>
      {children}
    </Container>
    <Footer/>
  </>)
}

export default Layout;