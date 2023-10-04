import React from 'react';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const QZone = () => {
  return (
    <div className='bg-secondary m-4 py-3'>
        <h3 className='mt-4'>Q-Zone</h3>
        <img src={qZone1} alt="Mahdi" />
        <img src={qZone2} alt="Mahdi" />
        <img src={qZone3} alt="Mahdi" />
    </div>
  );
};

export default QZone;