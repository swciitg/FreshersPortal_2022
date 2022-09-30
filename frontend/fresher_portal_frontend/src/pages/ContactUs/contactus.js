import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './contactus.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const ContactUs = () => {
  const [info, setInfo] = useState([]);
  const [info2, setInfo2] = useState([]);

  useEffect(() => {
    fetchData();
    fetchData2();
  }, []);

  const fetchData = () => {
    axios
      .get(`http://127.0.0.1:8000/api/contact/a`)
      .then((response) => {
        console.log(response.data);
        setInfo(response.data);
      })
      .catch((error) => console.log('error', error));
  };
  const fetchData2 = () => {
    axios
      .get(`http://127.0.0.1:8000/api/faq/a`)
      .then((response) => {
        console.log(response.data);
        setInfo2(response.data);
      })
      .catch((error) => console.log('error', error));
  };

  let rand = 2;
  const cards = [
    {
      name: 'Prof. Venkata Dasu',
      post: "Dean, Students' Affairs",
      con: '0361-2582083',
      mail: 'dos@iitg.ernet.in',
      pic: 'dos',
    },
    {
      name: 'Prof. Mallikarjuna C',
      post: 'Associate Dean-1,SA',
      con: '0361-2582929',
      mail: 'adosa_1@iitg.ernet.in',
      pic: 'ados',
    },
    {
      name: 'Prof. Anamika Barua',
      post: 'Associate Dean-2, SA',
      con: '0361-2582928',
      mail: 'adosa_2@iitg.ernet.in',
      pic: 'adosa2',
    },
  ];
  const qna = [
    {
      q: 'How to reach Guwahati?',
      a: 'Guwahati is the gateway for North East India. It is well connected by air, rail and road with the rest of the country. Trains from all parts of the country are available to reach Guwahati (visit the Indian Railways Official website for more details). There are direct flights from Delhi, Kolkata and Mumbai. There are direct or connecting flights from Jaipur, Chennai, Hyderabad, Bengaluru to Guwahati via Kolkata / Delhi. Air India, Jet Airways, IndiGo, SpiceJet and GoAir operate regular flights to and from Guwahati.',
    },
    {
      q: 'How to reach the Institute from Guwahati Railway Station?',
      a: 'idk',
    },
    { q: 'How to reach the Institute from Guwahati Airport?', a: 'idk' },
    { q: 'What all should we get or not get from home?', a: 'idk' },
    { q: 'question5', a: 'idk' },
    { q: 'question6', a: 'idk' },
    { q: 'question7', a: 'idk' },
    { q: 'question8', a: 'idk' },
  ];
  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className='contact_page'>
      <div className='container'>
        <div className='heading-contact'>
          <p className='heading-text-contact'>Contact Us</p>
        </div>
        <div>
          <Container sx={{ py: 3 }} maxWidth='lg'>
            <Grid container spacing={2}>
              {info &&
                info.map((card, ind) => (
                  <Grid item key={rand++} xs={12} sm={6} md={4}>
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                      key={card.email + String(ind)}
                    >
                      <CardMedia
                        component='img'
                        image={card.img}
                        alt='random'
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography
                          style={{
                            textAlign: 'center',
                            font: 'Plus Jakarta Sans',
                          }}
                        >
                          <p className='contact_regtitle'>{card.name}</p>
                        </Typography>
                        <Typography
                          component={'span'}
                          style={{
                            textAlign: 'center',
                            font: 'Plus Jakarta Sans',
                          }}
                        >
                          <p className='contact_regtext'>{card.designation}</p>
                          <p className='contact_regtext'>
                            {'Contact: ' + card.contact}
                          </p>
                          <p className='contact_regtext'>
                            {'Email: ' + card.email}
                          </p>
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Container>
        </div>
      </div>
      <div className='container'>
        <div className='heading-contact-2'>
          <p className='heading-text-contact'>Drop Your Message</p>
        </div>
        <div className='contact_dropmessage'>
          <Box
            component='form'
            sx={{
              '& .MuiTextField-root': { m: 1, width: '620px' },
            }}
            noValidate
            autoComplete='off'
            className='contact_rows'
          >
            <div className='contact_column'>
              <TextField
                id='filled-multiline-flexible'
                label='Name'
                multiline
                maxRows={1}
                value=' '
                variant='filled'
              />
              <TextField
                id='filled-multiline-flexible'
                label='Email'
                multiline
                maxRows={1}
                value=' '
                variant='filled'
              />
              <TextField
                id='filled-multiline-flexible'
                label='Phone'
                multiline
                maxRows={1}
                value=' '
                variant='filled'
              />
            </div>
            <div>
              <TextField
                id='filled-multiline-static'
                label='Message'
                multiline
                rows={7}
                defaultValue=' '
                variant='filled'
              />
            </div>
          </Box>
        </div>
        <div className='contact_setwidth'>
          <Button
            variant='contained'
            style={{
              width: '10rem',
              alignContent: 'center',
              height: '3rem',
              font: 'Plus Jakarta Sans',
              background: '#5468FD',
              textTransform: 'none',
              fontSize: '1.2rem',
            }}
          >
            Submit
          </Button>
        </div>
      </div>
      <div className='contact_faq-section'>
        <div className='heading-contact'>
          <p className='heading-text-contact'>FAQs</p>
        </div>
        <div className='contact_faq'>
          {info2 &&
            info2.map((obj, ind) => (
              <Accordion key={ind}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${ind + 1}a-content`}
                  id={`panel${ind + 1}a-content`}
                >
                  <Typography className='contact_regtitle'>
                    {obj.que}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    dangerouslySetInnerHTML={{ __html: obj.ans }}
                    className='contact_regtext'
                  >
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
