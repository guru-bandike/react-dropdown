import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({ items }) => {
  const [selection, setSelection] = useState('Select');
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (item) => {
    setIsOpen(false); // Close the dropdown when an item is clicked
    setSelection(item); // Set the selected item
  };

  return (
    <div
      className="dropdown-container"
      onMouseEnter={() => setIsOpen(true)} // Show dropdown on hover
      onMouseLeave={() => setIsOpen(false)} // Hide dropdown when hover ends
    >
      <button className="dropdown-button">
        <span>{selection}</span>
        <img
          className={`down-arrow ${isOpen ? 'rotate-arrow-up' : ''}`}
          src="./down_arrow.png"
          alt="down arrow"
        />
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li key={index} className="dropdown-item" onClick={() => handleOptionClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
