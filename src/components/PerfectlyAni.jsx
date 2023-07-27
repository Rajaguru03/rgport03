import React, { useEffect, useState } from 'react';
import './Animi.css';

const PerfectlyAni = () => {
  const [shadow, setShadow] = useState('');

  useEffect(() => {
    let shadowStyle = '';
    for (let i = 0; i < 200; i++) {
      shadowStyle += (shadowStyle ? ',' : '') + i * 1 + 'px ' + i * 1 + 'px 0px rgba(0, 0, 0, 0)';
    }
    setShadow(shadowStyle);
  }, []);

  return (
    <div className='PerfectlyAni'>      
        <h2 id="text" style={{ textShadow: shadow }}>
        <span style={{ '--i': 0 }}> PERFECTLY</span>
        <span className='mx-2' style={{ '--i': 1 }}> ~ </span>
        <span style={{ '--i': 2 }}> IMPERFECT</span>
        </h2>
    </div>
  );
};

export default PerfectlyAni;
