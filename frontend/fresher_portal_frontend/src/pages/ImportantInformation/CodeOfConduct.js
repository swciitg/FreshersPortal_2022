import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CodeOfConduct = () => {
   const [info, setInfo] = useState([]);

   useEffect(() => {
     fetchData();
   }, []);

   const fetchData = () => {
     axios
       .get('http://127.0.0.1:8000/api/imp/coc')
       .then((response) => {
         console.log(response.data);
         setInfo(response.data);
       })
       .catch((error) => console.log('error', error));
   };
   return (
     <div className='page'>
       <div className='heading'>
         <div className='pre-cursor'></div>
         {info.length && <p className='heading-text'>{info[0].title}</p>}
       </div>
       <div className='desc'>
         {info.length && (
           <div dangerouslySetInnerHTML={{ __html: info[0].info }}></div>
         )}
       </div>
     </div>
   );
};

export default CodeOfConduct;
