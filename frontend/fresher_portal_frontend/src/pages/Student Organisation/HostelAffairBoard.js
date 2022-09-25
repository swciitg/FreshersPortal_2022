import React from 'react';
import './StudentOrganisation.css';
const HostelAffairBoard = (props) =>
{
    return (
        <div className='page'>
            <div className="container">
                <div className="heading">
                    <div className="pre-cursor"></div>
                    <p className="heading-text">Hostel Affairs Board</p>
                </div>
                <div className="description">
                    <div className="description-header">{props.habdesc}</div>
                </div>
            </div>
            <div className="container">
                <div className="heading">
                    <div className="pre-cursor"></div>
                    <p className="heading-text">Hostel Management Committee</p>
                </div>
                <div className="description">
                    <div className='description-header'>{props.hmcdesc}</div>
                </div>
            </div>
            
        </div>
    );
}

export default HostelAffairBoard;