import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Facilities.css';
import './HostelAndFacilities.css';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import ResponsiveDrawer from './SideNav';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import MediaCard from './FacilitiesItem';

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

const Facilities = () => {
  const [nav, setNav] = React.useState({
    page: 0,
    articles: ['Guesthouse', 'Library', 'Hospital'],
  });

  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`http://127.0.0.1:8000/api/base/facilities`)
      .then((response) => {
        console.log(response.data);
        setInfo(response.data);
      })
      .catch((error) => console.log('error', error));
  };

  const arr = [
    'Guesthouse',
    'Library',
    'Hospital',
    'Computer Centre',
    'Shopping Complex',
    'Eateries',
    'Banks & ATMs',
    'Bus Facilitiy',
    'E-Rickshaws',
  ];

  // let componenentSwitch = () =>
  // {
  //   setArticles(articles.slice(page*3,(page+1)*3));
  // }
  async function handlePrevClick() {
    setNav((prevNav) => {
      return {
        ...prevNav,
        page: prevNav.page - 1,
        articles: arr.slice((prevNav.page - 1) * 3, prevNav.page * 3),
      };
    });
  }

  async function handleNextClick() {
    setNav((prevNav) => {
      return {
        ...prevNav,
        page: prevNav.page + 1,
        articles: arr.slice((prevNav.page + 1) * 3, (prevNav.page + 2) * 3),
      };
    });
  }
  return (
    <div className='page'>
      <div className='heading'>
        <div className='hostel_box'>Facilities</div>
      </div>
      <div className='hostel_container'>
        <ScrollMenu
          LeftArrow={LeftArrow(nav, handlePrevClick)}
          RightArrow={RightArrow(nav, handleNextClick)}
        >
          {nav.articles.map((text, id) => (
            <MediaCard
              title={text}
              description='hotel_description'
              key={nav.page * 3 + id}
              id={nav.page * 3 + id}
            />
          ))}
        </ScrollMenu>
      </div>
    </div>
  );
};

function LeftArrow(nav, handlePrevClick) {
  return (
    <Tooltip title='Left' placement='left'>
      <Button disabled={nav.page < 1} onClick={() => handlePrevClick()}>
        {' '}
        &lt;-{' '}
      </Button>
    </Tooltip>
  );
}

function RightArrow(nav, handleNextClick) {
  return (
    <Tooltip title='Right' placement='right'>
      <Button disabled={nav.page > 1} onClick={() => handleNextClick()}>
        -&gt;
      </Button>
    </Tooltip>
  );
}

function Card({ onClick, selected, title, itemId }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: '160px',
      }}
      tabIndex={0}
    >
      <div className='card'>
        <div>{title}</div>
        <div>visible: {JSON.stringify(!!visibility.isItemVisible(itemId))}</div>
        <div>selected: {JSON.stringify(!!selected)}</div>
      </div>
      <div
        style={{
          height: '200px',
        }}
      />
    </div>
  );
}
export default Facilities;
