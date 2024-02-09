import React, { useState } from "react";

function Item({ name, category }) {
  // State to track whether the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Function to handle adding/removing item to/from the cart
  function handleAddToCart() {
    setIsInCart((prevIsInCart) => !prevIsInCart);
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      {/* Display item name */}
      <span>{name}</span>
      
      {/* Display item category */}
      <span className="category">{category}</span>
      
      {/* Button to add/remove item from the cart */}
      <button className="add" onClick={handleAddToCart}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
