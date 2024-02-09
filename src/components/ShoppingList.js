import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // State to track the selected category for filtering items
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to handle changes in the selected category
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Filter the items based on the selected category
  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="ShoppingList">
      {/* Filter section with dropdown to select the category */}
      <div className="Filter">
        <select
          name="filter"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      {/* List of items with the selected category filter applied */}
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
