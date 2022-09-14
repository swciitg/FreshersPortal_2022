import React from 'react';
import './contactus.css'
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
    let rand = 2;
    const cards = [{name:"Prof. Venkata Dasu",post:"Dean, Students' Affairs",con:"0361-2582083",mail:"dos@iitg.ernet.in",pic:"dos"},
    {name:"Prof. Mallikarjuna C",post:"Associate Dean-1,SA",con:"0361-2582929",mail:"adosa_1@iitg.ernet.in",pic:"ados"},
    {name:"Prof. Anamika Barua",post:"Associate Dean-2, SA",con:"0361-2582928",mail:"adosa_2@iitg.ernet.in",pic:"adosa2"}];
    const qna =[{q:"How to reach Guwahati?",a:"Guwahati is the gateway for North East India. It is well connected by air, rail and road with the rest of the country. Trains from all parts of the country are available to reach Guwahati (visit the Indian Railways Official website for more details). There are direct flights from Delhi, Kolkata and Mumbai. There are direct or connecting flights from Jaipur, Chennai, Hyderabad, Bengaluru to Guwahati via Kolkata / Delhi. Air India, Jet Airways, IndiGo, SpiceJet and GoAir operate regular flights to and from Guwahati."},{q:"How to reach the Institute from Guwahati Railway Station?",a:"idk"},{q:"How to reach the Institute from Guwahati Airport?",a:"idk"},{q:"What all should we get or not get from home?",a:"idk"},{q:"question5",a:"idk"},{q:"question6",a:"idk"},{q:"question7",a:"idk"},{q:"question8",a:"idk"}]
    const [expanded, setExpanded] = React.useState('panel1');
    const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    };
    return (
        <div className='page'>
            <div className="container">
                <div className="heading">
                    <p className="heading-text">Contact Us</p>
                </div>
                <div>
                <Container sx={{ py: 3 }} maxWidth="lg">
                    <Grid container spacing={2}>
                      {cards.map((card,ind) => (
                        <Grid item key={rand++} xs={12} sm={6} md={4}>
                          <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            key={card.mail+String(ind)}
                          >
                            <CardMedia
                              component="img"
                              image={`/assets/images/${card.pic}.jpg`}
                              alt="random"
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                              <Typography style={{textAlign:'center',font:'Plus Jakarta Sans'}}>
                                <p className="regtitle">{card.name}</p>
                              </Typography>
                              <Typography component={'span'} style={{textAlign:'center',font:'Plus Jakarta Sans'}}>
                                <p className='regtext'>{card.post}</p>
                                <p className='regtext'>{"Contact: "+card.con}</p>
                                <p className='regtext'>{"Email: "+card.mail}</p>
                              </Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                </Container>
                </div>
            </div>
            <div className="container">
                <div className="heading">
                    <p className="heading-text">Drop Your Message</p>
                </div>
                <div>
                    <Box
                      component="form"
                      sx={{
                        '& .MuiTextField-root': { m: 1, width: '620px' },
                      }}
                      noValidate
                      autoComplete="off"
                      className='rows'
                    >
                      <div className='column'>
                        <TextField
                          id="filled-multiline-flexible"
                          label="Name"
                          multiline
                          maxRows={1}
                          value=" "
                          variant="filled"
                        />
                        <TextField
                          id="filled-multiline-flexible"
                          label="Email"
                          multiline
                          maxRows={1}
                          value=" "
                          variant="filled"
                        />
                        <TextField
                          id="filled-multiline-flexible"
                          label="Phone"
                          multiline
                          maxRows={1}
                          value=" "
                          variant="filled"
                        />
                        
                        </div>
                        <div >
                          <TextField
                          id="filled-multiline-static"
                          label="Message"
                          multiline
                          rows={7}
                          defaultValue=" "
                          variant="filled"
                        />
                      </div>
                    </Box>
                    <div className='setwidth'><Button variant="contained" style={{width:'275px',alignContent:'center',height:'71px',font: 'Plus Jakarta Sans'}}>Submit</Button></div>   
                </div>
              </div>
              <div className="container">
                <div className="heading">
                    <p className="heading-text">FAQs</p>
                </div>
              <div>
                {qna.map((obj,ind)=>(
                  <Accordion key={ind}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${ind+1}a-content`}
                    id={`panel${ind+1}a-content`}
                  >
                    <Typography className='regtitle'>{obj.q}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className='regtext'>
                      {obj.a}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                ))}
              </div>
            </div>            
        </div>
    )
}

export default ContactUs;