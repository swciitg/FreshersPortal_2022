import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResponsiveDrawer from './SideNav';
import AcadTemplates from './AcadTemplates';
import BranchChange from './BranchChange';
import Minor from './Minor';


const AcademicsRoutes = () => {
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
            path='/bsbe'
            element={
              <AcadTemplates
              title='Biosciences & Bioengineering'
              image = 'bsbe'
              description='The Department of Biosciences and Bioengineering at the Indian Institute of Technology Guwahati (IITG) was established in November 2002 to contribute the fascinating and emerging area of biological sciences. The Department is unique in North-Eastern India, imparting quality education and providing an excellent research environment through its programme. The department has developed extensive research facility and infrastructure to support the ongoing teaching and research initiatives. As a result, in past few years several faculty members and research scholars have been honored by leading organizations specializing in their respective fields.
              In past department has organized national level conferences in very diverse field like Cell and Molecular Biology, Biological Networks, Plant Genomics, Nanotechnology, Bioinformatics, Drug Discovery etc.
              The department is having a very active student body called genesis which organizes various activities throughout the academic year like symposium, talks on latest development in industry by the notable professionals etc.'
              />
            }
          />
          <Route
            path='/cl'
            element={
              <AcadTemplates
              title='Chemical Engineering'
              image = 'cl'
              description='The Department of Biosciences and Bioengineering at the Indian Institute of Technology Guwahati (IITG) was established in November 2002 to contribute the fascinating and emerging area of biological sciences. The Department is unique in North-Eastern India, imparting quality education and providing an excellent research environment through its programme. The department has developed extensive research facility and infrastructure to support the ongoing teaching and research initiatives. As a result, in past few years several faculty members and research scholars have been honored by leading organizations specializing in their respective fields.
              In past department has organized national level conferences in very diverse field like Cell and Molecular Biology, Biological Networks, Plant Genomics, Nanotechnology, Bioinformatics, Drug Discovery etc.
              The department is having a very active student body called genesis which organizes various activities throughout the academic year like symposium, talks on latest development in industry by the notable professionals etc.'
              />
            }
          />
          <Route
            path='/cst'
            element={
              <AcadTemplates
                title='Chemical Science and Technology'
                image = 'cst'
                description='Department of Chemistry, is one of the globally recognized, emerging and leading department in science and technology with a growing list of accolades earned nationally and internationally. The Department started in 1995, covers all the major areas of Chemistry.
                The UG programme prepares the students for the emerging need of qualified persons with adequate knowledge in both Chemistry and its technology related issues, in both academics and industry. It also provides students practical training in basic science and engineering.During the course, the students will be trained to do frontline research in interdisciplinary areas, which include materials science, environmental science and molecular biology.
                CheSTA (Chemical Science and Technology Association) is an organization of students of B.Tech Chemical Science and Technology, established to look after various departmental activities of chemistry department and providing a forum of interaction among all the people of the department. Not only the students but the faculty also a form a important part of it to guide the students which is one of the primary cause of CheSTA being an active organization since its establishment. The students also find a common platform to communicate and discuss on common and individual problems encountered in academics etc.'
              />
            }
          />
          <Route
            path='/civil'
            element={
              <AcadTemplates
              title='Civil Engineering'
              image = 'civil'
              description='The Department of Biosciences and Bioengineering at the Indian Institute of Technology Guwahati (IITG) was established in November 2002 to contribute the fascinating and emerging area of biological sciences. The Department is unique in North-Eastern India, imparting quality education and providing an excellent research environment through its programme. The department has developed extensive research facility and infrastructure to support the ongoing teaching and research initiatives. As a result, in past few years several faculty members and research scholars have been honored by leading organizations specializing in their respective fields.
              In past department has organized national level conferences in very diverse field like Cell and Molecular Biology, Biological Networks, Plant Genomics, Nanotechnology, Bioinformatics, Drug Discovery etc.
              The department is having a very active student body called genesis which organizes various activities throughout the academic year like symposium, talks on latest development in industry by the notable professionals etc.'
              />
            }
          />
          <Route
            path='/cse'
            element={
              <AcadTemplates
                title='Computer Science and Engineering'
                image='cse'
                description='Lobortis sem adipiscing etiam condimentum pellentesque diam. Adipiscing bibendum enim egestas etiam dapibus. Morbi condimentum netus neque neque vulputate vel. Aenean sed eget dui elementum. Sit velit faucibus donec duis feugiat. Malesuada volutpat auctor tellus, morbi. Mi erat massa amet id phasellus faucibus augue leo commodo. Aliquam lacinia placerat ipsum, sollicitudin et, ultricies. Eget platea vitae enim, tristique velit eleifend. Eget vitae magna amet scelerisque. Ac egestas molestie massa ultricies. Sociis turpis nisl adipiscing massa turpis tincidunt.'
              />
            }
          />
          <Route
            path='/design'
            element={
              <AcadTemplates
                title='Department of Design'
                image='design'
                description='The Department of Design (DoD), was set up with a vision to enkindle some of the brightest technical minds of the country a passion for innovation in technology driven by a firm understanding, appreciation and celebration of design.
                The focus of the program is on the study, invention, and creative use of technologies to create effective, usable, enjoyable experiences with technology through interdisciplinary research in engineering, design, behavioral and social sciences, and to understand the impact of technology on individuals, groups, and organizations.
                Due to the multidisciplinary nature of the program, there are hardly any domains in the Industry to which the students at the Department of Design havent been exposed to. This is evident from the diverse job profiles held by the Alumni of DoD over the past years covering a whole spectrum of specializations.
                The department has conducted various workshops and taken other initiatives to address the requirements of industry, notable among them being Rich Interactive Narrative (RIN) workshop by Microsoft Research, Toolbox, Video Workshop, Robotics, Space Design etc.'
              />
            }
          />
          <Route
            path='/eee'
            element={
              <AcadTemplates
                title='Electronics and Electrical Engineering'
                image='eee'
                description='Since its inception in 1995, the department now has over 700 students and 38 faculty members, supported by 17 laboratories. Besides the core courses, the faculties also offer projects, both course and self-interest ones, which not only turn theory into practise, but also turn enthusiasm into achievement.
                The department has previously hosted successful workshops on: Medical Image and Signal Processing, Optoelectronics and Optical Communication, Xilinx FPGA Architecture, Speaker verification, etc.
                The department has an active student body called CEPSTRUM (, which, with its yearlong activities keeps the EEE community a close knitted one It plays a pivotal role in enhancing the soft-skills, helping students identify their interests and achieve their goals. This student body is responsible for organizing interactive lectures, talks, workshops on topics which are necessary for surviving the core courses. An annual e-magazine In-Phase aims to achieve the vision of Cepstrum of bringing students in phase with the latest developments in the field of electronics and other related areas.'
              />
            }
          />
          <Route
            path='/hss'
            element={
              <AcadTemplates
                title='Humanities and Social Sciences'
                image='hss'
                description='The undergraduate programs/courses in HSS are designed to provide an understanding of various perspectives of development issues, through rigorous course works and guided research.
                At the BTech level, the courses in English are aimed at exposing students to Literature and Culture, Cognition and Social issues. The courses also help students in developing communication and language skills. The HSS Department is multidisciplinary in its orientation and has expertise in eight disciplines: Economics, English, Linguistics, Philosophy, Psychology, Sociology, History, Archeology and Political Science.
                Besides the annual lecture series, which are graced by eminent professors and researchers from well-known universities, a few successful workshops as well as sponsored courses are conducted by the department. A few successful ones are: an International Conference on ‘Climate Change and Water’ (2011), a Workshop on Tone and Intonation 2012, a workshop on “Children and Women’s Rights and Issues”, etc.'
              />
            }
          />
          <Route
            path='/mnc'
            element={
              <AcadTemplates
                title='Mathematics and Computing'
                image='mnc'
                description='The 4-year programme, B.Tech. in Mathematics and Computing, is a unique programme and the first of its kind in the country. The curriculum for this program is designed to meet the need of sophisticated mathematics in modern scientific investigations and technological innovations. The programme has three components: mathematics, computing and financial engineering. This helps the students of the department to play a multidimensional role in both academia and industry.
                The department recently hosted International Conference on Numerical Linear Algebra and its Applications, International Conference on Environmental Fluid Mechanics, International Conference on Geometric Group Theory and numerous other workshops. In addition the Mathematics Seminar Series conducted by the department has attracted speakers from leading national and international organizations.
                The department has state-of-art computing facilities and a department library housing various higher texts in the field of higher order mathematics. The institute also hosts the regional chapter of Society for Industrial and Applied Mathematics (SIAM) which is an international organization for ensuring cooperation among mathematical and other scientific and technological communities.'
              />
            }
          />
          <Route
            path='/mech'
            element={
              <AcadTemplates
                title='Mechanical Engineering'
                image='mech'
                description='The department of mechanical engineering, being one of the largest and oldest departments of the institute. Academic coursework and projects are designed to endow students with the ability to apply knowledge of science, mathematics, and engineering, and the capability to work effectively in multidisciplinary teams, providing leadership and technical expertise.
                MESA, Mechanical Engineering Students Association was founded in 2001.The objectives of the association are: to focus on the cutting edge technology and present it to the students in an interesting manner by means of lectures/talk, articles and workshops, to bridge the gap between theoretical and practical/field knowledge, providing students of the department with relevant knowledge of other fields, given the interdisciplinary nature of ME, interacting with other technical societies, within and outside the institute to promote flow of knowledge and interest etc.'
              />
            }
          />
          <Route
            path='/phy'
            element={
              <AcadTemplates
                title='Engineering Physics'
                image='phy'
                description='The department of mechanical engineering, being one of the largest and oldest departments of the institute. Academic coursework and projects are designed to endow students with the ability to apply knowledge of science, mathematics, and engineering, and the capability to work effectively in multidisciplinary teams, providing leadership and technical expertise.
                MESA, Mechanical Engineering Students Association was founded in 2001.The objectives of the association are: to focus on the cutting edge technology and present it to the students in an interesting manner by means of lectures/talk, articles and workshops, to bridge the gap between theoretical and practical/field knowledge, providing students of the department with relevant knowledge of other fields, given the interdisciplinary nature of ME, interacting with other technical societies, within and outside the institute to promote flow of knowledge and interest etc.'
              />
            }
          />
          <Route
            path='/branchchange'
            element={<BranchChange/>}
          />
          <Route
            path='/minor'
            element={<Minor/>}
          />
        </Routes>
      </div>
    </div>
  );
};

export default AcademicsRoutes;
