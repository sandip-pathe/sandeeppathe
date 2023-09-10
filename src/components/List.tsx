const items = ["London", "Mumbai", "Japan", "Budapest", "New York"];

function List() {
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((x) => (
          <li>{x}</li>
        ))}
        ;
      </ul>
    </>
  );
}

export default List;
