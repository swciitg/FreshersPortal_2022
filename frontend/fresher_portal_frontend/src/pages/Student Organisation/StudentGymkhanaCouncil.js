import React from 'react';
import './StudentOrganisation.css';
const StudentGymkhanaCouncil = (props) =>
{
    return (
        <div className='page'>
            <div className="container">
                <div className="heading">
                    <div className="pre-cursor"></div>
                    <p className="heading-text">Students' Gymkhana Council</p>
                </div>
                <div className="description">
                    <div className="description-header">{props.sgcdesc}</div>
                </div>
            </div>
            <div className="container">
                <div className="heading">
                    <div className="pre-cursor"></div>
                    <p className="heading-text">Students' Senate</p>
                </div>
                <div className="description">
                    <div className='description-header'>{props.ssdesc}</div>
                </div>
            </div>
            
        </div>
    );
}

export default StudentGymkhanaCouncil;