import React, { Component } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import moment from 'moment';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';
import { createEvent } from './gateway/eventsGateway.js';

class App extends Component {
  state = {
    weekStartDate: new Date(),
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
    const { weekStartDate } = this.state;
    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

    return (
      <>
        <Header
          weekStartDate={this.state.weekStartDate}
          onTodayButtonClick={this.handleTodayButton}
          onWeekChange={this.onWeekChange}
        />
        <Calendar weekDates={weekDates} />
      </>
    );
  }
}

export default App;
