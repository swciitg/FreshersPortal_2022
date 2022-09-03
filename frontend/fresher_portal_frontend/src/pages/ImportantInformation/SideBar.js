import React from "react";
import "../../App.css";

function Sidebar() {

  const SidebarData = [
  {
    title: "Provisional ID Card",
    link: "/important/provisional",
  },
  {
    title: "Antiragging Affidavit",
    link: "/important/antiragging",
  },
  {
    title: "Hostel Undertaking",
    link: "/important/hostelundertaking",
  },
  {
    title: "Guidelines for Photo & Signature",
    link: "/important/guidelines",
  },
  {
    title: "Portal For Updating Your Personal Information",
    link: "/important/portal",
  },
  {
    title: "Permanent Identity Card",
    link: "/important/permanentidentity",
  },
  {
    title: "Bonafide Certificate",
    link: "/important/bonafide",
  },
  {
    title: "IITG Girls’ Collective",
    link: "/important/iitggirlscollective",
  },
];

  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
            <br />
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;