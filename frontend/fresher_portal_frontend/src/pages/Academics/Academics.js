import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Academics() {
  return (
    <Card variant='outlined' sx={{ maxWidth: 992 }}>
      <Typography gutterBottom variant='h5' component='div'>
        Bioscience and Engineering
      </Typography>
      <CardMedia
        component='img'
        height='403'
        image='./components/image-ref.jpg'
        alt='Academic-img'
      />
      <CardContent>
        {/* <Typography gutterBottom variant="h5" component="div">
          Bioscience and Engineering
        </Typography> */}
        <Typography variant='body2' color='text.secondary'>
          The Department of Biosciences and Bioengineering at the Indian
          Institute of Technology Guwahati (IITG) was established in November
          2002 to contribute the fascinating and emerging area of biological
          sciences. It has both undergraduate (B.Tech.) and postgraduate
          (M.Tech. and Ph.D.) academic programmes. The Department is unique in
          North-Eastern India, imparting quality education and providing an
          excellent research environment through its ongoing programmes. It
          imparts training for students to make them competent, motivated
          engineers and scientists. The department has 37 faculty members from
          diverse streams and specializations. The department has developed
          extensive research facility and infrastructure to support the ongoing
          teaching and research initiatives. The major thrust of the department
          includes biochemical engineering, Enzyme and Microbial Technology,
          tissue engineering, plant biotechnology, nanobiotechnology,
          computational biology, cancer biology, infectious diseases and
          proteomics. The department has initiated efforts to establish advanced
          research laboratories in all the thrust areas. Apart from fundamental
          research, the department aims to meet the targeted demands to cater
          the requirements of biotechnology based industries.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>HOD: K.Pakshirajan</Button>
        <Button size='small'>Website link</Button>
      </CardActions>
    </Card>
  );
}
