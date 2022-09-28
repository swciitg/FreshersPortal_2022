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
                {['anchorenza','cadence','finesse','debsoc','xpressions','lumiere','montage','litsoc','octaves'].map((club) => {
                  return(
                    <Item>
                      <Card sx={{ maxWidth: 360 }} onClick={() => {navigate(`/studentorganisation/${club}`);}}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="200"
                            width="285"
                            image={`/assets/images/${club}_sm.jpg`}
                            alt="Anchorenza"
                          />
                        </CardActionArea>
                      </Card>
                      </Item>
                  )
                })}
              
              </Grid>
            </Box>
        </div>
    )
}

export default CulturalBoard;