'use strict';

const DateTime = props => {
  return (
    <p className = "date">{props.date}</p>
  )
};


const DateTimePretty = props => {
  function getPublicTime(date) {
    const time = (Date.now() - (new Date(date)).getTime()) / 1000 / 60 / 60;
    if(time < 1) {
      return'12 минут назад';
    } else if(time >= 1 && time < 24) {
      return '5 часов назад';
    } else {
      return 'X дней назад'
    }
  }
  return <DateTime date = {getPublicTime(props.date)}/>
};