import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
  margin: '30px',
}));

const AcadTemplate2 = (props) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, [props.url]);

  const fetchData = () => {
    axios
      .get(`http://127.0.0.1:8000/api/open2/${props.url}`)
      .then((response) => {
        setInfo(response.data);
      })
      .catch((error) => console.log('error', error));
  };
  const navigate = useNavigate();
  let ind =0;
  return (
    <div className='page'>
      <Box sx={{ py: 3 }} maxWidth='100%'>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={16}>
          {info.length &&
            info.map((club) => {
              return (
                <Item key={ind++}>
                  <Card
                    sx={{ maxWidth: '150%' }}
                    onClick={() => {
                      navigate(
                        `/academics/${String(club.title)
                          .split(' ')[0]
                          .toLowerCase()}`
                      );
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component='img'
                        height='125%'
                        className='image'
                        width='150%'
                        image={club.img}
                        alt={club.title}
                      />
                      <Typography>{club.title}</Typography>
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

export default AcadTemplate2;
