const Calendar = props => {
  const {date} = props;
  const dateGenitive = date.toLocaleDateString('ru-RU', {day: 'numeric', month: 'long'});

  const main = (
    <div className = 'ui-datepicker'>
      <div className = 'ui-datepicker-material-header'>
        <div
          className = 'ui-datepicker-material-day'>{date.toLocaleDateString('ru-RU', {weekday: 'long'}).toUpperCase()}</div>
        <div className = 'ui-datepicker-material-date'>
          <div className = 'ui-datepicker-material-day-num'>{date.getDate()}</div>
          <div className = 'ui-datepicker-material-month'>{dateGenitive.substring(dateGenitive.indexOf(' '))}</div>
          <div className = 'ui-datepicker-material-year'>{date.getFullYear()}</div>
        </div>
      </div>
      <div className = 'ui-datepicker-header'>
        <div className = 'ui-datepicker-title'>
          <span
            className = 'ui-datepicker-month'>{date.toLocaleDateString('ru-RU', {month: 'long'}).toUpperCase() + ' '}</span>
          <span className = 'ui-datepicker-year'>{date.getFullYear()}</span>
        </div>
      </div>
      <table className = 'ui-datepicker-calendar'>
        <colgroup>
          <col/>
          <col/>
          <col/>
          <col/>
          <col/>
          <col className = 'ui-datepicker-week-end'/>
          <col className = 'ui-datepicker-week-end'/>
        </colgroup>
        <thead>
        <tr>
          {Array.from({length: 7}).map((val, i) => {
            const date = new Date(2017, 4, 15 + i);
            return (
              <th scope = "col"
                title = {date.toLocaleDateString('ru-RU', {weekday: 'long'})}>{date.toLocaleDateString('ru-RU', {weekday: 'short'})}</th>
            );
          })}
        </tr>
        </thead>
        <tbody>
          {getDay(date)}
        </tbody>
      </table>
    </div>
  );
  return main;
};

function getDay(date) {
  //debugger;
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const firstMonthDay = firstDay.getDay();
  const firstWeekDayTime = firstDay.getTime();
  const firstWeekDay = firstMonthDay - 1;
  const oneDay = 1000 * 60 * 60 * 24;
  let target = firstWeekDayTime - oneDay * firstWeekDay;
  console.log(date);
  console.log(new Date(target));

  debugger;
  let m = new Date();
  if(firstDay.getDay()){
    m.setDate(firstDay.getDate() - firstDay.getDay())
  } else {
    m.setDate(firstDay.getDate() - 8)
  }
  //console.log(new Date(m));


  Array.from({length: 5}).map((val, i) => {
    return (
      <tr>
        {Array.from({length: 7}).map((val, i) => {

          return (
            <td>
              {
                date.getDate() + i
              }
            </td>
          );
        })}
      </tr>
    );
  })
}
