import moment from 'moment';

const events = [
  {
    id: 1,
    title: 'Go to the gym',
    description: 'some text here',
    dateFrom: new Date(2021, 8, 15, 10, 15),
    dateTo: new Date(2021, 8, 15, 15, 0),
  },
  {
    id: 2,
    title: 'Go to the school',
    description: 'hello, 2 am',
    dateFrom: new Date(2021, 8, 16, 10, 15),
    dateTo: new Date(2021, 8, 16, 11, 0),
  },
  {
    id: 3,
    title: 'Lunch',
    description: '',
    dateFrom: new Date(2021, 10, 26, 10, 30),
    dateTo: new Date(2021, 10, 26, 11, 30),
  },
  {
    id: 4,
    title: 'Meet friend',
    description: 'at the cafe',
    dateFrom: new Date(2021, 10, 25, 10, 30),
    dateTo: new Date(2021, 10, 25, 11, 0),
  },
  {
    id: 5,
    title: 'Meet friend',
    description: 'at the cafe',
    dateFrom: new Date(),
    dateTo: new Date(moment(new Date()).add(120, 'minutes')),
  },
];

export default events;
