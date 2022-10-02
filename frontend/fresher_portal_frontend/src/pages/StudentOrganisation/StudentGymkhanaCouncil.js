import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentGymkhanaCouncil = (props) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, [props.url]);

  const fetchData = () => {
    axios
      .get(`http://127.0.0.1:8000/api/imp/${props.url}`)
      .then((response) => {
        console.log(response.data);
        setInfo(response.data);
      })
      .catch((error) => console.log('error', error));
  };
  return (
    <div className='important_page'>
      <div className='heading'>
        <div className='important_pre-cursor'></div>
        {info.length && (
          <div className='important_heading-text'>{info[0].title}</div>
        )}
      </div>
      <div className='desc'>
        {info.length && (
          <div dangerouslySetInnerHTML={{ __html: info[0].info }}></div>
        )}
      </div>
    </div>
  );
};

export default StudentGymkhanaCouncil;
