import React, { Component } from 'react';

import './modal.scss';

class Modal extends Component {
  state = {
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    description: '',
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className='modal overlay'>
        <div className='modal__content'>
          <div className='create-event'>
            <button
              onClick={this.props.onModalChange}
              className='create-event__close-btn'
            >
              +
            </button>
            <form
              onSubmit={() => this.props.onEventCreate(event, this.state)}
              className='event-form'
            >
              <input
                value={this.state.title}
                type='text'
                name='title'
                placeholder='Title'
                className='event-form__field'
                onChange={this.handleChange}
              />
              <div className='event-form__time'>
                <input
                  value={this.state.date}
                  onChange={this.handleChange}
                  type='date'
                  name='date'
                  className='event-form__field'
                />
                <input
                  value={this.state.startTime}
                  type='time'
                  name='startTime'
                  className='event-form__field'
                  onChange={this.handleChange}
                />
                <span>-</span>
                <input
                  value={this.state.endTime}
                  type='time'
                  name='endTime'
                  className='event-form__field'
                  onChange={this.handleChange}
                />
              </div>
              <textarea
                value={this.state.description}
                name='description'
                placeholder='Description'
                className='event-form__field'
                onChange={this.handleChange}
              ></textarea>
              <button type='submit' className='event-form__submit-btn'>
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
