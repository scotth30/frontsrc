import React, { useState } from "react";

const ListGroup: React.FC = () => {
  // The list of items to be displayed
  const items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
  ];

  // State to keep track of the selected index in the list
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Event handler for when a list item is clicked
  const handleItemClick = (index: number) => {
    // Toggle the selected index: If the same index is clicked, set it to null (unselect), otherwise set the clicked index
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  // JSX to render the component
  return (
    <>
      <h1>List</h1>
      {/* Conditional rendering: Show a message if there are no items */}
      {items.length === 0 ? <p>No Item found</p> : (
        // Render the list if there are items
        <ul className="list-group">
          {/* Map through the items array to create list items */}
          {items.map((item, index) => (
            // List item element with event handler to handle clicks and dynamic styling based on the selected index
            <li
              key={item}
              onClick={() => handleItemClick(index)}
              style={{ fontWeight: selectedIndex === index ? "bold" : "normal" }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ListGroup;
