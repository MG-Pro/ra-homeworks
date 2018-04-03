const SearchBox = (props) => {
  let input;
  return (
    <input
      type = "text"
      placeholder = "Поиск по названию или автору"
      ref={elem => input = elem }
      onChange={() => props.filterBooks(input.value)}
    />

  );
};