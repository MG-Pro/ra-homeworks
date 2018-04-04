const TextRenderLine = ({value, onChange}) => {
  let elem;
  const changeHandler = () => {
    onChange(elem.value)
  };

  return (
    <div className = "type-text">
      <textarea
        name = "text"
        id = "font-text"
        cols = "30"
        rows = "2"
        placeholder = "Введите текст для футболки"
        onChange = {changeHandler}
        ref = {val => elem = val}
        value = {value}/>
    </div>
  );
};
