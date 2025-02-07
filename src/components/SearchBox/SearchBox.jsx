const SearchBox = ({ handleSubmit }) => {
  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = form.elements.query.value;

    if (!query.trim()) return;

    handleSubmit(query);
    form.reset();
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
