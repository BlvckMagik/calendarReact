import React from 'react';

import { months, getDisplayedMonth } from '../../utils/dateUtils.js';

import './header.scss';

const Header = ({
  onWeekChange,
  onTodayButtonClick,
  weekStartDate,
  onModalChange,
}) => {
  return (
    <header className='header'>
      <button onClick={onModalChange} className='button create-event-btn'>
        <i className='fas fa-plus create-event-btn__icon'></i>Create
      </button>
      <div className='navigation'>
        <button
          onClick={onTodayButtonClick}
          className='navigation__today-btn button'
        >
          Today
        </button>
        <button
          onClick={() => onWeekChange(false)}
          className='icon-button navigation__nav-icon'
        >
          <i className='fas fa-chevron-left'></i>
        </button>
        <button
          onClick={() => onWeekChange(true)}
          className='icon-button navigation__nav-icon'
        >
          <i className='fas fa-chevron-right'></i>
        </button>
        <span className='navigation__displayed-month'>
          {getDisplayedMonth(weekStartDate)}
        </span>
      </div>
    </header>
  );
};

export default Header;
