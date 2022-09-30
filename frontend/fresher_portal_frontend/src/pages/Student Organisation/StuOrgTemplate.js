import React from 'react';
import './StudentOrganisation.css';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1374C5' : '#313A57',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'end',
  width:'40%',
  color: theme.palette.text.secondary,
}));
const StuOrgTemplate = (props) => {
  return (
    <div className='page'>
      <div className='heading'>
        <div className='organisation_pre-cursor'></div>
        <p className='organisation_heading-text'>{props.title}</p>
      </div>
      <div className='organisation_description'>
      <img src={`/assets/images/${String(props.title).split(' ')[0].toLowerCase()}.jpg`} className='organisation_image'/>
        <div className='organisation_description-text'> {props.description}</div>
        <Box textAlign='end' justifyContent='end'>
          <Grid container justifyContent="flex-end">
            <Item className='organisation_item'>
              <p className='organisation_post-text'>
                Website Link
              </p>
            </Item>
          </Grid>
        </Box>'
      </div>
    </div>
  );
};

export default StuOrgTemplate;