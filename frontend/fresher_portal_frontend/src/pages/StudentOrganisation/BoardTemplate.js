import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BoardTemplate = (props) => {
  const [info, setInfo] = useState([]);
  let ind = 0;
  useEffect(() => {
    fetchData();
  }, [props.url]);

  const fetchData = () => {
    axios
      .get(`http://127.0.0.1:8000/api/open1/${props.url}`)
      .then((response) => {
        setInfo(response.data);
      })
      .catch((error) => console.log('error', error));
  };
  return (
    <div className='organisation_page'>
      {info.length &&
        info.map((item) => {
          return (
            <div className='important_page' key={ind++}>
              <div className='heading'>
                <div className='important_pre-cursor'></div>
                <div className='important_heading-text'>{item.title}</div>
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
