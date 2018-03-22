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
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() - 1, 0);
  console.log(lastDay);
  const firstMonthDay = firstDay.getDay();
  const firstWeekDayTime = firstDay.getTime();
  const oneDay = 1000 * 60 * 60 * 24;

  let firstWeekDay = (firstMonthDay === 0) ? 6 : firstMonthDay - 1;
  let firstMonday = new Date(firstWeekDayTime - oneDay * firstWeekDay);

  let rows = 6;

  const allDays = Array.from({length: rows * 7}).map((val, i) => {
    let classDay = null;
    let firstMondayTime = firstMonday.getTime();
    let nextDay = (new Date(firstMondayTime + oneDay * i));
    if (nextDay.getMonth() !== date.getMonth()) {
      classDay = 'ui-datepicker-other-month';
    } else if (nextDay.getDate() === date.getDate()) {
      classDay = 'ui-datepicker-today';
    }

    return (
      <td className = {classDay}>
        {nextDay.getDate()}
      </td>
    )
  });

  let tr = [];
  let row = [];
  allDays.forEach((day) => {
    tr.push(day);
    if (tr.length === 7) {
      row.push(<tr>
        {tr}
      </tr>);
      tr = [];
    }
  });
  return row;
}
