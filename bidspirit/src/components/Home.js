import React from 'react';
import SlideShow from './SlideShow';
import Breadcrumb from './Breadcrumb';
import UpcomingAuction from './UpcomingAuction';
import PrivateSales from './PrivateSales';
import Antique from './Antique';
import Furniture from './Furniture';
import Collectibles from './Collectibles';

function Home() {
  return (
    <div>
      <Breadcrumb/>
      <SlideShow />
      <UpcomingAuction/>
      <PrivateSales/>
      <Antique/>
      <Furniture/>
      <Collectibles/>
    </div>
  );
}

export default Home;
