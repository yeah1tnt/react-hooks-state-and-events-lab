import React, {useState} from "react";

function Item({ name, category }) {
  const [className, toggleClass] = useState(0);
  function toggleName(){
    toggleClass(1);
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={toggleName} className={toggleName ? "in-cart":"add"}>Add to Cart</button>
    </li>
  );
}

export default Item;
