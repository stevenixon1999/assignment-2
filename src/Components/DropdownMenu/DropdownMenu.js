import React, { useState, useEffect, useRef } from "react";
import "./DropdownMenu.css";
import { Close } from "../../assets/Icon";

const DropdownMenu = ({ buttonTitle, items, showCloseButton }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        {buttonTitle}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {items.map((item, index) => (
            <div key={index} className="dropdown-item">
              {item}
            </div>
          ))}
          {showCloseButton && (
            <button
              className="close-btn"
              onClick={toggleDropdown}
              dangerouslySetInnerHTML={{ __html: Close() }}
            ></button>
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
