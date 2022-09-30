import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Facilities.css';

const descs = [
  'Guest House of IIT Guwahati is a piece of art and is used to accommodate invitees, important personalities and guardians of students of the institute. It contains 60 rooms, and with new guesthouse on the verge of completion to increase the number of rooms available for guests to over 217. Guest House offers rooms with modern facilities, mesmerizing landscape, Internet access and excellent dining that will turn anyone starving.',
  'Named after much renowned literary figure Sahityarathi Lakshminath Bezbaroa, the lakshinath Bezbaroa central library provides a glimpse to the present, past and the future world. Consisting of four floors,7500 sq. meter each, our library is a home to 1,54,564 printed volumes and 2291 subscribed current journals. Being a major central service point, it provides necessary supports for teaching, learning, research activities of the Institute by creating state-of-the-art facilities and offering innovative services to the academic community.',
  'A cold and cough? Or a bruise? Or maybe something more which cannot be cured with home remedies?! The campus has a hospital with three medical officers. It has three Visiting Consultants for ENT, Psychiatric and Paediatric consultation. Besides it has three Medical Consultants in OPD. IITG hospital has an Emergency Room, Minor OT room, ECG Room, 10 numbers of Patient Cabin, 02 numbers ofIsolation Cabin and 02 numbers of General Ward. Hospital has 24 hrs Doctor, Nursing and Pharmacy service for its patients provided by outsourced hospital service provider.',
  'The CC is the high speed backbone of all the LAN connections across the campus. Also built in 7500 sq.meter of area,The Computer & Communication Centre is solely responsible for keeping the Electronic Communication & Computation related facilities available to each and every member of IIT Guwahati. These facilities are available for 17 hours a day i.e. from 8 a.m to 12 a.m. Special care is taken to upgrade the facilities to meet the rising standards of IT.Also , it provides maintenance to the PCs of faculty and staff members.',
  'Market Complex on main gate houses grocery stores, medical store, general store, restaurant, hair salon, beauty parlour, Computer repair shop. Pretty much everything to cater the basic needs of campus residents. Campus also has a marketplace on Faculty Gate, having restaurant and shops serving delicious local food and also housing various services such as cycle repair, Courier, Hair Salon etc.',
  'The campus houses various renowned restaurant franchises like Baskin and Robbins and Subway in Food Court adjoining the New SAC building. Local food chains like Florentine Restaurant,Manikanta and Ambrosia Bakery have their outlets in the Food court as well. The campus hosts a Cafe Coffee Day outlet, situated outside the institute library where every item is subsidized to half its original price. There are two restaurants in the Market Complex as well, namely Silverdine and Soiree. Along with these food joints, campus houses Vinaigrette canteen and there is a small market set up on faculty gate having various local shops for an occasional change of taste.',
  'Need money for those books? or sports equipment? or just to give a treat? Banks and ATMs are not far away. The Institute houses three major banks. Canara Bank (IFSC: CNRB0008652, MICR Code: 781015008) and SBI Bank (IFSC: SBIN0014262, MICR Code: 781002053) along with their ATMs, located near academic complex. ICICI Bank (IFSC: ICIC0003325) and it’s ATM is located in market complex. Student Activity Centre for ease of students also houses an ATM, as it is close to student residential area.',
  'If you have to reach the beautiful picturesque campus on the other side of the mighty Brahmaputra or want to visit a major riverine port city with immensive culture, The City of temples: Guwahati, you just have to take a bus from around the corner. There is bus facility to and from the campus and city every hour. So just hop on a bus and switch worlds at your convenience.Campus also operates an active bus facility within campus, picking up students from hostels. Timing are systematically adjusted so that you can attend class of any slot and come back again after classes are over. And the best thing is, Bus facility is free of cost for students.',
  'Have luggage to carry somewhere in campus?, Late for class?, Have to go to food court, CCD, or restaurants in campus? Or just too lazy, or tired to walk? For the ease of students, Campus provides an active E-rickshaw service, just place your call and get a E-rickshaw at your doorstep. E-rickshaws charges a minor fee of Rs. 10. Timing of E-Rikshaw is 8 AM to 8 PM',
];

const MediaCard = (props) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`http://127.0.0.1:8000/api/base/facilities`)
      .then((response) => {
        console.log(response.data);
        setInfo(response.data);
      })
      .catch((error) => console.log('error', error));
  };
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardMedia
        component='img'
        alt='green iguana'
        height='300'
        width='375px'
        margin='10px'
        image={`/assets/images/${String(props.title)
          .split(' ')[0]
          .toLowerCase()}.jpg`}
      />
      <CardContent>
        <div className='cardheader'>{props.title}</div>
        <div className='typo'>{descs[props.id]}</div>
      </CardContent>
    </Card>
  );
};
export default MediaCard;
