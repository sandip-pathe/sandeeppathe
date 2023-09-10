import { useState } from "react";
interface Props{
    items: string[];
    heading: string;
}


function List({items, heading }: Props) {
  const [selectedIndex, setselectedIndex] = useState(-1)

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((x, index) => (
          <li
            key={x}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
                setselectedIndex(index) ;
            }}
          >
            {x}
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
