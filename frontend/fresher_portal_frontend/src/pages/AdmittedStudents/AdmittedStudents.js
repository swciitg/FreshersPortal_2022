import * as React from "react";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import "./AdmittedStudents.css";
import Navbar from "../../components/Navbar/Navbar_1";
import NavBar2 from "../../components/Navbar/index";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { NavLink } from "react-router-dom";
import { FunctionsOutlined, ViewComfyAltOutlined } from "@mui/icons-material";
import StickyFooter from "../../components/StickyFooter";

export default function AdmittedStudents() {
  var s1 = 4;
  var s2 = 4;
  const data = [
    {
      date: "06.07.2022",
      title: "Regarding hostel accomodation",
    },
    {
      date: "01.07.2022",
      title: "Regarding mess refund",
    },
    {
      date: "30.06.2022",
      title: "Regarding branch change",
    },
    {
      date: "22.06.2022",
      title: "Regarding SC/ST scholarship",
    },
    {
      date: "14.06.2022",
      title: "Regarding fee ",
    },
    {
      date: "03.06.2022",
      title: "Regarding department",
    },
    {
      date: "14.06.2022",
      title: "Regarding fee ",
    },
    {
      date: "03.06.2022",
      title: "Regarding department",
    },
    {
      date: "14.06.2022",
      title: "Regarding fee ",
    },
    {
      date: "03.06.2022",
      title: "Regarding department",
    },
  ];

  const galTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <div className="tip">Gallery</div>
    </Tooltip>
  );
  const calTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Calendar
    </Tooltip>
  );
  const mapTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Maps
    </Tooltip>
  );
  const telTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Telephone Directory
    </Tooltip>
  );
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <div className="container">
      <Navbar/>
      <div className="classwithz"><NavBar2/></div>
      <StickyFooter/>
      <div className='admittedstudents_page' id="box">
        <div className="grid grid-cols-12" id="s1">
          <div className="col-span-11" id="d1a">
            <h2 id="d1h">Important Submissions</h2>
            <p id="d1p">
              All the freshers are requested to check out the Sagittis sapien
              tempus arcu penatibus. Eu purus arcu ut ac non sagittis aliquet.
              Interdum sagittis, varius sit ut parturient eu et. In justo,
              scelerisque sagittis, lorem vitae ultrices viverra. Id enim
              accumsan, aliquet cras neque.
            </p>
            <NavLink to="#" id="d1a1">
              <div id="d1ap"> Important Links</div>
            </NavLink>
          </div>
          <div className="col-span-1 mt-36 " id="d1b">
            <OverlayTrigger
              placement="right"
              delay={{ show: 150, hide: 150 }}
              overlay={galTooltip}
            >
              <NavLink to="#" className="rectpurple">
                <img className="s1icons" src="/AdmittedStudents/gallery.svg" />
              </NavLink>
            </OverlayTrigger>
            <OverlayTrigger
              placement="right"
              delay={{ show: 150, hide: 150 }}
              overlay={calTooltip}
            >
              <NavLink to="#" className="rectpurple">
                <img className="s1icons" src="/AdmittedStudents/Calendar.svg" />
              </NavLink>
            </OverlayTrigger>
            <OverlayTrigger
              placement="right"
              delay={{ show: 150, hide: 150 }}
              overlay={mapTooltip}
            >
              <NavLink to="#" className="rectpurple">
                <img className="s1icons" src="/AdmittedStudents/Location.svg" />
              </NavLink>
            </OverlayTrigger>
            <OverlayTrigger
              placement="right"
              delay={{ show: 150, hide: 150 }}
              overlay={telTooltip}
            >
              <NavLink to="#" className="rectpurple">
                <img className="s1icons" src="/AdmittedStudents/Call.svg" />
              </NavLink>
            </OverlayTrigger>
          </div>
        </div>

        <div id="s2" className="grid grid-cols-12">
          <div className="col-span-6">
            <h2 id="s2h">Announcements</h2>
            <ul id="ul1">
              {(() => {
                if (!open) {
                  s1 = 4;
                } else {
                  s1 = Object.keys(data).length;
                }
              })()}
              {data.slice(0, s1).map((announc) => (
                <li className="list1 grid grid-cols-12 ">
                  <div className="col-span-11">
                    <div className="s2d1a">{announc.date}</div>
                    <div className="s2d1b">{announc.title}</div>
                  </div>

                  <NavLink to="#" className="col-span-1 " id="s2c2">
                    <img
                      className=" s2d1c"
                      src="/AdmittedStudents/Arrow 2.svg"
                    />
                  </NavLink>
                </li>
              ))}
            </ul>
            {(() => {
              if (!open) {
                return (
                  <Button
                    id="s2div5"
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    <Button id="viewall">View all</Button>
                  </Button>
                );
              } else {
                return (
                  <Button
                    id="s2div5"
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                  >
                    <Button id="viewall">View less</Button>
                  </Button>
                );
              }
            })()}
          </div>
          <div className="col-span-6">
            <h2 id="s22h">Upcoming Events</h2>
            {/* <div id="sort"> */}
            {/* <div id="sorttext">Latest</div>
             */}
            <div id="sort">
              <DropdownButton id="sorttext" title="Latest">
              </DropdownButton>
              <img src="/AdmittedStudents/Stroke 1.svg" id="downarrow" />
            </div>
            <ul id="ul2">
              {(() => {
                if (!open2) {
                  s2 = 4;
                } else {
                  s2 = Object.keys(data).length;
                }
              })()}
              {data.slice(0, s2).map((announc) => (
                <li className="list1 grid grid-cols-12 ">
                  <div className="col-span-11">
                    <div className="s2d1a">{announc.date}</div>
                    <div className="s2d1b">{announc.title}</div>
                  </div>

                  <NavLink to="#" className="col-span-1 " id="s2c2">
                    <img
                      className=" s2d1c"
                      src="/AdmittedStudents/Arrow 2.svg"
                    />
                  </NavLink>
                </li>
              ))}
            </ul>
            {(() => {
              if (!open2) {
                return (
                  <Button
                    id="s22div5"
                    onClick={() => setOpen2(!open2)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open2}
                  >
                    <Button id="viewall">View all</Button>
                  </Button>
                );
              } else {
                return (
                  <Button
                    id="s22div5"
                    onClick={() => setOpen2(!open2)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open2}
                  >
                    <Button id="viewall">View less</Button>
                  </Button>
                );
              }
            })()}
          </div>
        </div>

        <div id="s3">
          <h2 id="s3h">Freshers' Guide Magazine</h2>
          <div id="s3d1">
            Morbi viverra in tincidunt rhoncus, cras nisl viverra commodo etiam.
            Semper vulputate interdum tellus purus egestas arcu. Mi arcu etiam
            lorem tincidunt odio facilisi. Turpis leo non curabitur enim. In
            dui, scelerisque ullamcorper aenean justo feugiat suscipit ridiculus
            semper. Sagittis sapien tempus arcu penatibus. Eu purus arcu ut ac
            non sagittis aliquet. Interdum sagittis, varius sit ut parturient eu
            et. In justo, scelerisque sagittis, lorem vitae ultrices viverra. Id
            enim accumsan, aliquet cras neque. Nulla ut integer malesuada luctus
            interdum amet, ut lorem sagittis. Phasellus nisi magnis elementum
            lacus consectetur.
          </div>
          <div id="s3d2"></div>
        </div>

        <div id="s4">
          <div id="s4d1">
            <div id="saathi">SAATHI</div>
            <div id="couns">Counselling Service by IIT Guwahati</div>
          </div>
          <div id="s4d2">
            Morbi viverra in tincidunt rhoncus, cras nisl viverra commodo etiam.
            Semper vulputate interdum tellus purus egestas arcu. Mi arcu etiam
            lorem tincidunt odio facilisi. Turpis leo non curabitur enim. In
            dui, scelerisque ullamcorper aenean justo feugiat suscipit ridiculus
            semper. Sagittis sapien tempus arcu penatibus. Eu purus arcu ut ac
            non sagittis aliquet. Interdum sagittis, varius sit ut parturient eu
            et. In justo, scelerisque sagittis, lorem vitae ultrices viverra. Id
            enim accumsan, aliquet cras neque. Nulla ut integer malesuada luctus
            interdum amet, ut lorem sagittis. Phasellus nisi magnis elementum
            lacus consectetur.
          </div>
          <div id="s4d3">
            <div className="s4div">
              <img classname="s4l1" src="/AdmittedStudents/Info Square.svg" />
            </div>

            <div className="s4l2">About Us</div>
            <NavLink to="#">
              <img className="s4l3" src="/AdmittedStudents/Arrow 2.svg" />
            </NavLink>
          </div>
          <div id="s4d4">
            <div className="s4div">
              <img classname="s4l1" src="/AdmittedStudents/Calendar2.svg" />
            </div>
            <div className="s4l2">Counsellor's Timings</div>
            <NavLink to="#">
              <img className="s4l3" src="/AdmittedStudents/Arrow 2.svg" />
            </NavLink>
          </div>
          <div id="s4d5">
            <div className="s4div">
              <img classname="s4l1" src="/AdmittedStudents/Add User.svg" />
            </div>
            <div className="s4l2">Student Mentorship</div>
            <NavLink to="#">
              <img className="s4l3" src="/AdmittedStudents/Arrow 2.svg" />
            </NavLink>
          </div>
          <div id="s4d6">
            <div className="s4div">
              <img classname="s4l1" src="/AdmittedStudents/3 User.svg" />
            </div>
            <div className="s4l2">Team</div>
            <NavLink to="#">
              <img className="s4l3" src="/AdmittedStudents/Arrow 2.svg" />
            </NavLink>
          </div>
          <div id="s4d7">
            <div className="s4div">
              <img classname="s4l1" src="/AdmittedStudents/Shield Done.svg" />
            </div>
            <div className="s4l2">Anonymous Emotional Support System</div>
            <NavLink to="#">
              <img className="s4l3" src="/AdmittedStudents/Arrow 2.svg" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
