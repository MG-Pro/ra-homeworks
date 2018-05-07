const TextRenderLine = ({value, onChange}) => {
  const changeHandler = (e) => {
    let val = e.currentTarget.value;
    const regex = /^[\a-z\s]+$/i;
    if(!regex.test(val)) {
      val = val.replace(val[val.length - 1], '');
    }
    val = val.toLowerCase();
    onChange(val)
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
        value = {value} />
    </div>
  );
};
