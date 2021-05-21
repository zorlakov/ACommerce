import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

export default function Header() {
  return (
    <div className='header'>
      <div className='brandName'>ACommerce</div>
      <div className='options'>
        <div className='option'>
          <Link className='option' to='/shop'>
            Shop
          </Link>
          <Link className='option' to='/deals'>
            Deals
          </Link>
          <Link className='option' to='/contact'>
            Contact
          </Link>
          <Link className='option' to='/about'>
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
