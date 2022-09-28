import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Template from './Template';
import ResponsiveDrawer from './SideNav';


const EventsRoutes = () => {
  return (
    <div style={{ display: 'flex' }}>
      <ResponsiveDrawer />

      <div
        style={{
          width: '100%',
          position: 'relative',
          top: '80px',
          display: 'flex',
          justifyContent: 'left',
        }}
      >
        <Routes>
          <Route
            path='/Alcheringa'
            element={
              <Template
                title='Alcheringa'
                description='Alcheringa, popularly known as "Alcher", is the annual cultural festival of Indian Institute of Technology, Guwahati. Started in 1996, Alcheringa has quickly established itself as one of the biggest college level cultural events in Asia. It’s a 4 day cultural extravaganza and have witnessed a crowd of over 80,000, and was graced by artists like, Mohit Chauhan, Mika Singh,Anoushka Shankar, Sonu Nigam, Shankar-Ehsaan-Loy, Shilpa Rao, KK, Javed Ali, Shaan and international artists such as Orphaned Land, World’s Fastest Quad Guitarist Michael Angelo Batio, Korpikklani, Metastatis, Ne Obliviscaris, Guilliano Modarelli and many more. Alcheringa with over 400 participating colleges organises over 70 events, Houte Coutre, Mr. & Miss Alcher, Rock-o-Phonix: India’s biggest rock band competitions, Raga High, Electric Heels, Halla Bol and many more to provide a platform for talent and make them acknowledged and also have impressive winning prizes.
                Alcheringa is the a dreamtime, and is long awaited by students of IITG as well as crowd of north-east India.'
                
              />
            }
          />
          <Route
            path='/Advaya'
            element={
              <Template
                title='Advaya'
                description='Advaya is an annual PG inter-departmental techno-cultural festival of IIT Guwahati. It is an avenue for students to be comforted from their conventional lives to embrace the fun and frolic embodied with captivating performances of the artists hidden inside them.
                Commenced in 2010 as a PG Fest, Advaya (which stands for non-dualism) earned its official name in the year 2012 and was taken to a new level by the organizers of 2013.Now, it has turned into an ever-growing fiesta currently in its 7th edition. Advaya is all set to spread magical revolution with new additions such as Sanidhya - A cultural evening especially for Faculties, Married Scholars and their families, Sports and various informal events.'
                
              />
            }
          />
          <Route
            path='/Techniche'
            element={
              <Template
                title='Techniche'
                description='Techniche is the annual Techno-Management festival of the Indian Institute of Technology Guwahati, India. Started in 1999, through its past seventeen editions, it has been witnessing a new zenith of techno-management events ranging from raging robotics to corporate module to inspiring lecture series to awe striking workshops to jubilant nites. It served as a distinguished platform for entrepreneurs, innovators and technocrats to showcase their abilities as every edition sought to take a leap forward in redefining and revolutionizing the technology.Techniche is generally held in the first weekend of September and lasts for three days and four nights. It comprises numerous diversified competitions, Technothlon: India’s largest student organized examination, lectures, interactive talks, exhibitions, workshops and exuberant nights as well as various social Initiatives.'
              />
            }
          />
          <Route
            path='/Reflux'
            element={
              <Template
                title='Reflux'
                description='Reflux, the annual Chemical Engineering Symposium of IIT Guwahati, is organized in the last week of March every year. It has been a pioneer in chemical industrial and entrepreneurial scene of the country.
                The aim of Reflux is to provide an opportunity for budding Chemical Engineers to share scientific expertise and knowledge towards the development of new methods and strategies in different fields of Chemical Engineering. The event is planned to be highly interactive and an excellent learning experience for all the delegates.
                It organizes lectures, workshops, and a wide range of events, exhibitions, and competitions to be held during these three days along with research paper presentations. Over the years, Reflux has proved itself as a genuine platform to interact with the youth and engage them.'
                
              />
            }
          />
          <Route
            path='/Udgam'
            element={
              <Template
                title='Udgam'
                description='Udgam, the IIT Guwahati Entrepreneurship Summit was conceptualized for a single purpose: to inspire people to know what it is like to pursue your dreams as an Entrepreneur, from people who know this perfectly well, and who want everyone else to do the same. This has been the aim for every edition of Udgam and we hope to continue moving towards this goal as relentlessly as possible. From giving you a chance to meet and interact with people who subscribe to our view of going ahead with what you are passionate about, and helping you shed your apprehensions and giving you a first-hand experience of how you should do so through our workshops, Udgam has something for every aspiring entrepreneur.
                Having events like Business Quiz, Virtual Stock Market and various online events to inspire and encourage the budding Entrepreneur in participants.'
            
              />
            }
          />
          
          
        </Routes>
      </div>
    </div>
  );
};

export default AcademicsRoutes;
