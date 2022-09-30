import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BoardTemplate = (props) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, [props.url]);

  const fetchData = () => {
    axios
      .get(`http://127.0.0.1:8000/api/open1/${props.url}`)
      .then((response) => {
        console.log(response.data);
        setInfo(response.data);
      })
      .catch((error) => console.log('error', error));
  };
  return (
    <div className='organisation_page'>
      {info.length &&
        info.map((item) => {
          return (
            <div className='important_page'>
              <div className='heading'>
                <div className='important_pre-cursor'></div>
                <p className='important_heading-text'>{item.title}</p>
              </div>
              <div className='desc'>
                <div dangerouslySetInnerHTML={{ __html: item.text }}></div>
              </div>
              <br />
              <br />
            </div>            
          );
        })}
    </div>
  );
};

export default BoardTemplate;