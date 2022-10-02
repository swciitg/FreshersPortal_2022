import React from 'react';
import './AdmittedStudents.css';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Stack, Button } from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Tooltip from '@mui/material/Tooltip';
import ImageIcon from '@mui/icons-material/Image';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GppGoodIcon from '@mui/icons-material/GppGood';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArticleIcon from '@mui/icons-material/Article';
import Navbar from '../../components/Navbar/Navbar1';
import Navbar2 from '../../components/Navbar/Navbar2';
import Grid from '@mui/material/Grid';
import StickyFooter from '../../components/StickyFooter';

export default function AdmittedStudents() {
  var s1 = 4;
  var s2 = 4;
  const data = [
    {
      date: '06.07.2022',
      title: 'Regarding hostel accomodation',
    },
    {
      date: '01.07.2022',
      title: 'Regarding mess refund',
    },
    {
      date: '30.06.2022',
      title: 'Regarding branch change',
    },
    {
      date: '22.06.2022',
      title: 'Regarding SC/ST scholarship',
    },
    {
      date: '14.06.2022',
      title: 'Regarding fee ',
    },
    {
      date: '03.06.2022',
      title: 'Regarding department',
    },
    {
      date: '14.06.2022',
      title: 'Regarding fee ',
    },
    {
      date: '03.06.2022',
      title: 'Regarding department',
    },
    {
      date: '14.06.2022',
      title: 'Regarding fee ',
    },
    {
      date: '03.06.2022',
      title: 'Regarding department',
    },
  ];

  const galTooltip = (props) => (
    <Tooltip id='button-tooltip' {...props}>
      Gallery
    </Tooltip>
  );
  const calTooltip = (props) => (
    <Tooltip id='button-tooltip' {...props}>
      Calendar
    </Tooltip>
  );
  const mapTooltip = (props) => (
    <Tooltip id='button-tooltip' {...props}>
      Maps
    </Tooltip>
  );
  const telTooltip = (props) => (
    <Tooltip id='button-tooltip' {...props}>
      Telephone Directory
    </Tooltip>
  );
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <div className='as_container'>
      <Navbar />
      <Navbar2 />
      <div className='admittedstudents_page'>
        <Box
         sx={{
          position: 'width',
          height: 'auto',
          width: '100%',
          top: '15rem',
        }}
        >
          <Typography variant='h2' sx={{ position: "relative", width: '62rem', height: '3.25rem', left: '8rem',top: '4rem', fontFamily: "Plus Jakarta Sans", fontSize: '3.5rem'}}>
        Important Submissions
      </Typography>
            <Typography variant='h6' sx={{ position: "relative", width: '72rem', left: '8rem',top: '8rem', fontFamily: "Plus Jakarta Sans", }} >
              All the freshers are requested to check out the Sagittis sapien
              tempus arcu penatibus. Eu purus arcu ut ac non sagittis aliquet.
              Interdum sagittis, varius sit ut parturient eu et. In justo,
              scelerisque sagittis, lorem vitae ultrices viverra. Id enim
              accumsan, aliquet cras neque.
            </Typography>
            <Button variant="outlined"  size='large' sx={{ position: "relative",  left: '8rem',top: '11rem', fontFamily: "Plus Jakarta Sans", color: "black", fontSize: "1rem", border: '0.06rem solid blue',textTransform: "none", }} >
              Important Links
            </Button>
            <Tooltip title="Gallery">
              <Button size='large' sx={{ position:"relative",left:"75rem", top:'1rem', bgcolor: "#f7f1ff"}}><ImageIcon/></Button>
            </Tooltip>
            <Tooltip title="Calender">
              <Button size='large' sx={{ position:"relative",left:"71rem",top:'4rem', bgcolor: "#f7f1ff"}}><CalendarMonthIcon/></Button>
            </Tooltip>
            <Tooltip title="Maps">
              <Button size='large' sx={{ position:"relative",left:"67rem",top:'7rem', bgcolor: "#f7f1ff"}}><LocationOnIcon/></Button>
            </Tooltip>
            <Tooltip title="Contact Us">
              <Button size='large' sx={{ position:"relative",left:"63rem",top:'10rem', bgcolor: "#f7f1ff"}}><PhoneIcon/></Button>
            </Tooltip>
        </Box>
      <Box sx={{position: "relative", height: 'auto', width: '100%', top:'15rem', background: '#f7f1ff',paddingBottom:'3%'}}>
        
        <Typography variant='h2' sx={{ position: "relative", width: '62rem', height: '3.25rem', left: '8rem',top:'1rem', fontFamily: "Plus Jakarta Sans", fontSize: '3rem'}}>
          Announcements
        </Typography>
        <Typography variant='ul' sx={{top: "3rem"}}>
          {(() => {
                  if (!open) {
                    s1 = 4;
                  } else {
                    s1 = Object.keys(data).length;
                  }
                })()}

          {data.slice(0, s1).map((announc) => (
                <Typography variant='li'sx={{position: "relative", top:''}} key={announc.title}>
                  <Box sx={{position: "relative", height: '5rem', width: '80%', left:'8rem',  background: '#ffff', marginTop:'1.32rem', border: '0.06rem solid #d7dde1',  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.15)', borderRadius: '0.25rem',marginTop:'3%',marginBottom:'3%'}}  >
                    <Typography sx={{position: "relative", height: 'auto', width: '90%',top:'1rem', left:'1rem', fontFamily: "Plus Jakarta Sans", fontStyle: 'normal',fontWeight:'400',fontSsize: '1.3rem', lineHeight: '1.25rem',letterSpacing: '-0.02em',color: '#313a57',}} >
                      {announc.date}
                    </Typography>
                    <Typography sx={{position: "relative", height: 'auto', width: '90%',top:'1rem', left:'1rem', fontFamily: "Plus Jakarta Sans", fontStyle: 'normal',fontWeight:'400',fontSsize: '1.3rem', lineHeight: '1.25rem',letterSpacing: '-0.02em',color: '#313a57',}}>
                      {announc.title}
                    </Typography>
                 
                      <NavLink to="#" >
                      <ArrowForwardIosIcon sx={{ position: 'absolute', top: '1.5rem', left: '55rem'}}/>
                      </NavLink>
                  </Box>

                  
                </Typography>
              ))}
        </Typography>
        {(() => {
              if (!open) {
                return (
                  <Button
                    onClick={() => setOpen(!open)}
                    variant="outlined"  size='large' sx={{ position: "relative", left: '7.5rem', fontFamily: "Plus Jakarta Sans", color: "black", fontSize: "1rem",border: '0.06rem solid blue',textTransform: "none", }}
                  >View all
                  </Button>
                );
              } else {
                return (
                  <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    <Button variant="outlined"  size='large' sx={{ position: "relative",   left: '8rem', fontFamily: "Plus Jakarta Sans", color: "black", fontSize: "1rem",border: '0.06rem solid blue',textTransform: "none", }} >
                      View less</Button>
                  </Button>
                );
              }
            })()}
            
            
      </Box>

        <Typography variant='h2' sx={{ position: "relative", width: '62rem', height: '3.25rem', left: '8rem',top: '20rem', fontFamily: "Plus Jakarta Sans", fontSize: '3.5rem'}}>
        Freshers' Guide Magazine
        </Typography>
            <Typography variant='h6' sx={{ position: "relative", width: '45rem', left: '8rem',top: '24rem', fontFamily: "Plus Jakarta Sans", }} >
            Morbi viverra in tincidunt rhoncus, cras nisl viverra commodo etiam. Semper vulputate interdum tellus purus egestas arcu. Mi arcu etiam lorem tincidunt odio facilisi. Turpis leo non curabitur enim. In dui, scelerisque ullamcorper aenean justo feugiat suscipit ridiculus semper. Sagittis sapien tempus arcu penatibus. Eu purus arcu ut ac non sagittis aliquet. Interdum sagittis, varius sit ut parturient eu et. In justo, scelerisque sagittis, lorem vitae ultrices viverra.
             Id enim accumsan, aliquet cras neque. Nulla ut integer malesuada luctus interdum amet, ut lorem sagittis. Phasellus nisi magnis elementum lacus consectetur.
             
            </Typography>
            <Typography sx={{position:'relative',top:'2rem', left:'60rem' }}>
            {/* sx={{height: '30rem', width: '30rem',bgcolor:'blue', */}
            <Box >
             </Box>
            </Typography>
          


      <Box sx={{position: "relative", height: 'auto', width: '100%', top:'27rem', background: '#f7f1ff'}}>
      <Grid container spacing={2} >
        <Grid container item xs={6} direction="column" >
        <Typography variant='h2' sx={{ position: "relative", width: '62rem', height: '3.25rem', left: '8rem',top: '2rem', fontFamily: "Plus Jakarta Sans", fontSize: '3.5rem'}}>
          SAATHI
          <Typography sx={{fontSize: '1.5rem'}}>Counselling Service by IIT Guwahati</Typography>
        </Typography>
              <Typography variant='h6' sx={{ position: "relative", width: '45rem', left: '8rem',top: '6rem', fontFamily: "Plus Jakarta Sans", }} >
              Morbi viverra in tincidunt rhoncus, cras nisl viverra commodo etiam. Semper vulputate interdum tellus purus egestas arcu. Mi arcu etiam lorem tincidunt odio facilisi. Turpis leo non curabitur enim. 
              In dui, scelerisque ullamcorper aenean justo feugiat suscipit ridiculus semper. Sagittis sapien tempus arcu penatibus. 
              Eu purus arcu ut ac non sagittis aliquet. Interdum sagittis, varius sit ut parturient eu et. In justo, scelerisque sagittis, lorem vitae ultrices viverra. 
              Id enim accumsan, aliquet cras neque. Nulla ut integer malesuada luctus interdum amet, ut lorem sagittis. Phasellus nisi magnis elementum lacus consectetur.
              </Typography>
        </Grid>
        <Grid container item xs={6} direction="column" >
                    <Box sx={{position: "relative", height: '5rem', width: '40%', left:'57rem',  background: '#ffff', marginTop:'1.32rem', border: '0.06rem solid #d7dde1',  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.15)', borderRadius: '0.25rem',}}  >
                      <Typography sx={{position: "relative", height: 'auto', width: '90%',top:'1.5rem', left:'1rem', fontFamily: "Plus Jakarta Sans", fontStyle: 'normal',fontWeight:'400',fontSize: '1.5rem', lineHeight: '1.25rem',letterSpacing: '-0.02em',color: '#313a57',}} >
                        < ArticleIcon sx={{width: '5rem', color:'blue',}}/>
                        About Us
                        <NavLink to="#" >
                        <ArrowForwardIosIcon sx={{ position: 'absolute', left: '35rem'}}/>
                        </NavLink>
                      </Typography>   
                    </Box>   
                    <Box sx={{position: "relative", height: '5rem', width: '40%', left:'57rem',  background: '#ffff', marginTop:'1.32rem', border: '0.06rem solid #d7dde1',  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.15)', borderRadius: '0.25rem',}}  >
                      <Typography sx={{position: "relative", height: 'auto', width: '90%',top:'1.5rem', left:'1rem', fontFamily: "Plus Jakarta Sans", fontStyle: 'normal',fontWeight:'400',fontSize: '1.5rem', lineHeight: '1.25rem',letterSpacing: '-0.02em',color: '#313a57',}} >
                        <CalendarTodayIcon sx={{width: '5rem',color:'blue',}}/>
                        Counsellor's Timing
                        <NavLink to="#" >
                        <ArrowForwardIosIcon sx={{ position: 'absolute', left: '35rem'}}/>
                        </NavLink>
                      </Typography>   
                    </Box>   
                    <Box sx={{position: "relative", height: '5rem', width: '40%', left:'57rem',  background: '#ffff', marginTop:'1.32rem', border: '0.06rem solid #d7dde1',  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.15)', borderRadius: '0.25rem',}}  >
                      <Typography sx={{position: "relative", height: 'auto', width: '90%',top:'1.5rem', left:'1rem', fontFamily: "Plus Jakarta Sans", fontStyle: 'normal',fontWeight:'400',fontSize: '1.5rem', lineHeight: '1.25rem',letterSpacing: '-0.02em',color: '#313a57',}} >
                        <PersonAddAlt1Icon sx={{width: '5rem',color:'blue',}}/>
                        Student Mentorship
                        <NavLink to="#" >
                        <ArrowForwardIosIcon sx={{ position: 'absolute', left: '35rem'}}/>
                        </NavLink>
                      </Typography>   
                    </Box>   
                    <Box sx={{position: "relative", height: '5rem', width: '40%', left:'57rem',  background: '#ffff', marginTop:'1.32rem', border: '0.06rem solid #d7dde1',  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.15)', borderRadius: '0.25rem',}}  >
                      <Typography sx={{position: "relative", height: 'auto', width: '90%',top:'1.5rem', left:'1rem', fontFamily: "Plus Jakarta Sans", fontStyle: 'normal',fontWeight:'400',fontSize: '1.5rem', lineHeight: '1.25rem',letterSpacing: '-0.02em',color: '#313a57',}} >
                        <PeopleAltIcon sx={{width: '5rem',color:'blue',}}/>
                        Team
                        <NavLink to="#" >
                        <ArrowForwardIosIcon sx={{ position: 'absolute', left: '35rem'}}/>
                        </NavLink>
                      </Typography>   
                    </Box>   
                    <Box sx={{position: "relative", height: '5rem', width: '40%', left:'57rem',  background: '#ffff', marginTop:'1.32rem', border: '0.06rem solid #d7dde1',  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.15)', borderRadius: '0.25rem',}}  >
                      <Typography sx={{position: "relative", height: 'auto', width: '90%',top:'1.5rem', left:'1rem', fontFamily: "Plus Jakarta Sans", fontStyle: 'normal',fontWeight:'400',fontSize: '1.5rem', lineHeight: '1.25rem',letterSpacing: '-0.02em',color: '#313a57',}} >
                        <GppGoodIcon sx={{width: '5rem',color:'blue',}}/>
                        Anonymous Emotional Support System
                        <NavLink to="#" >
                        <ArrowForwardIosIcon sx={{ position: 'absolute', left: '35rem'}}/>
                        </NavLink>
                      </Typography>   
                    </Box>   
        </Grid>
      </Grid>    
        </Box>
      </div>
      <StickyFooter />
    </div>
  );
}
