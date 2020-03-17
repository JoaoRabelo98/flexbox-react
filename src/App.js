import React from 'react';
import GlobalStyle from './globalStyle';
import Header from './components/Header/index';
import Content from './components/Content/index';
import Footer from './components/Footer/index';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Content />
      <Content />
      <Footer />
    </>
  );
}

export default App;
