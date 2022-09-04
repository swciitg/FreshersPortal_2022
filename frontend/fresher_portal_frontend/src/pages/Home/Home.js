import * as React from "react";
import "./Home.css";
import { NavLink } from "../../components/Navbar/NavbarElememts";

export default function Home() {
  return (
    <>
      <div
        id="container"
        style={{
          backgroundImage: `url(/AdmittedStudents/guesthouse1.jpg)`,
        }}
      >
        <div id="trs">
          <div id="d1">
            <div id="ha">WELCOME TO</div>
            <div id="hb">IIT GUWAHATI</div>
          </div>

          <NavLink to="/admittedstudent" id="AS">
            Admitted Student
          </NavLink>
          {/* <img id="back" src="" /> */}
        </div>
      </div>
    </>
  );
}
