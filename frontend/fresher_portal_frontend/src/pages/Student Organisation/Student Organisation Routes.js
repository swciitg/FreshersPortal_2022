import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResponsiveDrawer from './SideNav';
import CulturalBoard from './CulturalBoard';
import HostelAffairBoard from './HostelAffairBoard';
import StudentGymkhanaCouncil from './StudentGymkhanaCouncil';
import TechnicalBoard from './technical_board';
import StuOrgTemplate from './StuOrgTemplate';
const url = ['anchorenza','cadance','finesse','debsoc','xpressions','lumiere','montage','litsoc','octaves']
const StudentOrganisationRoutes = () => {
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
            element={<CulturalBoard/>}
          />
          <Route
            path='/technicalboard'
            element={<TechnicalBoard/>}
          />
          {['Anchorenza & RadioG','Cadance','Finesse','Deb-Soc','Xpressions','Lumiere','Montage','Lit-Soc','Octaves'].map((club,index) => {
            return (
              <Route
              path={`/${url[index]}`}
              element={<StuOrgTemplate
              title={club}
              description='The Consulting and Analytics Club, IIT Guwahati is a student body aimed at helping students explore the world of management consulting and data analytics. This club serve as a unifying body that connects all students interested in data crunching to acquire necessary statistical and computational skills to draw meaningful conclusions from data. Club provide opportunities for students to pursue their interest in analytics through projects, workshops, lectures by prominent personalities from the industry and weekly sessions and meetings.'
              />
              }
              />
            )
          })}
          <Route
            path='/hab'
            element={<HostelAffairBoard
            habdesc="So now we come to the Hostel Affairs Board. Hostels as quoted by the alumnus are “home away from home” for the students. When you join you will be allotted a single occupancy room in one of the hostels. Hostels at IIT Guwahati are named on the tributaries of river Brahmaputra. Residential environment of the hostel provides a conducive environment for all round development of the students. Living with hundreds of other boarders, hostel atmosphere fosters community feeling, healthy competitive spirit and cohesive cultural growth among the boarders.
            The body looking after the well-being of these hostels is the Hostel Affairs Board (HAB).
            The structure of HAB is:
            Chairman, HAB and Wardens of all hostels, General Secretary, HAB; Joint Secretary, HAB and General Secretaries of all the hostels."
            hmcdesc="Going deep into the structure, we have Hostel Management Committee (HMCs) for each hostel. HMC comprises of 1 Warden and 2 Associate Wardens as faculty member. Student members in HMC are General Secretary (usually third yearites), Convener for the Mess Management Committee, Technical Secretary, Sports Secretary, Welfare Secretary, Cultural Secretary, Literary Secretary and Maintenance Secretary."/>}
          />
          <Route
            path='/sgc'
            element={<StudentGymkhanaCouncil
            sgcdesc="A powerful and apolitical organization that acts as a connecting bridge between the administration and the student community.
            The gymkhana is a democratic student body, which consists of elected student representatives working for the overall personality development and smooth living of the students. It promotes the objectives of fostering extra-curricular and co-curricular activities, welfare of students and their stay on the campus.
            It also organizes various workshops, events and seminars round the year, that enable to supplement and complement the curricular or main syllabi activities.
            It comprises of five Boards viz. Students’ Welfare Board, Cultural Board, Sports Board, Technical Board and Hostels’ Affairs Board. Over the subsequent pages, we will introduce you to the current student gymkhana council and familiarize you with the activities of each of the individual boards under the council."
            ssdesc="At IIT Guwahati, this structure of Students' Senate was implemented for the first time in 2014-15. The whole idea behind the implementation of this system is to have a student body which would look into the issues within campus and all those pertaining directly to the student community. In other words, students' senate represent each student in the campus.

            What is the structure of Students' Senate?
            Students' Senate consists of 23 elected student representatives:
            
            Executive Panel
            -Vice President, Students' Gymkhana Council
            -General Secretary, Students' Welfare Board
            -General Secretary, Sports Board
            -General Secretary, Cultural Board
            -General Secretary, Technical Board
            -General Secretary, Hostel Affairs Board
            
            Legislative Panel
            -7 UG (Undergraduate) Senators
            -7 PG (Postgraduate) Senators
            -3 Girl Senators
            
            How does Students' Senate function?
            Students' Senate acts as a bridge between the student community and the administration. Senate meets once every month where discussion are done and decisions are made upon the proposal drafted by the senators on the issues put forward by the student community through the form circulated online before the meeting.
            Depending upon the type of the proposal, they are drafted and submitted to the concerned department or are put forward in SAC(Students Affairs Council) by the Vice President, who is the chairman of students' senate and joint secretary at the SAC meeting.
            
            How easy it is to put forward your point in the agenda for the meeting?
            You can put agenda in the google form that is circulated each month. To give a detailed information of your proposal, you can call up a senator, sit with him so that he can put forward your point in the meeting which goes into action on approval by the Studnets' Senate. Senators will be happy to help you always. Just give them a call in case of help."/>}
          />
          <Route
            path='/sail/'
            component={() => {
              window.location.href = 'https://iitg.ac.in/sail/';
              return null;
            }}
          />
          <Route
            path="/sab/"
            component={() => {
              window.location.href = 'https://www.iitg.ac.in/acad/';
              return null;
            }}
          />
          {['Aeromodelling Club','Astronomy Club','Coding Club','Consultancy and Analytics Club','Electronics Club','Entreprenuership Cell','Finance & Economics Club','Green Automobile Club','Robotics Club','Science and Quiz Club ( ACUMEN )','TechEvince'].map((club) => {
            return (
              <Route
              path={`/${String(club).split(' ')[0].toLowerCase()}`}
              element={<StuOrgTemplate
              title={club}
              description='The Consulting and Analytics Club, IIT Guwahati is a student body aimed at helping students explore the world of management consulting and data analytics. This club serve as a unifying body that connects all students interested in data crunching to acquire necessary statistical and computational skills to draw meaningful conclusions from data. Club provide opportunities for students to pursue their interest in analytics through projects, workshops, lectures by prominent personalities from the industry and weekly sessions and meetings.'
              />
              }
              />
            )
          })}
          <Route
          path='/studentswelfare'
          element={<StuOrgTemplate
          title='Students Welfare Board'
          description="The Students' Welfare Board broadly addresses the overall well being of the students of the institute. Its scope of activities includes among various welfare activities such as faculty-student interactions, senior-junior interactions, organizing yoga and meditation camps, serving the society through Social Service Club, group discussions, coffee house sessions, counselling services to students and a lot of other activities which are aimed at keeping the mind, body and soul of the IITians sound.
          Well, what do they have for you? Here at IITG, the Students� Welfare Board is committed to ensure that you have no issues adapting to the new home you are about to live in. They will give you a warm welcome by organizing the Fresher's Week, which will have events aiming at helping you in adapting to your new home. Another major question which you all might be having is about Ragging. Well friends, we assure you all that there is no such thing in the campus and you are about to enter a friendly environment and home away from home. Do contact us at any time regarding any problem that you might be facing during your stay in the campus."
          />}
          />
          {['Saathi - The Counselling Service','Social Service Club','Youth Empowerment Club','Rights and Responsibility Club','Red Ribbon Club'].map((club) => {
            return (
              <Route
              path={`/${String(club).split(' ')[0].toLowerCase()}`}
              element={<StuOrgTemplate
              title={club}
              description='The Youth Empowerment Club engages youth in positive activities during the hours that they are most likely to be involved in the negative lures of their communities. 
              The program of the club is designed to help students build self-esteem, enhance communication, manage anger and violent expression, enhance decision making skills, become independent thinkers and create positive relationships with others. 
              Our programs promote safety by empowering youth to make positive choices about their education, recreational activities and personal actions. 
              Mission of Club is to empower young people through development and implementation of different programs so that they actively participate in the life of the campus and to support them in solving of their problems and needs, and in that way to contribute the development of quality of youth and community life.'
              />
              }
              />
            )
          })}
        </Routes>
      </div>
    </div>
    )
}

export default StudentOrganisationRoutes;