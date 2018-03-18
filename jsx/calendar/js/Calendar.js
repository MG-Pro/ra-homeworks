const Calendar = props => {
  const {date} = props;
  const daysName = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const main = (
    <div className='ui-datepicker'>
      <div className='ui-datepicker-material-header'>
        <div className='ui-datepicker-material-day'>{daysName[date.getDay()]}</div>
        <div className='ui-datepicker-material-date'></div>
      </div>
    </div>
  );
  return main;
};