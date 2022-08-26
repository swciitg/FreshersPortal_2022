import React from 'react';
import './Template.css';

const Template = (props) => {
  return (
    <div className='page'>
      <div className='heading'>
        <div className='pre-cursor'></div>
        <p className='heading-text'>{props.title}</p>
      </div>

      <div className='description'>
        <div className='description-header'> {props.descriptionTitle}</div>
        <div>Lambi List</div>
      </div>
    </div>
  );
};

export default Template;
