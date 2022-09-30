import React, { useState, useEffect } from 'react';
import './Academics.css';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1374C5' : '#313A57',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const AcadTemplates = (props) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, [props.url]);

  const fetchData = () => {
    axios
      .get(`http://127.0.0.1:8000/api/base/${props.url}`)
      .then((response) => {
        console.log(response.data);
        setInfo(response.data);
      })
      .catch((error) => console.log('error', error));
  };
  return (
    <div className='page'>
      <div className='heading'>
        <div className='academics_pre-cursor'></div>
        {info.length && (
          <p className='academics_heading-text'>{info[0].title}</p>
        )}
      </div>
      <div className='academics_description'>
        <img src={info.length && info[0].img} className='image' />
        <div className='academics_description-text'>
          {info.length && (
            <div dangerouslySetInnerHTML={{ __html: info[0].text }}></div>
          )}
        </div>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>
              <p className='post-text'>HOD: {info.length && info[0].person}</p>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <a href={info.length && info[0].weblink} className='post-text'>
                Website Link
              </a>
            </Item>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AcadTemplates;
