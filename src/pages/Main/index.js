import React from 'react';

import { StyledMain } from './styles';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import Article from '../../components/Article/index';
import SearchArea from '../../components/SearchArea/index';
import AboutUs from '../../components/AboutUs/index';
import ContactUs from '../../components/ContactUs/index';

const Main = () => {
  return (
    <StyledMain>
      <Header />
      <SearchArea />
      <Article />
      <AboutUs />
      <ContactUs />
      <Footer />
    </StyledMain>
  )
};

export default Main;
