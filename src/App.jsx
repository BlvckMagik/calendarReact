import React, { Component } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import moment from 'moment';

import {
  getWeekStartDate,
  generateWeekRange,
  getDateTime,
} from '../src/utils/dateUtils.js';

import './common.scss';
import { getEvents, createEvent } from './gateway/eventsGateway.js';
import Modal from './components/modal/Modal.jsx';

class App extends Component {
  state = {
    weekStartDate: new Date(),
    isModalOpen: false,
    events: [],
  };

  componentDidMount() {
    this.fetchEvents();
  }

  onEventCreate = (event, data) => {
    const { title, date, startTime, endTime, description } = data;
    event.preventDefault();
    createEvent({
      title,
      description,
      dateFrom: getDateTime(date, startTime),
      dateTo: getDateTime(date, endTime),
    }).then(() => {
      this.fetchEvents();
    });
    this.onModalChange();
  };

  onModalChange = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  fetchEvents = () => {
    getEvents().then(data => {
      this.setState({
        events: data,
      });
    });
  };

  onWeekChange = add => {
    if (add) {
      this.setState({
        weekStartDate: new Date(
          moment(this.state.weekStartDate).add(7, 'days')
        ),
      });
    } else {
      this.setState({
        weekStartDate: new Date(
          moment(this.state.weekStartDate).subtract(7, 'days')
        ),
      });
    }
  };

  handleTodayButton = () => {
    this.setState({
      weekStartDate: new Date(),
    });
  };

  render() {
    const { weekStartDate, isModalOpen } = this.state;
    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
    const modal = isModalOpen ? (
      <Modal
        onEventCreate={this.onEventCreate}
        onModalChange={this.onModalChange}
      />
    ) : null;

    return (
      <>
        <Header
          onModalChange={this.onModalChange}
          weekStartDate={this.state.weekStartDate}
          onTodayButtonClick={this.handleTodayButton}
          onWeekChange={this.onWeekChange}
        />
        <Calendar events={this.state.events} weekDates={weekDates} />
        {modal}
      </>
    );
  }
}

export default App;
