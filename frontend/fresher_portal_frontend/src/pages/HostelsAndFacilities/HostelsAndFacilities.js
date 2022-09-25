import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResponsiveDrawer from './SideNav';
import Facilities from './Facilities';
import Hostel from './Hostel';
import Barak from './barak';
import Brahmaputra from './brahmaputra';
import Dhansiri from './dhansiri';
import Dibang from './dibang';
import Dihing from './dihing';
import Disang from './disang';
import Kameng from './kameng';
import Kapili from './kapili';
import Manas from './manas';
import Lohit from './lohit';
import Siang from './siang';
import Subansiri from './subansiri';
import Umiam from './umiam';

const HostelsAndFacilitiesRoutes = () => {
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
            path='/'
            element={<Hostel/>}
          />
          <Route
            path='/barak'
            element={
              <Barak 
              description="Barak is the 7th hostel in the IITG fraternity and derives its name from the River Barak which is a major river in north-eastern India and is a part of the Surma-Meghna River System. It was previously only for M.Tech and PhD. Students but from 2011 onwards the hostel also has boarders of B.Tech."
              warden="ABC"/>
            }
          />
          <Route
            path='/bramhaputra'
            element={
              <Brahmaputra
                description='Housing nearly thousand students, the hostel to its might is named aptly as Brahmaputra. The hostel began to function from academic year 2011-2012.
                It is boys hostel and boarders in the hostel are from various streams mainly pursuing their Ph.D, M.Tech, M.Sc, B.Tech.It is a three floored building with spacious rooms and all other facilities incorporated. The hostel is a centre for various activities. Hostel Brahmaputra is the highest accommodating hostel in the history of IIT Guwahati.
                Constructed in peaceful and playful environment, it imparts enthusiasm and endeavour in the students. The hostel is always filled with enormously talented students who are always eager for innovation.The boarders in the hostel cultivate the feeling of oneness standing unite and as fierce as The Brahmaputra River.'
                warden="ABC"
              />
            }
          />
          <Route
            path='/dhansiri'
            element={
              <Dhansiri
                description="Inaugurated in 2014, Dhansiri is the second girls' hostel in the campus.In the picturesque view of IIT-G campus, Dhansiri Hostel stands out, a white beauty confident and elegant reflecting the spirit of the boarders in herself. The hostel is the new addition to the IIT-G family and houses a total 230 research scholars, UGs and PGs. The hostel stands out in its twin sharing facility which defines it as more of 'home away from home. Like every other hostel of IIT Guwahati, it has all the necessary requirements in place for its boarders. Canteen, juice centre, TV room, library and a fully equipped sports room and cultural room."
                warden="ABC"
              />
            }
          />
          <Route
            path='/dibang'
            element={
              <Dibang
                description="Hostel Dibang came into being in July 2010 as the eighth boys' hostel of IIT Guwahati. The name Dibang follows the tradition of naming hostels of IIT Guwahati after benevolent rivers and valleys of Northeast India. Being the home of most of the MTech, MDes, MA, PhD and Project Staff of various departments and centres of the Institute, Dibang is reputed for its comparatively peaceful environment. A splendid green hill adds elegance to the natural beauty of this uniquely (deep green) coloured building, especially in summer sunsets."
                warden="ABC"
              />
            }
          />
          <Route
            path='/dihing'
            element={
              <Dihing
                description="Named after a tributary of the Brahmaputra, Dihing Hostel is situated just beside the newly built Brhahmaputra Hostel. This 300 seater boys' hostel was established during 2000. Since then, it is not just a home away from home, but a social melting pot for young energetic minds. Complete with facilities like reading room, music room and sports utilities, Dihing provides the boarders an environment to relax and unwind. With its own version of Football Premier League and social events like D-Man Hunt, Dihing makes sure that every student develops strong ties with other members of the hostel and enjoys every moment of stay."
                warden="ABC"
              />
            }
          />
          <Route
            path='/disang'
            element={
              <Disang
                description="This is a newly constructed Boys' Hostel (14th Hostel of the institute) Named after a tributary of the Disang, Disang Hostel is situated just behind the Dihang Hostel. It Started functioning in the month of July 2019."
                warden="ABC"
              />
            }
          />
          <Route
            path='/kameng'
            element={
              <Kameng
                description="Kameng Hostel is named after the tributary Kameng of the mighty river Bramhaputra. Kameng has 504 rooms distributed over five blocks(B1,B2,B3,B4 and C1).The B blocks have 30 rooms on each floor while the C1 block has eight rooms on each floor. Kameng has excellent canteens so you never run out of food,snacks,cold drinks,ice-creams and of course tea and coffee(the Key components in an IITians diet)which incidentally is open till 3AM.The dining here is said to be the best on the entire campus. Kameng also has a juice center in the mess which serves friut juice,milk shakes and fruit salads.There is also a stationary shop inside the hostel where you can get all your daily needs. Our common room doubles up as a T.V room where it gets hot during Indian and English Premier Leagues. Kameng has a sports room where the Kamengites can avail all the sport facilites like issuing sporting goods,playing table tennis,carrom,chess and other board games."
                warden="ABC"
              />
            }
          />
          <Route
            path='/kapili'
            element={
              <Kapili
                description="Mostly undergraduate students reside in this 300 capacity hostel. The hostel has a reading room, table tennis room, television room and music room to ensure a pleasant stay to all the boarders. In addition, the hostel has a juice centre, canteen and stationery shop to cater the need of the students. Further, the hostel has basic items for various sports namely cricket, football, volleyball, basketball etc."
                warden="ABC"
              />
            }
          />
          <Route
            path='/manas'
            element={
              <Manas
                description="Manas, is the first hostel of IIT Guwahati and has been the home for some of India's best for the last 15 years. This hostel was previously a co-ed hostel; however it is currently a boys only hostel. Over the years the institute and its students have taken great care to develop Manas into a top notch hostel. It is also the only hostel which has a community hall. The hostel is equipped with facilities to ensure a happy stay for all it boarders. Among several facilities, Manas has a canteen, a juice centre, recreational room, a volley ball court, a TV room, a guest room, a library and a music room, to cater to the needs of its 300 odd boarders."
                warden="ABC"
              />
            }
          />
          <Route
            path='/lohit'
            element={
              <Lohit
                description="Inaugurated in 2014, lohit is the 10th boys' hostel in the campus. This hostel houses UGs and PGs. The hostel has a reading room, table tennis room, television room and music room to ensure a pleasant stay to all the boarders. In addition, the hostel has a juice centre, canteen and stationery shop to cater the need of the students."
                warden="ABC"
              />
            }
          />
          <Route
            path='/siang'
            element={
              <Siang
                description="Siang hostel came into being on July 2003 as the fourth boys' hostel of IIT Guwahati. The name Siang follows the same revered tradition of naming hostels of IIT Guwahati after benevolent rivers of north-east India. All the residents of hostel are undergraduates. A splendid green hill and a lake with playing birds adds elegance to the natural beauty of this hostel, especially in summer sunsets. Hostel is equipped with table tennis, pool table, and also provide sport facilities like issuing sporting goods, playing table tennis, carrom,chess and other board games."
                warden="ABC"
              />
            }
          />
          <Route
            path='/subansiri'
            element={
              <Subansiri
                description="Inaugurated in 2003, Subansiri is the first girls' hostel. Named after the largest tributary of the Brahmaputra, this hostel houses research scholars, UGs and PGs. Over the last couple of years, it has grown to accommodate 503 students. Like every other hostel of IIT Guwahati, Subansiri has all the necessary requirements in place for its boarders. Canteen, juice centre, TV room, library, and well, after a hard day's in the academic complex, badminton court and TT tables to get you rejuvenated. With hostel day, freshers' party, farewell and the world cups, life in hostel just can't get better."
                warden="ABC"
              />
            }
          />
          <Route
            path='/umiam'
            element={
              <Umiam
                description="Inaugurated in 2008, Umiam hostel was the 8th hostel in IITG. The origin of the name came from the river Umiam originating from Meghalaya. Umiam, having the unique distinction of having a composite culture accommodating UG, PG and Research Scholars all under one roof, boasts of high quality infrastructure and services. At present Umiam consists of around 430 students eager to make their presence felt in the eventful life at IITG."
                warden="ABC"
              />
            }
          />
          <Route
            path='/facilities'
            element={
              <Facilities/>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default HostelsAndFacilitiesRoutes;
