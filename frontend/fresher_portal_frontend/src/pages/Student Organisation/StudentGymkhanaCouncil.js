import React from 'react';
import './StudentOrganisation.css';
const StudentGymkhanaCouncil = (props) =>
{
    return (
        <div className='page'>
            <div className="container">
                <div className='organisation_heading'>
                    <div className='organisation_pre-cursor'></div>
                    <p className='organisation_heading-text'>Students' Gymkhana Council</p>
                </div>
                <div className='organisation_description'>
                    <div className='organisation_description-header'>{props.sgcdesc}</div>
                </div>
            </div>
            <div className="container">
                <div className='organisation_heading'>
                    <div className='organisation_pre-cursor'></div>
                    <p className='organisation_heading-text'>Students' Senate</p>
                </div>
                <div className='organisation_description'>
                    <div className='organisation_description-header'>{props.ssdesc}</div>
                </div>
            </div>
            
        </div>
    );
}

export default StudentGymkhanaCouncil;