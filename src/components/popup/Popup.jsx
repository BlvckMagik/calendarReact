import React from 'react';
import PropTypes from 'prop-types';
import { deleteEvent } from '../../gateway/eventsGateway';

import './popup.scss';

const Popup = ({ fetchEvents, idToDelete }) => {
  const handleDeleteEvent = eventId => {
    deleteEvent(eventId).then(() => {
      fetchEvents();
    });
  };

  return (
    <div className='popup'>
      <div className='popup__content'>
        <button
          className='delete-event-btn'
          onClick={() => handleDeleteEvent(idToDelete)}
        >
          <i className='fas fa-trash delete-event-btn__icon'></i>
          Delete
        </button>
      </div>
    </div>
  );
};

Popup.propTypes = {
  fetchEvents: PropTypes.func.isRequired,
  idToDelete: PropTypes.string.isRequired,
};

export default Popup;
