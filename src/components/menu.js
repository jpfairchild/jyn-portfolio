import React from 'react';
import classnames from 'classnames';
import { motion, useCycle } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Ham} from '../icons/ham.svg';

const Toggle = ({ toggle, isOpen }) => {
  return (
    <Ham
      className={classnames('ham ham-close', { active: isOpen })}
      onClick={toggle}
    />
  );
};

const variants = {
  open: {
    height: '100vh',
    transition: {
      type: 'spring',
      stiffness: 0.8,
      mass: 0.01,
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  },
  closed: {
    height: 0,
    transition: {
      when: 'afterChildren'
    }
  }
};

const childVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    x: -50,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 }
    }
  }
};

export function Menu() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const toggleMenu = navigated => {
    toggleOpen();
  };

  return (
    <motion.div
      initial={false}
      className='ham-nav__container'
      animate={isOpen ? 'open' : 'closed'}
      exit='closed'
    >
      <motion.div className={classnames('ham-nav__background', { open: isOpen })} variants={variants}>

        <Toggle toggle={toggleMenu} isOpen={isOpen} />

        <motion.div variants={childVariants} className='mb-30' onClick={() => toggleMenu(true)}>
          <div className='pt-80 pl-40 flex-column align-items-start justify-content-start'>
            <a className="navbar-brand" href="./">LIFE IS TOO SHORT FOR SHIT FILMS</a>
            <h2 className='line-spacing-paragraph mr-20 pt-6 pt-lg-10 pb-10 pb-lg-0'>Life is already too short, don't waste it watching garbage</h2>
          </div>
        </motion.div>

        <div className="ham-nav__body pt-40 pl-40 nav-parent">
          <div className='ham-nav__links h-100 d-flex flex-column h-100'>

          <motion.div variants={childVariants} className='mb-30' onClick={() => toggleMenu(true)}>
            <NavLink exact to='/' className='nav-item ham-link'>HOME</NavLink>
          </motion.div>
          
          <motion.div variants={childVariants} className='mb-30' onClick={() => toggleMenu(true)}>
            <NavLink exact to='/allfilms'  className='nav-item ham-link'>ALL FILMS</NavLink>
          </motion.div>
          
          <motion.div variants={childVariants} className='mb-30' onClick={() => toggleMenu(true)}>
            <NavLink exact to='/rating'  className='nav-item ham-link'>RATING</NavLink>
          </motion.div>  
          
          <motion.div variants={childVariants} className='mb-30' onClick={() => toggleMenu(true)}>
            <NavLink exact to='/about' className='nav-item ham-link'>ABOUT</NavLink>
          </motion.div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}