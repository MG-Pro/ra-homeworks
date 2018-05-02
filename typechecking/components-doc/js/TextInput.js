'use strict';

const TextInput = props => {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type={props.type} className="form-control" name={props.name} onChange={props.onChange}
             value={props.value} required={props.required}/>
    </div>
  )
};

TextInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.oneOfType(
    [PropTypes.number, PropTypes.string]
  )
};