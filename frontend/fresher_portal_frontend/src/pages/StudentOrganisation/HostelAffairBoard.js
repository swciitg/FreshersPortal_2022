import React from 'react';
import './StudentOrganisation.css';
const HostelAffairBoard = (props) =>
{
    return (
        <div className='page'>
            <div className="container">
                <div className='organisation_heading'>
                    <div className='organisation_pre-cursor'></div>
                    <div className='organisation_heading-text'>Hostel Affairs Board</div>
                </div>
                <div className='organisation_description'>
                    <div className='organisation_description-header'>{props.habdesc}</div>
                </div>
            </div>
            <div className="container">
                <div className='organisation_heading'>
                    <div className='organisation_pre-cursor'></div>
                    <div className='organisation_heading-text'>Hostel Management Committee</div>
                </div>
                <div className='organisation_description'>
                    <div className='organisation_description-header'>{props.hmcdesc}</div>
                </div>
            </div>
            
        </div>
    );
}

export default HostelAffairBoard;