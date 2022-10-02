import React from 'react';
import Box from '@mui/material/Box';
import { experimentalStyled as styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  margin: '30px',
}));

const TechnicalBoard = () => {
  const navigate = useNavigate();
  return (
    <div className='page'>
      <Box sx={{ py: 3 }} maxWidth='100%'>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={16}
        >
          {[
            'Aeromodelling Club',
            'Astronomy Club',
            'Coding Club',
            'Consultancy and Analytics Club',
            'Electronics Club',
            'Entreprenuership Cell',
            'Finance & Economics Club',
            'Green Automobile Club',
            'Robotics Club',
            'Science and Quiz Club ( ACUMEN )',
            'TechEvince',
          ].map((item) => {
            return (
              <Item>
                <Card
                  sx={{ maxWidth: '150%' }}
                  onClick={() => {
                    navigate(
                      `/studentorganisation/${String(item)
                        .split(' ')[0]
                        .toLowerCase()}`
                    );
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      height='125%'
                      width='150%'
                      className='image'
                      image={`/assets/images/${String(item)
                        .split(' ')[0]
                        .toLowerCase()}.jpg`}
                      alt={item}
                    />
                  </CardActionArea>
                </Card>
              </Item>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default TechnicalBoard;
