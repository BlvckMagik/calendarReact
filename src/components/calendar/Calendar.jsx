import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';

import './calendar.scss';

class Calendar extends Component {
  render() {
    const { weekDates } = this.props;

    return (
      <section className='calendar'>
        <Navigation weekDates={weekDates} />
        <div className='calendar__body'>
          <div className='calendar__week-container'>
            <Sidebar />
            <Week
              fetchEvents={this.props.fetchEvents}
              weekDates={weekDates}
              events={this.props.events}
            />
          </div>
        </div>
      </section>
    );
  }
}

Calendar.propTypes = {
  weekDates: PropTypes.array.isRequired,
};

export default Calendar;
