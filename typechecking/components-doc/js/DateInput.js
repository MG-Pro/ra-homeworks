'use strict';

const DateInput = props => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type="text" className="form-control" name={props.name} onChange={props.onChange}
        value={props.value} required={props.required} placeholder="YYYY-MM-DD"/>
    </div>
  )
};

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


DateInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: birthdayValid,
  onChange: PropTypes.func.isRequired
};

DateInput.defaultProps = {
  value: (new Date()).toISOString().slice(0, 10)
};
