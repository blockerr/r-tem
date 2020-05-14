import React from 'react';
import './notfound.css';
import notfound from '../../assets/notfound.png';

function NotFound() {
  return (
    <div>
      <div className='_notfound-container'>
        <img src={notfound} alt="" />
      </div>
      <h1 style={{display: 'flex', justifyContent: 'space-around'}}>Trang này không tồn tại !</h1>
    </div>
  )
}

export default NotFound 