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

const AcadFront = () => {
    const navigate = useNavigate();
    return (
        <div className='page'>
            <Box sx={{ py: 3 }} maxWidth="lg">
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 8, sm: 12, md: 16 }}>
              <Item>
              <Card sx={{ maxWidth: 360 }} onClick={() => {navigate('/academics/bsbe');}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/assets/images/bsbe.jpg"
                      alt="Bsbe"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Biosciences and Biotechnology Engineering
                        </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                </Item>
                <Item>
                <Card sx={{ maxWidth: 360 }} onClick={() => {navigate('/academics/chemical');}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/assets/images/chemical.jpg"
                      alt="Chemical"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Chemical Engineering
                        </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                </Item>
                <Item>
                <Card sx={{ maxWidth: 360 }} onClick={() => {navigate('/academics/cst');}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/assets/images/cst.jpg"
                      alt="Chemical Science and Technology"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Chemical Science and Technology
                        </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                </Item>
              </Grid>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 8, sm: 12, md: 16 }}>
              <Item>
              <Card sx={{ maxWidth: 360 }} onClick={() => {navigate('/academics/civil');}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/assets/images/civil.jpg"
                      alt="Civil"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Civil Engineering
                        </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                </Item>
                <Item>
                <Card sx={{ maxWidth: 360 }} onClick={() => {navigate('/academics/cse');}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/assets/images/cse.jpg"
                      alt="Cse"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Computer Science Engineering
                        </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                </Item>
                <Item>
                <Card sx={{ maxWidth: 360 }} onClick={() => {navigate('/academics/design');}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/assets/images/design.jpg"
                      alt="design"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Department of Design
                        </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                </Item>
              </Grid>
              <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 8, sm: 12, md: 16 }}>
              <Item>
              <Card sx={{ maxWidth: 360 }} onClick={() => {navigate('/academics/ece');}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/assets/images/ece.jpg"
                      alt="ece"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Electronics and Electrical Engineering 
                        </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                </Item>
                <Item>
                <Card sx={{ maxWidth: 360 }} onClick={() => {navigate('/academics/hss');}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/assets/images/hss.jpg"
                      alt="hss"
        
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Humanities and Social Sciences
                        </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                </Item>
                <Item>
                <Card sx={{ maxWidth: 360 }} onClick={() => {navigate('/academics/Mathematics');}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/assets/images/Physics.jpg"
                      alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Mathematics and Computing
                        </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                </Item>
              </Grid>
              <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 8, sm: 12, md: 16 }}>
              <Item>
              <Card sx={{ maxWidth: 540 }} onClick={() => {navigate('/academics/ece');}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/assets/images/Mechanical.jpg"
                      alt="ME"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Mechanical Engineering
                        </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                </Item>
                <Item>
                <Card sx={{ maxWidth: 540 }} onClick={() => {navigate('/academics/hss');}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/assets/images/Physics.jpg"
                      alt="Engineering Physics"
        
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Engineering Physics
                        </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                </Item>
              </Grid>
            </Box>
        </div>
    )
}

export default AcadFront;