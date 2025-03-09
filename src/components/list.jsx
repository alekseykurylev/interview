import { useState } from "react";

export function List() {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ]);

  const addItem = () => {
    setItems([...items, { id: 4, name: "Item 4" }]);
  };

  return (
    <div>
      {items.map((item) => (
        <div>
          <p>{item.name}</p>
        </div>
      ))}
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}
