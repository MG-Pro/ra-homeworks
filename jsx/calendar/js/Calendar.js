const Calendar = props => {
  const {date} = props;
  const dateGenitive = date.toLocaleDateString('ru-RU', {day: 'numeric', month: 'long'});

  const d = new Date(2017, 4, 19);
  console.log(d);

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
      </table>
    </div>
  );
  return main;
};