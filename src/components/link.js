import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import Arrow from '../icons/arrow-right.svg';

export function JLink({ to, text, className }) {
  return (
    <Link to={to} className={classnames('ch-link', className)}>
      <span className='ch-icon__arrow'>
        {text}
        <Arrow viewBox='0 0 32 31' />
      </span>
    </Link>
  );
}
