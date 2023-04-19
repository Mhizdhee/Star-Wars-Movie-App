import React from 'react'
import ImageLogo from '../Images/logo.svg'
import '../styles/header.css';

const Header = () => {
  return (
    <div className='header-img'>
    <img className='logo' src={ImageLogo} alt='logo' />
    </div>
  )
}

export default Header