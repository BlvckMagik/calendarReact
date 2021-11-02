import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Popup from '../popup/Popup';
import './event.scss';

const Event = ({ height, marginTop, title, time, id, fetchEvents }) => {
  const [popupIsOpen, setPopupIsOpen] = useState(false);

  const eventStyle = {
    height,
    marginTop,
  };

  return (
    <div
      style={eventStyle}
      className='event'
      onClick={() => setPopupIsOpen(!popupIsOpen)}
    >
      <div className='event__title'>{title}</div>
      <div className='event__time'>{time}</div>
      {popupIsOpen && <Popup idToDelete={id} fetchEvents={fetchEvents} />}
    </div>
  );
};

Event.propTypes = {
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  fetchEvents: PropTypes.func.isRequired,
};

export default Event;
