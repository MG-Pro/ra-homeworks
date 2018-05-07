const SearchBox = (props) => {
  return (
    <input
      type = "text"
      placeholder = "Поиск по названию или автору"
      onChange={(e) => props.filterBooks(e.currentTarget.value)}
    />
  );
};
