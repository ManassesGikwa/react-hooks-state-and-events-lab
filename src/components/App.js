import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // State to track whether the app is in dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle between dark and light mode
  function darkModeToggle() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      {/* Header section */}
      <header>
        <h2>Shopster</h2>
        {/* Button to toggle dark/light mode */}
        <button onClick={darkModeToggle}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      {/* ShoppingList component displaying items */}
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
