'use strict';

const Video = props => {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
};

const DateTimePretty = dateTimeHoc(DateTime);

function dateTimeHoc(Component) {
  return (props, ...args) => {
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
    return <Component date = {getPublicTime(props.date)} />;
  };
}