import React, { useState } from 'react';
import './navbar.css';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <h1>SADIA.</h1>
      <div className='desktopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>HOME</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>ABOUT</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>PROJECTS</Link>
        <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>CONTACT</Link>
      </div>

      {/* Download CV button for desktop view */}
      <a href={require('../../assets/CV.jpg')} download="Sadia_CV.jpg">
        <button className='desktopMenuBtn'>
          <img src={contactImg} alt='contact' className='desktopMenuImg' />Download CV
        </button>
      </a>

      <img src={menu} alt='menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
      <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
        {/* Download CV button for mobile view */}
        <a href={require('../../assets/CV.jpg')} download="Sadia_CV.jpg" className='ListItem' onClick={() => setShowMenu(false)}>Download CV</a>

        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>HOME</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>ABOUT</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>PROJECTS</Link>
        <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={() => setShowMenu(false)}>CONTACT</Link>
      </div>
    </nav>
  );
}

export default Navbar;
