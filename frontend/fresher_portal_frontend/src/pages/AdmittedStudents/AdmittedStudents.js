import * as React from "react";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import "./AdmittedStudents.css";
import Navbar from "../../components/Navbar";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function AdmittedStudents() {
  const [open, setOpen] = useState(false);

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

  return (
    <>
      <Navbar />
      <section>
        <div className="grid grid-cols-12" id="d1">
          <div className="col-span-11" id="d1a">
            <h2 id="d1h">Important Submissions</h2>
            <p id="d1p">
              All the freshers are requested to check out the Sagittis sapien
              tempus arcu penatibus. Eu purus arcu ut ac non sagittis aliquet.
              Interdum sagittis, varius sit ut parturient eu et. In justo,
              scelerisque sagittis, lorem vitae ultrices viverra. Id enim
              accumsan, aliquet cras neque.
            </p>
            <div id="d1a1">
              <div id="d1ap"> Important Links</div>
            </div>
          </div>
          <div className="col-span-1 mt-36 " id="d1b">
            <OverlayTrigger
              placement="right"
              delay={{ show: 150, hide: 150 }}
              overlay={galTooltip}
            >
              <Button className="rectpurple">
                <img className="s1icons" src="/AdmittedStudents/gallery.svg" />
              </Button>
            </OverlayTrigger>
            <OverlayTrigger
              placement="right"
              delay={{ show: 150, hide: 150 }}
              overlay={calTooltip}
            >
              <div className="rectpurple">
                <img className="s1icons" src="/AdmittedStudents/Calendar.svg" />
              </div>
            </OverlayTrigger>
            <OverlayTrigger
              placement="right"
              delay={{ show: 150, hide: 150 }}
              overlay={mapTooltip}
            >
              <div className="rectpurple">
                <img className="s1icons" src="/AdmittedStudents/Location.svg" />
              </div>
            </OverlayTrigger>
            <OverlayTrigger
              placement="right"
              delay={{ show: 150, hide: 150 }}
              overlay={telTooltip}
            >
              <div className="rectpurple">
                <img className="s1icons" src="/AdmittedStudents/Call.svg" />
              </div>
            </OverlayTrigger>
          </div>
        </div>
      </section>
      <section>
        <div id="s2">
          <h2 id="s2h">Announcements</h2>
          <ul id="ul1">
            <li className="list1 grid grid-cols-12 ">
              <div className="col-span-11">
                <div className="s2d1a">06.07.2022</div>
                <div className="s2d1b">Regarding hostel accomodation</div>
              </div>

              <div className="col-span-1 " id="s2c2">
                <img className=" s2d1c" src="/AdmittedStudents/Arrow 2.svg" />
              </div>
            </li>
            <li className="list1 grid grid-cols-12 ">
              <div className="col-span-11">
                <div className="s2d1a">01.07.2022</div>
                <div className="s2d1b">Regarding mess refund</div>
              </div>

              <div className="col-span-1 " id="s2c2">
                <img className=" s2d1c" src="/AdmittedStudents/Arrow 2.svg" />
              </div>
            </li>
            <li className="list1 grid grid-cols-12 ">
              <div className="col-span-11">
                <div className="s2d1a">30.06.2022</div>
                <div className="s2d1b">Regarding branch change</div>
              </div>

              <div className="col-span-1 " id="s2c2">
                <img className=" s2d1c" src="/AdmittedStudents/Arrow 2.svg" />
              </div>
            </li>
            <li className="list1 grid grid-cols-12 ">
              <div className="col-span-11">
                <div className="s2d1a">22.06.2022</div>
                <div className="s2d1b">Regarding SC/ST scholarship</div>
              </div>

              <div className="col-span-1 " id="s2c2">
                <img className=" s2d1c" src="/AdmittedStudents/Arrow 2.svg" />
              </div>
            </li>
          </ul>

          <div id="s2div5">
            <Button
              id="viewall"
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              View all
            </Button>
            <Collapse in={open}>
              <div id="collap">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </div>
            </Collapse>
          </div>

          <h2 id="s22h">Upcoming Events</h2>
          {/* <div id="sort"> */}
          {/* <div id="sorttext">Latest</div>
           */}
          <div id="sort">
            <DropdownButton id="sorttext" title="Latest">
              <Dropdown.Item href="#/action-1" className="sortitem" id="one">
                Action
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2" className="sortitem">
                Another action
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" className="sortitem">
                Something else
              </Dropdown.Item>
            </DropdownButton>
            <img src="/AdmittedStudents/Stroke 1.svg" id="downarrow" />
          </div>
          {/* </div> */}
          <ul id="ul2">
            <li className="list2 grid grid-cols-12 ">
              <div className="col-span-11">
                <div className="s2d1a">06.07.2022</div>
                <div className="s2d1b">Regarding hostel accomodation</div>
              </div>

              <div className="col-span-1 " id="s2c2">
                <img className=" s2d1c" src="/AdmittedStudents/Arrow 2.svg" />
              </div>
            </li>
            <li className="list2 grid grid-cols-12 ">
              <div className="col-span-11">
                <div className="s2d1a">01.07.2022</div>
                <div className="s2d1b">Regarding mess refund</div>
              </div>

              <div className="col-span-1 " id="s2c2">
                <img className=" s2d1c" src="/AdmittedStudents/Arrow 2.svg" />
              </div>
            </li>
            <li className="list2 grid grid-cols-12 ">
              <div className="col-span-11">
                <div className="s2d1a">30.06.2022</div>
                <div className="s2d1b">Regarding branch change</div>
              </div>

              <div className="col-span-1 " id="s2c2">
                <img className=" s2d1c" src="/AdmittedStudents/Arrow 2.svg" />
              </div>
            </li>
            <li className="list2 grid grid-cols-12 ">
              <div className="col-span-11">
                <div className="s2d1a">22.06.2022</div>
                <div className="s2d1b">Regarding SC/ST scholarship</div>
              </div>

              <div className="col-span-1 " id="s2c2">
                <img className=" s2d1c" src="/AdmittedStudents/Arrow 2.svg" />
              </div>
            </li>
          </ul>
          <button id="s22div5">
            <div id="viewall">View all</div>
          </button>
        </div>
      </section>
      <section>
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
      </section>
      <section>
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
            <img className="s4l3" src="/AdmittedStudents/Arrow 2.svg" />
          </div>
          <div id="s4d4">
            <div className="s4div">
              <img classname="s4l1" src="/AdmittedStudents/Calendar2.svg" />
            </div>
            <div className="s4l2">Counsellor's Timimgs</div>
            <img className="s4l3" src="/AdmittedStudents/Arrow 2.svg" />
          </div>
          <div id="s4d5">
            <div className="s4div">
              <img classname="s4l1" src="/AdmittedStudents/Add User.svg" />
            </div>
            <div className="s4l2">Student Mentorship</div>
            <img className="s4l3" src="/AdmittedStudents/Arrow 2.svg" />
          </div>
          <div id="s4d6">
            <div className="s4div">
              <img classname="s4l1" src="/AdmittedStudents/3 User.svg" />
            </div>
            <div className="s4l2">Team</div>
            <img className="s4l3" src="/AdmittedStudents/Arrow 2.svg" />
          </div>
          <div id="s4d7">
            <div className="s4div">
              <img classname="s4l1" src="/AdmittedStudents/Shield Done.svg" />
            </div>
            <div className="s4l2">Anonymous Emotional Support System</div>
            <img className="s4l3" src="/AdmittedStudents/Arrow 2.svg" />
          </div>
        </div>
      </section>
    </>
  );
}
