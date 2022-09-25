import React from 'react';
import Box from '@mui/material/Box';
import { experimentalStyled as styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: '30px'
  }));

const CulturalBoard = () => {
    const navigate = useNavigate();
    return (
        <div className='page'>
            <Box sx={{ py: 3 }} maxWidth="lg">
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 8, sm: 12, md: 16 }}>
              <Item>
              <Card sx={{ maxWidth: 360 }} onClick={() => {navigate('/studentorganisation/anchorenza');}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/assets/images/anchorenza_sm.jpg"
                      alt="Anchorenza"
                    />
                  </CardActionArea>
                </Card>
                </Item>
                <Item>
                <Card sx={{ maxWidth: 360 }} onClick={() => {navigate('/studentorganisation/cadance');}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/assets/images/cadence_sm.jpg"
                      alt="Cadance"
                    />
                  </CardActionArea>
                </Card>
                </Item>
                <Item>
                <Card sx={{ maxWidth: 360 }} onClick={() => {navigate('/studentorganisation/finesse');}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/assets/images/finesse_sm.jpg"
                      alt="green iguana"
                    />
                  </CardActionArea>
                </Card>
                </Item>
              </Grid>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 8, sm: 12, md: 16 }}>
              <Item>
              <Card sx={{ maxWidth: 360 }} onClick={() => {navigate('/studentorganisation/debsoc');}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/assets/images/debsoc_sm.jpg"
                      alt="green iguana"
                    />
                  </CardActionArea>
                </Card>
                </Item>
                <Item>
                <Card sx={{ maxWidth: 360 }} onClick={() => {navigate('/studentorganisation/xpressions');}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/assets/images/xpressions_sm.jpg"
                      alt="green iguana"
                    />
                  </CardActionArea>
                </Card>
                </Item>
                <Item>
                <Card sx={{ maxWidth: 360 }} onClick={() => {navigate('/studentorganisation/lumiere');}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/assets/images/lumiere_sm.jpg"
                      alt="green iguana"
                    />
                  </CardActionArea>
                </Card>
                </Item>
              </Grid>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 8, sm: 12, md: 16 }}>
              <Item>
              <Card sx={{ maxWidth: 360 }} onClick={() => {navigate('/studentorganisation/montage');}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/assets/images/montage_sm.jpg"
                      alt="green iguana"
                    />
                  </CardActionArea>
                </Card>
                </Item>
                <Item>
                <Card sx={{ maxWidth: 360 }} onClick={() => {navigate('/studentorganisation/litsoc');}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/assets/images/litsoc_sm.jpg"
                      alt="green iguana"
                      text="assdf"
                    />
                  </CardActionArea>
                </Card>
                </Item>
                <Item>
                <Card sx={{ maxWidth: 360 }} onClick={() => {navigate('/studentorganisation/octaves');}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/assets/images/octaves_sm.jpg"
                      alt="green iguana"
                    />
                  </CardActionArea>
                </Card>
                </Item>
              </Grid>
            </Box>
        </div>
    )
}

export default CulturalBoard;