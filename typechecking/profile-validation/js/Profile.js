'use strict';

const profileStyle = {
  border: '1px solid #cccccc',
  borderRadius: '5px',
  width: '100%',
  height: '100%',
  margin: '5px'
};

const imageStyle = {
  width: '200px',
  height: '200px'
};

const Profile = props => {
  return (
    <div className="col-md-4 text-center" style={{marginBottom: '10px'}}>
      <div style={profileStyle}>
        <h2>{props.first_name} {props.last_name}</h2>
        <div>
          <img src={props.img} className="img-thumbnail" style={imageStyle}/>
        </div>
        <p>vk: <a href={props.url}>{props.url}</a></p>
        <p>birthday: <a href={props.birthday}>{props.birthday}</a></p>
      </div>
    </div>
  );
};

function urlValid(props, propName, componentName) {
  let url = props[propName];
  let valid = (typeof url === 'string') &&
    /^https:\/\/vk\.com\/(id\d+|[\w-]+)$/.test(url);
  if(!valid) {
    return new Error(`Неверное значение '${props[propName]}' параметра ${propName} в компоненте ${componentName}`);
  }
  return null;
}

function birthdayValid(props, propName, componentName) {
  let date = props[propName];
  if(!date) {
    return null;
  }
  let valid = true;
  if(typeof date === 'string' && date.split('-').length === 3) {
    date = date.split('-');
    date = new Date(date[0], date[1] - 1, date[2]);
    if(date.getTime() >= Date.now()) {
      valid = false;
    }
  } else {
    valid = false;
  }

  if(!valid) {
    return new Error(`Неверное значение '${props[propName]}' параметра ${propName} в компоненте ${componentName}`);
  }
}

Profile.defaultProps = {
  img: './images/profile.jpg'
};

Profile.propTypes = {
  url: urlValid,
  birthday: birthdayValid,
  first_name: PropTypes.string,
  last_name: PropTypes.string
};
