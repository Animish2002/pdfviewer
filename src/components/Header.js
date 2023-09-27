import React from 'react';
import './header.css';


const Header = () => {
  return (
    <div className='bar' onContextMenu={(e) => e.preventDefault()}>
       <h3>React Pdf Viewer</h3>
    </div>
  )
}

export default Header;