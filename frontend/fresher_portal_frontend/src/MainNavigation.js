import React from 'react';
import SearchAppBar from './components/TopNav';
import StickyFooter from './components/Footer';

const MainNavigation = () => {
  return (
    <React.Fragment>
      <SearchAppBar />
      <StickyFooter />
    </React.Fragment>
  );
};

export default MainNavigation;
